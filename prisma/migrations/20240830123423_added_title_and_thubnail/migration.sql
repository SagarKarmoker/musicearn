-- AlterTable
ALTER TABLE "Stream" ADD COLUMN     "thumbnailBig" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "thumbnailSmall" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "title" TEXT NOT NULL DEFAULT '';
