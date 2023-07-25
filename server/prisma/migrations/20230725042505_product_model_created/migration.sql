-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "favourite" BOOLEAN DEFAULT false,
    "cart" BOOLEAN DEFAULT false
);
