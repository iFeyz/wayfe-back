-- CreateTable
CREATE TABLE "ContactEntreprise" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "ContactEntreprise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactIndividual" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "ContactIndividual_pkey" PRIMARY KEY ("id")
);
