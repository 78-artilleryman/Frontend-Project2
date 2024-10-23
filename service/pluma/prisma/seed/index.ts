import { seedFiles } from "./seedFiles";
import { seedFolders } from "./seedFolders";
import { seedGenre } from "./seedGenres";
import { seedNovels } from "./seedNovels";
import { seedUsers } from "./seedUsers";

// npx prisma db seed

async function main() {
  await seedUsers();
  //await seedGenre();
  //await seedNovels();
  //await seedFolders();
  //await seedFiles();
}

main()
  .then(async () => {
    console.log("Seeding complete!");
  })
  .catch(async error => {
    console.error(error);
    process.exit(1);
  });
