/*
  Warnings:

  - Added the required column `imageURL` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "favourite" BOOLEAN DEFAULT false,
    "cart" BOOLEAN DEFAULT false
);
INSERT INTO "new_Product" ("cart", "favourite", "id", "name", "price", "style") SELECT "cart", "favourite", "id", "name", "price", "style" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
