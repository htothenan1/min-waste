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
  deleteItems,
  multiLogIncrement,
} from "./lib/items"
import { revalidatePath } from "next/cache"

export async function createItemAction(email, name, storageTip, expiredAt) {
  await createItem(email, name, storageTip, expiredAt)

  revalidatePath("/")
}

export async function createConsumedItemAction(email, name) {
  await createConsumedItem(email, name)

  revalidatePath("/")
}

export async function createWastedItemAction(email, name) {
  await createWastedItem(email, name)

  revalidatePath("/")
}

export async function deleteItemAction(id) {
  await deleteItemById(id)
  revalidatePath("/")
}

export async function deleteItemsActions(ownerId) {
  await deleteItems(ownerId)
  revalidatePath("/")
}

export async function updateItemAction(id, name, expiredAt) {
  await updateItemById(id, name, expiredAt)
  revalidatePath("/")
}

export async function incrementCounterAction(email) {
  await incrementCounter(email)
  revalidatePath("/")
}

export async function incrementWasteCounterAction(email) {
  await incrementWasteCounter(email)
  revalidatePath("/")
}

export async function incrementLogCounterAction(email) {
  await incrementLogCounter(email)
  revalidatePath("/")
}

export async function incrementMistakeCounterAction(email) {
  await incrementMistakeCounter(email)
  revalidatePath("/")
}

export async function multiLogIncrementAction(email, itemCount) {
  await multiLogIncrement(email, itemCount)
  revalidatePath("/")
}
