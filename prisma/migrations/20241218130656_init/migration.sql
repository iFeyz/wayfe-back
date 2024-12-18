/*
  Warnings:

  - The primary key for the `account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `verification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `session` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `verification` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "account" DROP CONSTRAINT "account_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "account_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "session" DROP CONSTRAINT "session_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "session_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "verification" DROP CONSTRAINT "verification_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "verification_pkey" PRIMARY KEY ("id");
