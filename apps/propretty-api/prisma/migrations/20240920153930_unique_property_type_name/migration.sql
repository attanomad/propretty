/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `PropertyType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PropertyType_name_key" ON "PropertyType"("name");
