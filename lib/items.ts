import prisma from "./prisma";

export async function getItems() {
  try {
    const items = await prisma.item.findMany();
    return { items };
  } catch (err) {
    return { err };
  }
}
