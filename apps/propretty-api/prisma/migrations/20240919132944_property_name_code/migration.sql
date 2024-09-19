/*
  Warnings:

  - A unique constraint covering the columns `[uniqueCode]` on the table `Property` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "uniqueCode" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Property_uniqueCode_key" ON "Property"("uniqueCode");
