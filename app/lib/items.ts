import prisma from "./prisma";

export async function getItems(email: string) {
  try {
    const items = await prisma.item.findMany({});
    return { items };
  } catch (err) {
    return { err };
  }
}

export async function getUser(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        items: true,
      },
    });
    return { user };
  } catch (err) {
    return { err };
  }
}

export async function createItem(email: string, name: string, home: any) {
  try {
    const item = await prisma.item.create({
      data: {
        name,
        home,
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
  expiredAt: string,
  home: any
) {
  try {
    const item = await prisma.item.update({
      where: { id },
      data: { name, expiredAt, home },
    });
    return { item };
  } catch (error) {
    return { error };
  }
}
