/*
  Warnings:

  - You are about to drop the `File` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Folder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_folderId_fkey";

-- DropForeignKey
ALTER TABLE "Folder" DROP CONSTRAINT "Folder_novelId_fkey";

-- DropTable
DROP TABLE "File";

-- DropTable
DROP TABLE "Folder";

-- CreateTable
CREATE TABLE "StoryFolder" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "novelId" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoryFolder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoryFile" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "folderId" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoryFile_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StoryFolder" ADD CONSTRAINT "StoryFolder_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "Novel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryFile" ADD CONSTRAINT "StoryFile_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "StoryFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
