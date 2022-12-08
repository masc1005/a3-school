/*
  Warnings:

  - You are about to drop the column `userId` on the `Class` table. All the data in the column will be lost.
  - You are about to alter the column `cnpj` on the `School` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(14)`.
  - You are about to alter the column `cpf` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(11)`.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_moduleId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_schoolId_fkey";

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "School" ALTER COLUMN "cnpj" SET DATA TYPE VARCHAR(14);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "classId" INTEGER,
ALTER COLUMN "cpf" SET DATA TYPE VARCHAR(11),
ALTER COLUMN "moduleId" DROP NOT NULL,
ALTER COLUMN "schoolId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;
