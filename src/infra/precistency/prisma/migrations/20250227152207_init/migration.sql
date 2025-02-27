-- CreateTable
CREATE TABLE "PlayList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "songs" TEXT[],

    CONSTRAINT "PlayList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlayList" ADD CONSTRAINT "PlayList_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
