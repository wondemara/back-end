/*
  Warnings:

  - Added the required column `updatedAt` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Property" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quartier" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "rooms" TEXT NOT NULL,
    "floors" TEXT NOT NULL,
    "caution" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "sold" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Property" ("adresse", "caution", "city", "description", "floors", "id", "imageUrl", "postal_code", "price", "quartier", "rooms", "sold", "title") SELECT "adresse", "caution", "city", "description", "floors", "id", "imageUrl", "postal_code", "price", "quartier", "rooms", "sold", "title" FROM "Property";
DROP TABLE "Property";
ALTER TABLE "new_Property" RENAME TO "Property";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
