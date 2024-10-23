import { fakerKO as faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedNovels() {
  const totalUsers = await prisma.user.findMany();
  const totalGenres = await prisma.genre.findMany();

  if (totalUsers.length > 1 && totalGenres.length > 1) {
    for (let i = 0; i < 20; i++) {
      const randomUserIndex = Math.floor(Math.random() * totalUsers.length);
      const randomUser = totalUsers[randomUserIndex];

      const novelData = {
        title: faker.lorem.words(),
        description: faker.lorem.text(),
        userId: randomUser.id, // 직접 userId를 설정
      };

      const novel = await prisma.novel.create({
        data: novelData,
      });

      // 랜덤으로 고른 장르 연결
      const selectedGenres: any[] = [];
      for (let j = 0; j < Math.floor(Math.random() * 3) + 1; j++) {
        const randomGenreIndex = Math.floor(Math.random() * totalGenres.length);
        const genreId = totalGenres[randomGenreIndex].id;

        // 중복된 조합이 없는 경우에만 추가
        if (!selectedGenres.includes(genreId)) {
          selectedGenres.push(genreId);
        }
      }

      // 중복 없는 장르를 NovelGenre에 삽입
      for (const genreId of selectedGenres) {
        await prisma.novelGenre.create({
          data: {
            genreId,
            novelId: novel.id,
          },
        });
      }

      console.log(novel);
    }
  }
}
