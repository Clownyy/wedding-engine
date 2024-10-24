/*
  Warnings:

  - Added the required column `couple_desc_1` to the `Couple` table without a default value. This is not possible if the table is not empty.
  - Added the required column `couple_desc_2` to the `Couple` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Couple" ADD COLUMN     "couple_desc_1" TEXT NOT NULL,
ADD COLUMN     "couple_desc_2" TEXT NOT NULL;
