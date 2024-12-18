/*
  Warnings:

  - You are about to drop the `ContactEntreprise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactIndividual` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ContactEntreprise";

-- DropTable
DROP TABLE "ContactIndividual";

-- CreateTable
CREATE TABLE "contactEntreprise" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "contactEntreprise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contactIndividual" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "contactIndividual_pkey" PRIMARY KEY ("id")
);
