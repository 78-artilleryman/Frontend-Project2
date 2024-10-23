import { fakerKO as faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedUsers() {
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
