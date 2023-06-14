"use server";

import { createItem, deleteItemById } from "../../lib/items";
import { revalidatePath } from "next/cache";

export async function createItemAction(name: string, home: any) {
  await createItem(name, home);
  revalidatePath("/");
}

export async function deleteItemAction(id: string) {
  await deleteItemById(id);
  revalidatePath("/");
}
