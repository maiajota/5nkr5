-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "cart" BOOLEAN NOT NULL DEFAULT false,
    "favourite" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Product" ("id", "imageURL", "name", "price", "style") SELECT "id", "imageURL", "name", "price", "style" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
