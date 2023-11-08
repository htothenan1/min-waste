"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import Calendar from "react-calendar"
import { ReloadIcon } from "@/data/icons"
import { useSpring, a } from "@react-spring/web"
import {
  deleteItemAction,
  incrementCounterAction,
  updateItemAction,
  createConsumedItemAction,
  createWastedItemAction,
  incrementWasteCounterAction,
  incrementMistakeCounterAction,
} from "../_actions"
import styles from "./styles/singleItem.module.css"

const SingleItemView = ({
  item,
  handleEditToggle,
  editStatus,
  handleSelectItem,
}) => {
  const { data: session } = useSession()
  const [value, onChange] = useState(new Date())
  const [isFinishedModalOpen, setFinishedModalOpen] = useState(false)
  const [isMistakenModalOpen, setMistakenModalOpen] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [wasteLoading, setWasteLoading] = useState(false)
  const [updateLoading, setUpdateLoading] = useState(false)
  const [flipped, set] = useState(false)

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const deleteMistakenItem = async (data) => {
    setDeleteLoading(true)
    await deleteItemAction(data.id)
    await incrementMistakeCounterAction(session.user.email)
    handleSelectItem(null)
    setMistakenModalOpen(false)
    setDeleteLoading(false)
  }

  const deleteItem = async (data) => {
    setDeleteLoading(true)
    await deleteItemAction(data.id)
    await createConsumedItemAction(session.user.email, data.name)
    await incrementCounterAction(session.user.email)
    handleSelectItem(null)
    setFinishedModalOpen(false)
    setDeleteLoading(false)
  }

  const deleteItemWithWaste = async (data) => {
    setWasteLoading(true)
    await createWastedItemAction(session.user.email, data.name)
    await deleteItemAction(data.id)
    await incrementWasteCounterAction(session.user.email)
    setFinishedModalOpen(false)
    setWasteLoading(false)
    handleSelectItem(null)
  }

  const updateItem = async (data) => {
    setUpdateLoading(true)
    await updateItemAction(data.id, data.name, value)
    handleEditToggle(false)
    handleSelectItem(null)
    onChange(new Date())
    setUpdateLoading(false)
  }

  function MistakenModal({ onClose }) {
    return (
      <div className={styles.modalBackground} onClick={onClose}>
        <div
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className={styles.modalTitle}>Item Added by Mistake</h3>
          <p className={styles.modalSub}>Was this item added by mistake?</p>
          <button
            className={styles.greenButton}
            onClick={() => {
              deleteMistakenItem(item)
            }}
            disabled={deleteLoading}
          >
            {deleteLoading ? (
              <ReloadIcon className={styles.reloadIcon} />
            ) : (
              <p>Yes</p>
            )}
          </button>

          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    )
  }

  function FinishedModal({ onClose }) {
    return (
      <div className={styles.modalBackground} onClick={onClose}>
        <div
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className={styles.modalTitle}>Item Finished</h3>
          <p className={styles.modalSub}>Was any of this item wasted?</p>
          <button
            className={styles.greenButton}
            onClick={() => {
              deleteItem(item)
            }}
            disabled={deleteLoading}
          >
            {deleteLoading ? (
              <ReloadIcon className={styles.reloadIcon} />
            ) : (
              <p>Nope!</p>
            )}
          </button>

          <button
            onClick={() => {
              deleteItemWithWaste(item)
            }}
            disabled={wasteLoading}
            className={styles.redButton}
          >
            {wasteLoading ? (
              <ReloadIcon className={styles.reloadIcon} />
            ) : (
              "Yes"
            )}
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
      {isFinishedModalOpen && (
        <FinishedModal
          onClose={() => setFinishedModalOpen(false)}
        ></FinishedModal>
      )}

      {isMistakenModalOpen && (
        <MistakenModal
          onClose={() => setMistakenModalOpen(false)}
        ></MistakenModal>
      )}

      <div className={styles.itemDetailsContainer}>
        <h2 className={styles.titleText}>Item Details</h2>

        <div className={styles.cardContainer}>
          <a.div
            className={styles.sideA}
            style={{ opacity: opacity.to((o) => 1 - o), transform }}
          >
            {item ? (
              <>
                <button
                  className={styles.storageTipsButton}
                  onClick={() => set((state) => !state)}
                >
                  Click for Storage Tips
                </button>
                <h2 className={styles.itemNameTitle}>{item.name}</h2>
                {editStatus ? (
                  <Calendar
                    minDate={new Date()}
                    className={styles.calendar}
                    onChange={onChange}
                    value={value}
                  />
                ) : (
                  <h2 className={styles.itemDateText}>{`Use By: ${
                    item.expiredAt
                      ? item.expiredAt.toLocaleString("en-En", {
                          weekday: "short",
                          month: "long",
                          day: "numeric",
                        })
                      : "Not set"
                  }`}</h2>
                )}

                {editStatus ? (
                  <button
                    onClick={() => {
                      updateItem(item)
                    }}
                    className={styles.confirmButton}
                  >
                    {updateLoading ? (
                      <ReloadIcon className={styles.reloadIcon} />
                    ) : (
                      "Confirm Changes"
                    )}
                  </button>
                ) : (
                  <button
                    disabled={flipped}
                    onClick={() => {
                      handleEditToggle(true)
                    }}
                    className={styles.changeDateButton}
                  >
                    Change Date
                  </button>
                )}
                {editStatus ? null : (
                  <>
                    <button
                      disabled={flipped}
                      onClick={() => setFinishedModalOpen(true)}
                      className={styles.itemFinishedButton}
                    >
                      Item Finished
                    </button>
                    <button
                      disabled={flipped}
                      onClick={() => setMistakenModalOpen(true)}
                      className={styles.mistakeButton}
                    >
                      Added by mistake?
                    </button>
                  </>
                )}
              </>
            ) : (
              <h2 className={styles.noItemText}>No item selected</h2>
            )}
          </a.div>
          <a.div
            className={styles.sideB}
            style={{
              opacity,
              transform,
              rotateX: "180deg",
            }}
          >
            {item ? (
              <>
                <h2 className={styles.storageTipsTitle}>
                  {`Storage Tips for ${item.name}:`}
                </h2>
                <p className={styles.storageTipsSub}>{item.storageTip}</p>

                <button className={styles.flipBackButton}>Flip Back</button>
              </>
            ) : (
              <h2 className={styles.noItemText}>No item selected</h2>
            )}
          </a.div>
        </div>
      </div>
    </>
  )
}

export default SingleItemView
