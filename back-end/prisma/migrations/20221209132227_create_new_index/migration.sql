/*
  Warnings:

  - A unique constraint covering the columns `[schoolId,moduleId,userId]` on the table `Grade` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_moduleId_fkey";

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_schoolId_fkey";

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "schoolId" DROP NOT NULL,
ALTER COLUMN "moduleId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Grade_schoolId_moduleId_userId_key" ON "Grade"("schoolId", "moduleId", "userId");

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE SET NULL ON UPDATE CASCADE;
