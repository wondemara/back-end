-- CreateTable
CREATE TABLE "Property" (
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
    "sold" BOOLEAN NOT NULL
);
