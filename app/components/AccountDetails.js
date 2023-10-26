"use client"

import { deleteItemsActions } from "@/_actions"
import { useState } from "react"

const AccountDetails = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false)
  const deleteAllItems = async () => {
    await deleteItemsActions(user.id)
    setIsOpen(false)
  }

  function Modal({ onClose, modalRef }) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
        onClick={onClose}
      >
        <div
          ref={modalRef}
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-base font-quicksandBold leading-6 text-gray-900">
            Delete All Current Items!
          </h3>
          <p className="text-sm text-gray-500 font-quicksand">
            Are you sure you want to delete all of your current items?
          </p>
          <div className="mt-5">
            <button
              className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-quicksandBold text-white shadow-sm hover:bg-green-700 active:bg-green-800 sm:w-auto"
              onClick={() => {
                deleteAllItems()
              }}
            >
              Delete Items
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-quicksandBold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 active:bg-gray-200 sm:ml-3 sm:mt-0 sm:w-auto"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {isOpen && <Modal onClose={() => setIsOpen(false)}></Modal>}

      <h1 className=" text-orange-600/70 font-quicksandBold text-4xl">
        {user.name}&apos;s Account
      </h1>
      <h2 className="my-2 text-slate-600 text-lg font-quicksandBold">
        MinWaster since {user.createdAt.toDateString()}
      </h2>
      <button
        className="py-2 px-3 my-3 rounded-md bg-red-600/50 hover:bg-red-700/50 active:bg-red-800/50 text-white text-sm shadow-lg font-quicksand"
        onClick={() => setIsOpen(true)}
      >
        Clear Fridge Items
      </button>
      <h2 className="text-slate-600 text-lg font-quicksandBold mb-2">
        Total Items Logged: {user.loggedCounter - user.mistakeCounter}
      </h2>
    </>
  )
}

export default AccountDetails
