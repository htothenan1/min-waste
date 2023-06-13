"use server";

import { createItem } from "../../lib/items";
import { revalidatePath } from "next/cache";

export async function createItemAction(name: string) {
  await createItem(name);
  revalidatePath("/");
}
