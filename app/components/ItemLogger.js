"use client"

import { useState } from "react"
import { isMobile } from "react-device-detect"
import { useDoubleTap } from "use-double-tap"
import { createItemAction } from "../_actions"
import { toast } from "react-toastify"
import { addDays } from "date-fns"
import { useSession } from "next-auth/react"
import { generateStorageTip } from "../utils/openai"
import { ingredientsObjects } from "../data/ingredients"

const ItemLogger = ({ items, selectedItem, handleSelectItem }) => {
  const [selected, setSelected] = useState(null)
  const [date, setDate] = useState(new Date())
  const { data: session } = useSession()
  const [customLoading, setCustomLoading] = useState(false)
  const [customItem, setCustomItem] = useState("")

  const filteredItems = ingredientsObjects.filter((el1) => {
    return !items.some((el2) => {
      return el2.name === el1.name
    })
  })

  const calcDaysFrom = (data) => {
    if (data.expiredAt) {
      const daysFrom =
        (data.expiredAt.getTime() - new Date().getTime()) / (1000 * 3600 * 24)

      if (daysFrom < 2) {
        return `${
          selectedItem && data.name === selectedItem.name
            ? "bg-red-500/80 hover:bg-red-500/80 text-white"
            : "bg-red-300/30"
        } hover:bg-red-200`
      } else {
        return `${
          selectedItem && data.name === selectedItem.name
            ? "bg-green-400/80 hover:bg-green-400/80 text-white"
            : "bg-green-300/30"
        } hover:bg-green-200/30`
      }
    } else {
      return `${
        selectedItem && data.name === selectedItem.name
          ? "bg-slate-500 hover:bg-slate-500 text-white"
          : "bg-slate-200/30"
      } hover:bg-slate-100/30`
    }
  }

  const handleOnDrag = (e, name) => {
    setSelected(name)
  }

  const isToday = (someDate) => {
    const today = new Date()
    return (
      someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
    )
  }

  const confirmAddItem = async (clientData) => {
    if (clientData !== null) {
      const tip = ingredientsObjects.find(
        (el) => el.name === selected
      ).storageTip
      const fiveDaysFromToday = addDays(new Date(), 5)
      const finalDate = isToday(date) ? fiveDaysFromToday : date
      await createItemAction(session.user.email, clientData, tip, finalDate)
    } else {
      toast.error("Please select an item", {
        position: "top-center",
        autoClose: 1250,
      })
    }
    setDate(new Date())
  }

  const bind = useDoubleTap(() => {
    confirmAddItem(selected)
  })

  const handleOnDrop = () => {
    confirmAddItem(selected)
  }

  const handleOnDragOver = (e) => {
    e.preventDefault()
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
      setCustomItem("")
    } else {
      toast.error("Cannot be blank", {
        position: "top-center",
        autoClose: 1250,
      })
    }
    setCustomLoading(false)
  }

  return (
    <>
      <div className="my-6 mx-0 md:mx-6">
        <h2 className="text-center pb-2 font-quicksandBold text-lg text-slate-600 ">
          Item Logger
        </h2>

        <div className="flex flex-col items-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-2xl rounded-lg p-4">
          <ul
            role="list"
            className="flex flex-col divide-y divide-gray-200 h-36 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-2xl rounded-lg overflow-scroll w-36 mb-7"
          >
            {filteredItems.map((item) => (
              <button
                disabled={!isMobile}
                {...bind}
                draggable
                onDragStart={(e) => handleOnDrag(e, item.name)}
                onTouchStart={() => setSelected(item.name)}
                key={item.id}
                className={`relative shadow-lg px-4 py-3 
            focus-within:ring-2 focus-within:ring-green-200 rounded-md cursor-move`}
              >
                <div className="flex justify-between space-x-3">
                  <div className="min-w-0 flex-1">
                    <a className="block focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p
                        className={`truncate cursor-default text-sm font-medium font-quicksandBold`}
                      >
                        {item.name}
                      </p>
                    </a>
                  </div>
                </div>
              </button>
            ))}
          </ul>

          <input
            minLength="2"
            maxLength="25"
            value={customItem}
            onChange={(e) => setCustomItem(e.target.value)}
            placeholder="Add your own"
            className="relative w-40 cursor-default
         bg-white rounded-md py-1.5 pl-5 outline outline-1 outline-slate-400 text-slate-600
          sm:text-sm sm:leading-6 font-quicksandBold"
          />

          <div className="mt-4">
            <button
              onClick={() => addCustomItem(customItem)}
              className="group relative h-8 w-28 overflow-hidden rounded-lg bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-green-200 via-slate-200 to-gray-200 text-sm shadow-lg"
            >
              <span className="relative text-gray-500 group-hover:text-gray-400 font-quicksandBold group-active:text-slate-500">
                {customLoading ? (
                  <div className="flex justify-center items-center font-quicksand">
                    Adding...
                  </div>
                ) : (
                  "Add"
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div
          className="mt-6 mb-4 mx-0 md:mx-6"
          onDrop={handleOnDrop}
          onDragOver={handleOnDragOver}
        >
          <h2 className="text-center pb-2 font-quicksandBold text-lg text-slate-600 ">
            Items List
          </h2>

          <ul
            role="list"
            className="flex flex-col divide-y divide-gray-200 h-72 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-2xl rounded-lg overflow-scroll w-36 cursor-pointer"
          >
            {items.length ? (
              items.map((item) => (
                <li
                  onClick={() => handleSelectItem(item)}
                  key={item.id}
                  className={`${calcDaysFrom(
                    item
                  )} relative shadow-lg px-4 py-3 
                focus-within:ring-2 focus-within:ring-green-200 rounded-md`}
                >
                  <div className="flex justify-between space-x-3">
                    <div className="min-w-0 flex-1">
                      <a className="block focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p
                          className={`truncate cursor-default text-sm font-medium ${
                            selectedItem && item.name === selectedItem.name
                              ? "text-white"
                              : "text-slate-600"
                          } font-quicksandBold`}
                        >
                          {item.name}
                        </p>
                      </a>
                    </div>
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
      </div>
    </>
  )
}

export default ItemLogger
