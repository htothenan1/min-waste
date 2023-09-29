"use server"

import {
  createItem,
  deleteItemById,
  updateItemById,
  incrementCounter,
} from "./lib/items"
import { revalidatePath } from "next/cache"

export async function createItemAction(
  email: string,
  name: string,
  storageTip: string,
  expiredAt: string
) {
  await createItem(email, name, storageTip, expiredAt)

  revalidatePath("/")
}

export async function deleteItemAction(id: string) {
  await deleteItemById(id)
  revalidatePath("/")
}

export async function updateItemAction(
  id: string,
  name: string,
  expiredAt: string
) {
  await updateItemById(id, name, expiredAt)
  revalidatePath("/")
}

export async function incrementCounterAction(email: string) {
  await incrementCounter(email)
  revalidatePath("/")
}
