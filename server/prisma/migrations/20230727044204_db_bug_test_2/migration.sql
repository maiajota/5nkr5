/*
  Warnings:

  - You are about to drop the column `cart` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `favourite` on the `Product` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_Product" ("id", "imageURL", "name", "price", "style") SELECT "id", "imageURL", "name", "price", "style" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
