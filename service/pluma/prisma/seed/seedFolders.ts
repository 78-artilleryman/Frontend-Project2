import { fakerKO as faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedFolders() {
  const totalNovels = await prisma.novel.findMany();

  if (totalNovels.length > 0) {
    for (let i = 0; i < 50; i++) {
      const randomNovel = totalNovels[Math.floor(Math.random() * totalNovels.length)];

      const folder = await prisma.folder.create({
        data: {
          name: faker.lorem.words(2),
          novelId: randomNovel.id,
        },
      });

      console.log(folder);
    }
  }
}
