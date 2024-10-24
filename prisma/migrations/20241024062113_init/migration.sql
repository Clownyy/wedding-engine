-- AlterTable
ALTER TABLE "user" ADD COLUMN     "couple_id" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Couple" (
    "id" SERIAL NOT NULL,
    "couple_name_1" TEXT NOT NULL,
    "couple_name_2" TEXT NOT NULL,

    CONSTRAINT "Couple_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Couple_id_key" ON "Couple"("id");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_couple_id_fkey" FOREIGN KEY ("couple_id") REFERENCES "Couple"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
