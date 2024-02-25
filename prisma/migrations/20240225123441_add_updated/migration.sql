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
    "updatedAt" DATETIME
);
INSERT INTO "new_Property" ("adresse", "caution", "city", "createdAt", "description", "floors", "id", "imageUrl", "postal_code", "price", "quartier", "rooms", "sold", "title", "updatedAt") SELECT "adresse", "caution", "city", "createdAt", "description", "floors", "id", "imageUrl", "postal_code", "price", "quartier", "rooms", "sold", "title", "updatedAt" FROM "Property";
DROP TABLE "Property";
ALTER TABLE "new_Property" RENAME TO "Property";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
