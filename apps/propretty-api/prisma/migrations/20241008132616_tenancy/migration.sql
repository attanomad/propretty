/*
  Warnings:

  - A unique constraint covering the columns `[nationalId]` on the table `Tenant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nationalId` to the `Tenant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "gender" TEXT,
ADD COLUMN     "nationalId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_nationalId_key" ON "Tenant"("nationalId");
