"use client"

import { deleteItemsActions } from "@/_actions"
import { useState } from "react"
import styles from "./styles/accountDetails.module.css"

const AccountDetails = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false)
  const deleteAllItems = async () => {
    await deleteItemsActions(user.id)
    setIsOpen(false)
  }

  function Modal({ onClose }) {
    return (
      <div class={styles.modalBackground} onClick={onClose}>
        <div class={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
          <h3 class={styles.modalTitle}>Delete All Current Items!</h3>
          <p class={styles.modalSub}>
            Are you sure you want to delete all of your current items?
          </p>
          <button
            class={styles.greenButton}
            onClick={() => {
              deleteAllItems()
            }}
          >
            Delete All Items
          </button>
          <button class={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      {isOpen && <Modal onClose={() => setIsOpen(false)}></Modal>}

      <h1 class={styles.accountTitleText}>{user.name}&apos;s Account</h1>
      <h2 class={styles.accountRegularText}>
        MinWaster since {user.createdAt.toDateString()}
      </h2>
      <button class={styles.clearFridgeButton} onClick={() => setIsOpen(true)}>
        Clear Fridge Items
      </button>
      <h2 class={styles.accountRegularText}>
        Total Items Logged: {user.loggedCounter - user.mistakeCounter}
      </h2>
    </>
  )
}

export default AccountDetails
