import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     firstName: "Hernan",
  //     email: "hberisso1@gmail.com",
  //   },
  // });
  // console.log(user);
  const users = await prisma.user.deleteMany();
  console.log(users);
  console.log("where do i see this?");
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
