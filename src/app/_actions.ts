"use server";

import { createItem } from "../../lib/items";
import { revalidatePath } from "next/cache";

export async function createItemAction(name: string, home: any) {
  await createItem(name, home);
  revalidatePath("/");
}
