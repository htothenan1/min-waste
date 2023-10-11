"use server"

import {
  createItem,
  createConsumedItem,
  createWastedItem,
  deleteItemById,
  updateItemById,
  incrementCounter,
  incrementWasteCounter,
  incrementLogCounter,
  incrementMistakeCounter,
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

export async function incrementWasteCounterAction(email: string) {
  await incrementWasteCounter(email)
  revalidatePath("/")
}

export async function incrementLogCounterAction(email: string) {
  await incrementLogCounter(email)
  revalidatePath("/")
}

export async function incrementMistakeCounterAction(email: string) {
  await incrementMistakeCounter(email)
  revalidatePath("/")
}
