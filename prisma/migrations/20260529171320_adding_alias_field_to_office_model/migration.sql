/*
  Warnings:

  - A unique constraint covering the columns `[alias]` on the table `office` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `alias` to the `office` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `office` ADD COLUMN `alias` VARCHAR(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `office_alias_key` ON `office`(`alias`);
