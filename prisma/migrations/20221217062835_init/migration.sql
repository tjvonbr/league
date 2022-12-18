-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "sleeperId" TEXT NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "team" VARCHAR(255) NOT NULL,
    "mainPosition" VARCHAR(255) NOT NULL,
    "positions" TEXT[],

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);
