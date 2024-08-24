/*
  Warnings:

  - You are about to drop the column `udated_at` on the `Novel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Novel" DROP COLUMN "udated_at",
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP;
