"use server"

import {
  createItem,
  createConsumedItem,
  createWastedItem,
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

export async function createConsumedItemAction(email: string, name: string) {
  await createConsumedItem(email, name)

  revalidatePath("/")
}

export async function createWastedItemAction(email: string, name: string) {
  await createWastedItem(email, name)

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
