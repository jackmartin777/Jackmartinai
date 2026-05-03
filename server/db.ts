import { eq, and, gte, lte, gt, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, limitedOffers, limitedOfferBookings, InsertLimitedOfferBooking } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getActiveLimitedOffers() {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get offers: database not available");
    return [];
  }

  const now = new Date();
  const result = await db
    .select()
    .from(limitedOffers)
    .where(
      and(
        eq(limitedOffers.isActive, "true"),
        gte(limitedOffers.endDate, now),
        lte(limitedOffers.startDate, now),
        gt(limitedOffers.spotsRemaining, 0)
      )
    );

  return result.map(offer => {
    let includedItems: string[] = [];
    try {
      includedItems = JSON.parse(offer.includedItems);
    } catch {
      console.warn(`[Database] Failed to parse includedItems for offer ${offer.id}`);
    }
    return { ...offer, includedItems };
  });
}

export async function createLimitedOfferBooking(booking: InsertLimitedOfferBooking) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create booking: database not available");
    return undefined;
  }

  try {
    const result = await db.insert(limitedOfferBookings).values(booking);
    return result;
  } catch (error) {
    console.error("[Database] Failed to create booking:", error);
    throw error;
  }
}

export async function getLimitedOfferById(offerId: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get offer: database not available");
    return undefined;
  }

  const result = await db
    .select()
    .from(limitedOffers)
    .where(eq(limitedOffers.id, offerId))
    .limit(1);

  if (result.length === 0) return undefined;

  const offer = result[0];
  let includedItems: string[] = [];
  try {
    includedItems = JSON.parse(offer.includedItems);
  } catch {
    console.warn(`[Database] Failed to parse includedItems for offer ${offer.id}`);
  }
  return { ...offer, includedItems };
}

export async function decrementSpotsRemaining(offerId: number): Promise<boolean> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot decrement spots: database not available");
    return false;
  }

  const result = await db
    .update(limitedOffers)
    .set({ spotsRemaining: sql`${limitedOffers.spotsRemaining} - 1` })
    .where(
      and(
        eq(limitedOffers.id, offerId),
        gt(limitedOffers.spotsRemaining, 0)
      )
    );

  // affectedRows === 0 means no spots were available to decrement.
  // The MySQL2 driver returns an array where the first element has affectedRows.
  const header = result[0] as { affectedRows?: number } | undefined;
  return (header?.affectedRows ?? 0) > 0;
}

// TODO: add feature queries here as your schema grows.
