import { fakerKO as faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

// npx prisma db seed

const prisma = new PrismaClient();

async function seedUsers() {
  Array.from({ length: 10 }, (v, i) => i).forEach(async () => {
    const userData = {
      email: faker.internet.email(),
      name: faker.person.firstName(),
      image: faker.image.avatar(),
    };

    const make = await prisma.user.create({
      data: userData,
    });

    console.log(make);
  });
}

async function seedNovels() {
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

async function seedGenre() {
  const novelGenres = [
    "Fantasy", // 판타지
    "Science Fiction", // SF
    "Romance", // 로맨스
    "Mystery", // 추리
    "Thriller", // 스릴러
    "Horror", // 공포
    "Historical Fiction", // 역사
    "Adventure", // 모험
    "Drama", // 드라마
    "Comedy", // 코미디
  ];

  novelGenres.map(async genre => {
    const genreData = {
      name: genre,
    };

    const make = await prisma.genre.create({
      data: genreData,
    });

    console.log(make);
  });
}

async function main() {
  // seedUsers();
  seedNovels();
  // seedGenre();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async event => {
    console.error(event);
    await prisma.$disconnect();
    process.exit(1);
  });
