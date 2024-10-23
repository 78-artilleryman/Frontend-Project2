import { fakerKO as faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedFiles() {
  const totalFolders = await prisma.folder.findMany();

  if (totalFolders.length > 0) {
    for (let i = 0; i < 100; i++) {
      const randomFolder = totalFolders[Math.floor(Math.random() * totalFolders.length)];

      const file = await prisma.file.create({
        data: {
          name: faker.lorem.words(2),
          content: faker.lorem.paragraphs(3),
          folderId: randomFolder.id,
        },
      });

      console.log(file);
    }
  }
}
