import prisma from "./prisma";

export async function getUser(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        items: {
          orderBy: {
            expiredAt: {
              sort: "asc",
              nulls: "last",
            },
          },
        },
      },
    });
    return { user };
  } catch (err) {
    return { err };
  }
}

export async function createItem(
  email: string,
  name: string,
  storageTip: string
) {
  try {
    const item = await prisma.item.create({
      data: {
        name,
        storageTip,
        owner: {
          connect: {
            email,
          },
        },
      },
    });
    return { item };
  } catch (error) {
    return { error };
  }
}

export async function getItemById(id: string) {
  try {
    const item = await prisma.item.findUnique({ where: { id } });
    return { item };
  } catch (error) {
    return { error };
  }
}

export async function deleteItemById(id: string) {
  try {
    const item = await prisma.item.delete({
      where: {
        id,
      },
    });
    return { item };
  } catch (error) {
    return { error };
  }
}

export async function updateItemById(
  id: string,
  name: string,
  expiredAt: string
) {
  try {
    const item = await prisma.item.update({
      where: { id },
      data: { name, expiredAt },
    });
    return { item };
  } catch (error) {
    return { error };
  }
}

export async function incrementCounter(email: string) {
  try {
    const user = await prisma.user.update({
      where: { email },
      data: { itemsCounter: { increment: 1 } },
    });
    return { user };
  } catch (error) {
    return { error };
  }
}
