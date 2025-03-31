-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "QueryType" AS ENUM ('GENERAL', 'SUPPORT', 'FEEDBACK', 'BUSINESS');

-- CreateEnum
CREATE TYPE "MessageStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'RESOLVED');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "metalink" TEXT,
    "instalink" TEXT,
    "tweetlink" TEXT,
    "linkedin" TEXT,
    "titleprofile" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "profilepath" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Icon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Icon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "principal" BOOLEAN NOT NULL,
    "iconId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "markdownpath" TEXT NOT NULL,
    "imagepath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Messages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "queryType" "QueryType" NOT NULL,
    "content" TEXT NOT NULL,
    "status" "MessageStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Icon_name_key" ON "Icon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Categorie_name_key" ON "Categorie"("name");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categorie" ADD CONSTRAINT "Categorie_iconId_fkey" FOREIGN KEY ("iconId") REFERENCES "Icon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
