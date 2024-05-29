-- CreateTable
CREATE TABLE "WinHistory" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "cashtokenId" TEXT NOT NULL,

    CONSTRAINT "WinHistory_pkey" PRIMARY KEY ("id")
);
