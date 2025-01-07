-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Guest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "count" TEXT
);
INSERT INTO "new_Guest" ("count", "id", "name") SELECT "count", "id", "name" FROM "Guest";
DROP TABLE "Guest";
ALTER TABLE "new_Guest" RENAME TO "Guest";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
