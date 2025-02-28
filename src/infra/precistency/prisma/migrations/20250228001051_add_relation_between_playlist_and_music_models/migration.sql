/*
  Warnings:

  - You are about to drop the column `songs` on the `PlayList` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PlayList" DROP COLUMN "songs";

-- CreateTable
CREATE TABLE "PlaylistMusic" (
    "playlistId" TEXT NOT NULL,
    "musicId" TEXT NOT NULL,

    CONSTRAINT "PlaylistMusic_pkey" PRIMARY KEY ("playlistId","musicId")
);

-- AddForeignKey
ALTER TABLE "PlaylistMusic" ADD CONSTRAINT "PlaylistMusic_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "PlayList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistMusic" ADD CONSTRAINT "PlaylistMusic_musicId_fkey" FOREIGN KEY ("musicId") REFERENCES "Music"("id") ON DELETE CASCADE ON UPDATE CASCADE;
