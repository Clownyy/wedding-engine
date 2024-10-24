/*
  Warnings:

  - You are about to drop the column `user_id` on the `greeting` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `guest` table. All the data in the column will be lost.
  - You are about to drop the `Couple` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `couple_id` to the `greeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `couple_id` to the `guest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "greeting" DROP CONSTRAINT "greeting_user_id_fkey";

-- DropForeignKey
ALTER TABLE "guest" DROP CONSTRAINT "guest_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_couple_id_fkey";

-- AlterTable
ALTER TABLE "greeting" DROP COLUMN "user_id",
ADD COLUMN     "couple_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "guest" DROP COLUMN "user_id",
ADD COLUMN     "couple_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Couple";

-- CreateTable
CREATE TABLE "couple" (
    "id" SERIAL NOT NULL,
    "couple_name_1" TEXT NOT NULL,
    "couple_desc_1" TEXT NOT NULL,
    "couple_name_2" TEXT NOT NULL,
    "couple_desc_2" TEXT NOT NULL,

    CONSTRAINT "couple_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "couple_id_key" ON "couple"("id");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_couple_id_fkey" FOREIGN KEY ("couple_id") REFERENCES "couple"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guest" ADD CONSTRAINT "guest_couple_id_fkey" FOREIGN KEY ("couple_id") REFERENCES "couple"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "greeting" ADD CONSTRAINT "greeting_couple_id_fkey" FOREIGN KEY ("couple_id") REFERENCES "couple"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
