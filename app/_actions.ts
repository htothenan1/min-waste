"use server";

import { createItem, deleteItemById, updateItemById } from "./lib/items";
import { revalidatePath } from "next/cache";

export async function createItemAction(email: string, name: string, home: any) {
  await createItem(email, name, home);
  revalidatePath("/");
}

export async function deleteItemAction(id: string) {
  await deleteItemById(id);
  revalidatePath("/");
}

export async function updateItemAction(
  id: string,
  name: string,
  expiredAt: string,
  home: any
) {
  await updateItemById(id, name, expiredAt, home);
  revalidatePath("/");
}
