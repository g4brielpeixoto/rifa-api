/*
  Warnings:

  - Added the required column `pixType` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatsapp` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "pixType" TEXT NOT NULL,
ADD COLUMN     "whatsapp" TEXT NOT NULL;
