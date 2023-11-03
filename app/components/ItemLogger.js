"use client"

import { useState } from "react"
import { createItemAction, incrementLogCounterAction } from "../_actions"
import { addDays } from "date-fns"
import { useSession } from "next-auth/react"
import { generateStorageTip } from "../utils/openai"
import { ingredientsObjects } from "../data/ingredients"
import { ReloadIcon } from "@/data/icons"
import styles from "./styles/itemLogger.module.css"

const ItemLogger = ({ items, selectedItem, handleSelectItem }) => {
  const [selectedItems, setSelectedItems] = useState([])
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const [customLoading, setCustomLoading] = useState(false)
  const [customItem, setCustomItem] = useState("")

  const filteredItems = ingredientsObjects.filter((el1) => {
    return !items.some((el2) => {
      return el2.name === el1.name
    })
  })

  const handleItemSelect = (item) => {
    if (!selectedItems.includes(item.name)) {
      setSelectedItems((prevItems) => [...prevItems, item.name])
    } else {
      setSelectedItems((prevItems) => prevItems.filter((i) => i !== item.name))
    }
    console.log(selectedItems)
  }

  const calcDaysFrom = (data) => {
    if (data.expiredAt) {
      const daysFrom =
        (data.expiredAt.getTime() - new Date().getTime()) / (1000 * 3600 * 24)

      if (daysFrom < 2) {
        return `${
          selectedItem && data.id === selectedItem.id
            ? styles.redItemSelected
            : styles.redItem
        }`
      } else {
        return `${
          selectedItem && data.id === selectedItem.id
            ? styles.greenItemSelected
            : styles.greenItem
        }`
      }
    } else {
      return
    }
  }

  const confirmAddItems = async () => {
    setLoading(true)
    try {
      await Promise.all(selectedItems.map((item) => confirmAddItem(item)))
      setSelectedItems([])
    } catch (error) {
      console.error("Error adding items:", error)
    }
    setLoading(false)
  }

  const confirmAddItem = async (clientData) => {
    const tip = ingredientsObjects.find(
      (el) => el.name === clientData
    ).storageTip
    const expDate = addDays(
      new Date(),
      ingredientsObjects.find((el) => el.name === clientData).expInt
    )
    await createItemAction(session.user.email, clientData, tip, expDate)
    await incrementLogCounterAction(session.user.email)
  }

  const addCustomItem = async (clientData) => {
    setCustomLoading(true)
    const tip = await generateStorageTip(clientData)
    const fiveDaysFromToday = addDays(new Date(), 5)
    await createItemAction(
      session.user.email,
      clientData,
      tip,
      fiveDaysFromToday
    )
    await incrementLogCounterAction(session.user.email)
    setCustomItem("")
    setCustomLoading(false)
  }

  return (
    <>
      <div class={styles.groceriesContainer}>
        <h2 class={styles.titleText}>Groceries</h2>
        <button
          onClick={() => {
            confirmAddItems()
          }}
          disabled={selectedItems.length === 0}
          class={styles.addItemsButton}
        >
          {loading ? (
            <ReloadIcon class={styles.reloadIcon} />
          ) : (
            <p class={selectedItems.length && styles.whiteText}>
              Add Selected ({selectedItems.length})
            </p>
          )}
        </button>

        <div role="list" class={styles.groceriesList}>
          {filteredItems.map((item) => (
            <div
              onClick={() => handleItemSelect(item)}
              key={item.id}
              class={`${styles.groceryItem} ${
                selectedItems.includes(item.name) && styles.selectedGroceryItem
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div class={styles.itemsContainer}>
        <h2 class={styles.titleText}>Your Items</h2>
        <div>
          <input
            minLength="2"
            maxLength="25"
            value={customItem}
            onChange={(e) => setCustomItem(e.target.value)}
            placeholder="Custom Item"
            class={styles.customAddInput}
          />

          <button
            disabled={customItem === ""}
            onClick={() => addCustomItem(customItem)}
            class={styles.customAddButton}
          >
            {customLoading ? <ReloadIcon class={styles.reloadIcon} /> : "Add"}
          </button>
        </div>

        <div role="list" class={styles.itemsList}>
          {items.length ? (
            items.map((item) => (
              <div
                onClick={() => handleSelectItem(item)}
                key={item.id}
                class={`${calcDaysFrom(item)}`}
              >
                <div class={styles.listItemContainer}>
                  <p>{item.name}</p>
                  <p>{`${Math.round(
                    (item.expiredAt.getTime() - new Date().getTime()) /
                      (1000 * 3600 * 24)
                  )}d`}</p>
                </div>
              </div>
            ))
          ) : (
            <p class={styles.emptyListText}>Add an item!</p>
          )}
        </div>
      </div>
    </>
  )
}

export default ItemLogger
