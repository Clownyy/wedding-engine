-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_couple_id_fkey";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "couple_id" DROP NOT NULL,
ALTER COLUMN "couple_id" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_couple_id_fkey" FOREIGN KEY ("couple_id") REFERENCES "Couple"("id") ON DELETE SET NULL ON UPDATE CASCADE;
