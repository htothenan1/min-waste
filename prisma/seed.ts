import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // do your database stuff here, if you will
  // then run this file
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
