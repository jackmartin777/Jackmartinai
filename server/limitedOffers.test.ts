import { describe, it, expect, vi, beforeEach } from "vitest";
import { getActiveLimitedOffers, createLimitedOfferBooking } from "./db";

// Mock the database module
vi.mock("./db", async () => {
  const actual = await vi.importActual("./db");
  return {
    ...actual,
    getActiveLimitedOffers: vi.fn(),
    createLimitedOfferBooking: vi.fn(),
  };
});

describe("Limited Offers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getActiveLimitedOffers", () => {
    it("should return an empty array when no offers are active", async () => {
      const mockGetActiveLimitedOffers = vi.mocked(getActiveLimitedOffers);
      mockGetActiveLimitedOffers.mockResolvedValueOnce([]);

      const result = await getActiveLimitedOffers();
      expect(result).toEqual([]);
    });

    it("should parse includedItems JSON correctly", async () => {
      const mockGetActiveLimitedOffers = vi.mocked(getActiveLimitedOffers);
      const mockOffer = {
        id: 1,
        title: "Mac Mini M4 Setup",
        description: "Complete setup",
        price: 2950000,
        deposit: 1475000,
        spotsAvailable: 2,
        spotsRemaining: 2,
        includedItems: ["Mac Mini M4", "Claude Code", "OpenClaw"],
        startDate: new Date(),
        endDate: new Date(Date.now() + 86400000),
        isActive: "true",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockGetActiveLimitedOffers.mockResolvedValueOnce([mockOffer]);

      const result = await getActiveLimitedOffers();
      expect(result).toHaveLength(1);
      expect(result[0].includedItems).toEqual(["Mac Mini M4", "Claude Code", "OpenClaw"]);
    });
  });

  describe("createLimitedOfferBooking", () => {
    it("should create a booking with pending status", async () => {
      const mockCreateBooking = vi.mocked(createLimitedOfferBooking);
      mockCreateBooking.mockResolvedValueOnce({ insertId: 1 });

      const booking = {
        offerId: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "+27671334194",
        status: "pending" as const,
      };

      const result = await createLimitedOfferBooking(booking);
      expect(result).toEqual({ insertId: 1 });
      expect(mockCreateBooking).toHaveBeenCalledWith(booking);
    });

    it("should handle booking creation errors", async () => {
      const mockCreateBooking = vi.mocked(createLimitedOfferBooking);
      mockCreateBooking.mockRejectedValueOnce(new Error("Database error"));

      const booking = {
        offerId: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "+27671334194",
        status: "pending" as const,
      };

      await expect(createLimitedOfferBooking(booking)).rejects.toThrow("Database error");
    });
  });
});
