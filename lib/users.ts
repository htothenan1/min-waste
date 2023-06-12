import prisma from "./prisma";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (err) {
    return { err };
  }
}
