"use client"

import {
  deleteItemAction,
  incrementCounterAction,
  updateItemAction,
  createConsumedItemAction,
  createWastedItemAction,
  incrementWasteCounterAction,
  incrementMistakeCounterAction,
} from "../_actions"
import { useState } from "react"
import { useSession } from "next-auth/react"
import Calendar from "react-calendar"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useSpring, a } from "@react-spring/web"
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
      <div class={styles.modalBackground} onClick={onClose}>
        <div class={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
          <h3 class={styles.modalTitle}>Item Added by Mistake</h3>
          <p class={styles.modalSub}>Was this item added by mistake?</p>
          <button
            class={styles.greenButton}
            onClick={() => {
              deleteMistakenItem(item)
            }}
            disabled={deleteLoading}
          >
            {deleteLoading ? (
              <ReloadIcon class={styles.reloadIcon} />
            ) : (
              <p>Yes</p>
            )}
          </button>

          <button type="button" class={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    )
  }

  function FinishedModal({ onClose }) {
    return (
      <div class={styles.modalBackground} onClick={onClose}>
        <div class={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
          <h3 class={styles.modalTitle}>Item Finished</h3>
          <p class={styles.modalSub}>Was any of this item wasted?</p>
          <button
            class={styles.greenButton}
            onClick={() => {
              deleteItem(item)
            }}
            disabled={deleteLoading}
          >
            {deleteLoading ? (
              <ReloadIcon class={styles.reloadIcon} />
            ) : (
              <>Nope!</>
            )}
          </button>

          <button
            onClick={() => {
              deleteItemWithWaste(item)
            }}
            disabled={wasteLoading}
            type="button"
            class={styles.redButton}
          >
            {wasteLoading ? <ReloadIcon class={styles.reloadIcon} /> : "Yes"}
          </button>

          <button type="button" class={styles.cancelButton} onClick={onClose}>
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

      <div className="flex flex-col m-6">
        <h2 className="text-left pb-2 font-quicksandBold text-lg text-slate-600">
          Item Details
        </h2>

        <div className="flex items-center justify-center">
          <a.div
            className="flex flex-col z-10 items-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-2xl rounded-lg w-96 h-72"
            style={{ opacity: opacity.to((o) => 1 - o), transform }}
          >
            {item ? (
              <>
                <button
                  className="bg-white rounded-b-md p-1 text-sm font-quicksand hover:bg-slate-50 active:bg-slate-100"
                  onClick={() => set((state) => !state)}
                >
                  Click for Storage Tips
                </button>
                <h2 className="mt-2 text-slate-600 text-lg font-quicksandBold cursor-default">
                  {item.name}
                </h2>
                {editStatus ? (
                  <div>
                    <Calendar
                      minDate={new Date()}
                      className={` rounded-lg text-sm`}
                      onChange={onChange}
                      value={value}
                    />
                  </div>
                ) : (
                  <h2 className="text-slate-600 cursor-default mb-2 font-quicksand">{`Use By: ${
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
                    className={`shadow-lg my-3 py-2 px-3 rounded-md ${
                      updateLoading
                        ? "bg-slate-400 hover:bg-slate-500 active:bg-slate-600"
                        : "bg-blue-500/80 hover:bg-blue-600/80 active:bg-blue-700/80"
                    }   text-white text-sm`}
                  >
                    {updateLoading ? (
                      <div className="flex justify-center items-center">
                        Please Wait
                        <ReloadIcon className="ml-2 h-4 w-4 animate-spin" />
                      </div>
                    ) : (
                      "Confirm Changes"
                    )}
                  </button>
                ) : (
                  <button
                    disabled={flipped}
                    type="button"
                    onClick={() => {
                      handleEditToggle(true)
                    }}
                    className="py-2 px-3 my-3 mt-3 rounded-md bg-blue-500/80 hover:bg-blue-600/80 active:bg-blue-700/80 text-white text-sm shadow-lg font-quicksand"
                  >
                    Change Date
                  </button>
                )}
                {editStatus ? null : (
                  <>
                    <button
                      disabled={flipped}
                      onClick={() => setFinishedModalOpen(true)}
                      className="py-2 px-3 my-3 rounded-md bg-green-600/50 hover:bg-green-700/50 active:bg-green-800/50 text-white text-sm shadow-lg font-quicksand"
                    >
                      Item Finished
                    </button>
                    <button
                      disabled={flipped}
                      onClick={() => setMistakenModalOpen(true)}
                      className=" text-xs text-red-500 text-center border border-red-500 py-2 px-3 my-3 rounded-md shadow-lg font-quicksand bg-white hover:bg-slate-100 active:bg-slate-200/50"
                    >
                      Added by mistake?
                    </button>
                  </>
                )}
              </>
            ) : (
              <h2 className="text-center my-auto cursor-default text-slate-600 font-quicksand">
                No item selected
              </h2>
            )}
          </a.div>
          <a.div
            className="flex flex-col absolute items-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-lg rounded-md w-96 h-72 overflow-scroll"
            style={{
              opacity,
              transform,
              rotateX: "180deg",
            }}
          >
            {item ? (
              <>
                <h2 className="mt-3 text-slate-600 text-lg font-quicksandBold cursor-default">
                  {`Storage Tips for ${item.name}:`}
                </h2>
                <p className="px-4 text-left font-quicksand ">
                  {item.storageTip}
                </p>

                <button className="absolute bottom-0 bg-white rounded-t-md p-1 text-sm font-quicksand">
                  Flip Back
                </button>
              </>
            ) : (
              <h2 className="text-center my-auto cursor-default text-slate-600 font-quicksand">
                No item selected
              </h2>
            )}
          </a.div>
        </div>
      </div>
    </>
  )
}

export default SingleItemView
