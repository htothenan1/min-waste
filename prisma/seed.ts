import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // do your database stuff here
  // then run the file
  const item = await prisma.item.update({
    where: {
      // ... provide filter here
      id: "634c3d28-61db-472f-89f2-5454fc9ece31",
    },
    data: {
      // ... provide data here
      name: "White Grapes",
    },
  });
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
