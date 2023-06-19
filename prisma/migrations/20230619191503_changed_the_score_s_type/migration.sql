/*
  Warnings:

  - You are about to drop the column `final_score` on the `student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `student` DROP COLUMN `final_score`,
    ADD COLUMN `score` DOUBLE NULL;
