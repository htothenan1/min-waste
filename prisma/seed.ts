import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const item = await prisma.item.update({
    where: {
      id: "634c3d28-61db-472f-89f2-5454fc9ece31",
    },
    data: {
      name: "White Grapes",
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
