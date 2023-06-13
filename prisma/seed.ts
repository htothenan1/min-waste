import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   await prisma.user.deleteMany();
  //   const users = await prisma.user.createMany({
  //     data: [
  //       { firstName: "Bob", email: "bob@prisma.io" },
  //       { firstName: "Bobo", email: "bobo@prisma.io" },
  //       { firstName: "Yewande", email: "yewande@prisma.io" },
  //       { firstName: "Angelique", email: "angelique@prisma.io" },
  //     ],
  //   });
  //   console.log(users);
  // const user = await prisma.user.create({
  //   data: {
  //     firstName: "Hernan",
  //     email: "hernan@gmail.com",
  //     items: {
  //       create: [
  //         {
  //           name: "steak",
  //         },
  //         {
  //           name: "chicken",
  //         },
  //         {
  //           name: "pasta",
  //         },
  //       ],
  //     },
  //   },
  // });
  // const item = await prisma.item.create({
  //   data: {
  //     name: "poop",
  //     owner: {
  //       connect: {
  //         id: "1f0a4a5e-2ddf-4f3d-85a1-637a0ab999ff",
  //       },
  //     },
  //   },
  // });
  // console.log("great success");
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
