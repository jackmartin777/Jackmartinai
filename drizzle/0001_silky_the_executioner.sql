CREATE TABLE `limitedOfferBookings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`offerId` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`status` enum('pending','confirmed','completed','cancelled') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `limitedOfferBookings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `limitedOffers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`price` int NOT NULL,
	`deposit` int NOT NULL,
	`spotsAvailable` int NOT NULL DEFAULT 2,
	`spotsRemaining` int NOT NULL DEFAULT 2,
	`includedItems` text NOT NULL,
	`startDate` timestamp NOT NULL,
	`endDate` timestamp NOT NULL,
	`isActive` enum('true','false') NOT NULL DEFAULT 'true',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `limitedOffers_id` PRIMARY KEY(`id`)
);
