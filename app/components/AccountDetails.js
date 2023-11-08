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
      <h2 className={styles.accountRegularText}>
        Total Items Logged: {user.loggedCounter - user.mistakeCounter}
      </h2>
    </>
  )
}

export default AccountDetails
