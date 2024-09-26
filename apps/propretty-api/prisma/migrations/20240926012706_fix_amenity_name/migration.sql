/*
  Warnings:

  - You are about to drop the `PropertyAmenitiy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PropertyToPropertyAmenitiy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PropertyToPropertyAmenitiy" DROP CONSTRAINT "_PropertyToPropertyAmenitiy_A_fkey";

-- DropForeignKey
ALTER TABLE "_PropertyToPropertyAmenitiy" DROP CONSTRAINT "_PropertyToPropertyAmenitiy_B_fkey";

-- DropTable
DROP TABLE "PropertyAmenitiy";

-- DropTable
DROP TABLE "_PropertyToPropertyAmenitiy";

-- CreateTable
CREATE TABLE "PropertyAmenity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PropertyAmenity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PropertyToPropertyAmenity" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PropertyAmenity_name_key" ON "PropertyAmenity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_PropertyToPropertyAmenity_AB_unique" ON "_PropertyToPropertyAmenity"("A", "B");

-- CreateIndex
CREATE INDEX "_PropertyToPropertyAmenity_B_index" ON "_PropertyToPropertyAmenity"("B");

-- AddForeignKey
ALTER TABLE "_PropertyToPropertyAmenity" ADD CONSTRAINT "_PropertyToPropertyAmenity_A_fkey" FOREIGN KEY ("A") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PropertyToPropertyAmenity" ADD CONSTRAINT "_PropertyToPropertyAmenity_B_fkey" FOREIGN KEY ("B") REFERENCES "PropertyAmenity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
