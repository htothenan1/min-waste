"use client"

import {
  createItemAction,
  deleteItemsActions,
  incrementLogCounterAction,
} from "@/_actions"
import { addDays } from "date-fns"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { generateStorageTip, receiptTest, veggiesTest } from "@/utils/openai"
import styles from "./styles/accountDetails.module.css"
import { ReloadIcon } from "@/data/icons"

const AccountDetails = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()
  const [file, setFile] = useState(undefined)
  const [itemList, setItemList] = useState([])
  const [loading, setLoading] = useState(false)
  const [openLoading, setOpenLoading] = useState(false)
  const deleteAllItems = async () => {
    await deleteItemsActions(user.id)
    setIsOpen(false)
  }

  const addCustomItem = async (clientData) => {
    const tip = await generateStorageTip(clientData)
    const fiveDaysFromToday = addDays(new Date(), 5)
    await createItemAction(
      session.user.email,
      clientData,
      tip,
      fiveDaysFromToday
    )
    await incrementLogCounterAction(session.user.email)
  }

  const handleAddItems = () => {
    handleVeggies()
    itemList.forEach((item) => {
      addCustomItem(item)
    })
  }

  const confirmAddItems = async () => {
    setLoading(true)
    try {
      await Promise.all(itemList.map((item) => addCustomItem(item)))
    } catch (error) {
      console.error("Error adding items:", error)
    }
    setLoading(false)
  }

  const handleVeggies = async () => {
    setOpenLoading(true)
    const items = await veggiesTest(file)
    const itemsArray = items.message.content.split(",")
    setItemList(itemsArray)
    setOpenLoading(false)
  }

  const handleOnChange = (e) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setFile(reader.result)
    })
    reader.readAsDataURL(e.target.files[0])
  }

  function Modal({ onClose }) {
    return (
      <div className={styles.modalBackground} onClick={onClose}>
        <div
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className={styles.modalTitle}>Delete All Current Items!</h3>
          <p className={styles.modalSub}>
            Are you sure you want to delete all of your current items?
          </p>
          <button
            className={styles.greenButton}
            onClick={() => {
              deleteAllItems()
            }}
          >
            Delete All Items
          </button>

          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      {isOpen && <Modal onClose={() => setIsOpen(false)}></Modal>}

      <h1 className={styles.accountTitleText}>{user.name}&apos;s Account</h1>
      <h2 className={styles.accountRegularText}>
        MinWaster since {user.createdAt.toDateString()}
      </h2>
      <button
        className={styles.clearFridgeButton}
        onClick={() => setIsOpen(true)}
      >
        Clear Fridge Items
      </button>
      <input type="file" onChange={(e) => handleOnChange(e)} />
      <button
        className={styles.clearFridgeButton}
        onClick={() => handleVeggies()}
      >
        {openLoading ? (
          <ReloadIcon className={styles.reloadIcon} />
        ) : (
          "Analyze Photo"
        )}
      </button>
      {/* <button
        className={styles.clearFridgeButton}
        onClick={() => receiptTest(file)}
      >
        Receipt Test
      </button> */}
      {/* <button
        className={styles.greenButton}
        onClick={() => {
          console.log(itemList)
        }}
      >
        console Log File
      </button> */}
      <button className={styles.greenButton} onClick={() => confirmAddItems()}>
        {loading ? <ReloadIcon className={styles.reloadIcon} /> : "Add Items"}
      </button>
      <h2 className={styles.accountRegularText}>
        Total Items Logged: {user.loggedCounter - user.mistakeCounter}
      </h2>
    </>
  )
}

export default AccountDetails
