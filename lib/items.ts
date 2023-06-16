import prisma from "./prisma";

export async function getItems() {
  try {
    const items = await prisma.item.findMany();
    return { items };
  } catch (err) {
    return { err };
  }
}

export async function createItem(name: string, home: any) {
  try {
    const item = await prisma.item.create({
      data: {
        name,
        home,
        owner: {
          connect: {
            // temporarily saves item to hernan
            id: "1f0a4a5e-2ddf-4f3d-85a1-637a0ab999ff",
            // id: ownerId,
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
