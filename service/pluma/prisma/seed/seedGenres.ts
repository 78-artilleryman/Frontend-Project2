import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedGenre() {
  const novelGenres = [
    "Fantasy",
    "Science Fiction",
    "Romance",
    "Mystery",
    "Thriller",
    "Horror",
    "Historical Fiction",
    "Adventure",
    "Drama",
    "Comedy",
  ];

  for (const genre of novelGenres) {
    const genreData = {
      name: genre,
    };

    const make = await prisma.genre.create({
      data: genreData,
    });

    console.log(make);
  }
}
