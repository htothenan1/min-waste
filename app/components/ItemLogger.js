"use client"

import { useState } from "react"
import { createItemAction, incrementLogCounterAction } from "../_actions"
import { toast } from "react-toastify"
import { addDays } from "date-fns"
import { useSession } from "next-auth/react"
import { generateStorageTip } from "../utils/openai"
import { ingredientsObjects } from "../data/ingredients"
import { ReloadIcon } from "@radix-ui/react-icons"

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
            ? "bg-red-500/80 hover:bg-red-500/80 text-white"
            : "bg-red-300/30"
        } hover:bg-red-200`
      } else {
        return `${
          selectedItem && data.id === selectedItem.id
            ? "bg-green-400/80 hover:bg-green-400/80 text-white"
            : "bg-green-300/30"
        } hover:bg-green-200/30`
      }
    } else {
      return `${
        selectedItem && data.id === selectedItem.id
          ? "bg-slate-500 hover:bg-slate-500 text-white"
          : "bg-slate-200/30"
      } hover:bg-slate-100/30`
    }
  }

  const confirmAddItems = async () => {
    setLoading(true)
    try {
      await Promise.all(selectedItems.map((item) => confirmAddItem(item)))

      toast.success(`${selectedItems.length} Items added!`, {
        position: "top-center",
        autoClose: 1000,
      })
      setSelectedItems([])
    } catch (error) {
      console.error("Error adding items:", error)
      toast.error(`Failed to add items!`, {
        position: "top-center",
        autoClose: 1000,
      })
    }
    setLoading(false)
  }

  const confirmAddItem = async (clientData) => {
    if (clientData !== null) {
      const tip = ingredientsObjects.find(
        (el) => el.name === clientData
      ).storageTip
      const expDate = addDays(
        new Date(),
        ingredientsObjects.find((el) => el.name === clientData).expInt
      )
      await createItemAction(session.user.email, clientData, tip, expDate)
      await incrementLogCounterAction(session.user.email)
    } else {
      toast.error("Please select an item", {
        position: "top-center",
        autoClose: 1000,
      })
    }
  }

  const addCustomItem = async (clientData) => {
    if (clientData !== "") {
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
      toast.success(`${clientData} added!`, {
        position: "top-center",
        autoClose: 1000,
      })
      setCustomItem("")
    } else {
      toast.error("Cannot be blank", {
        position: "top-center",
        autoClose: 1000,
      })
    }
    setCustomLoading(false)
  }

  return (
    <>
      <div className="my-6 mx-0 md:mx-6">
        <h2 className="font-quicksandBold text-lg text-slate-600 mb-2">
          Groceries
        </h2>

        <button
          onClick={() => {
            confirmAddItems()
          }}
          disabled={selectedItems.length === 0}
          className="py-1.5 px-4 mb-4 outline outline-1 outline-slate-400 font-quicksandBold disabled:text-gray-400 disabled:bg-gray-300 w-full h-10 text-sm rounded-md bg-blue-300"
        >
          {loading ? (
            <ReloadIcon className="animate-spin m-auto" />
          ) : (
            `Add Selected (${selectedItems.length})`
          )}
        </button>

        <ul
          role="list"
          className="flex flex-col h-80 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-2xl rounded-md overflow-y-scroll w-48 mb-7"
        >
          {filteredItems.map((item) => (
            <li
              onClick={() => handleItemSelect(item)}
              key={item.id}
              className={`${
                selectedItems.includes(item.name)
                  ? "bg-white border border-black"
                  : ""
              } relative shadow-lg px-4 py-4 
            focus-within:ring-2 focus-within:ring-green-200 rounded-md cursor-pointer text-sm font-medium font-quicksandBold text-slate-600`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-left mt-6 mb-4 mx-2 md:mx-6">
        <h2 className="text-left pb-2 font-quicksandBold text-lg text-slate-600 ">
          Your Items
        </h2>

        <div className="mb-4">
          <input
            minLength="2"
            maxLength="25"
            value={customItem}
            onChange={(e) => setCustomItem(e.target.value)}
            placeholder="Custom Item"
            className="relative w-36 h-10 cursor-default
         bg-white rounded-md py-1.5 px-4 outline outline-1 outline-slate-400 text-slate-600
          text-sm sm:leading-6 font-quicksandBold mr-1"
          />

          <button
            disabled={customItem === ""}
            onClick={() => addCustomItem(customItem)}
            className={`group w-10 relative py-2 px-1 mx-1 rounded-lg bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-green-200 via-slate-200 to-gray-200 text-xs shadow-lg`}
          >
            <span className="relative text-gray-500 font-quicksandBold">
              {customLoading ? (
                <ReloadIcon className="animate-spin m-auto" />
              ) : (
                "Add"
              )}
            </span>
          </button>
        </div>

        <ul
          role="list"
          className="flex flex-col h-80 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-2xl rounded-lg overflow-y-auto w-48 cursor-pointer"
        >
          {items.length ? (
            items.map((item) => (
              <li
                onClick={() => handleSelectItem(item)}
                key={item.id}
                className={`${calcDaysFrom(item)} relative shadow-lg px-4 py-4 
                focus-within:ring-2 focus-within:ring-green-200 rounded-md`}
              >
                <div className="flex justify-between">
                  <p
                    className={`truncate cursor-default text-sm font-medium ${
                      selectedItem && item.id === selectedItem.id
                        ? "text-white"
                        : "text-slate-600"
                    } font-quicksandBold`}
                  >
                    {item.name}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      selectedItem && item.id === selectedItem.id
                        ? "text-white"
                        : "text-slate-600"
                    } font-quicksandBold`}
                  >{`${Math.round(
                    (item.expiredAt.getTime() - new Date().getTime()) /
                      (1000 * 3600 * 24)
                  )}d`}</p>
                </div>
              </li>
            ))
          ) : (
            <p className=" p-2 cursor-default text-center text-slate-600 my-auto font-quicksand">
              Add an item!
            </p>
          )}
        </ul>
      </div>
    </>
  )
}

export default ItemLogger
