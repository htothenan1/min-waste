-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "expired" DROP NOT NULL,
ALTER COLUMN "expiredAt" DROP NOT NULL,
ALTER COLUMN "home" SET DEFAULT 'PANTRY';
