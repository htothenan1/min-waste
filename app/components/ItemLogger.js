"use client"

import { useState, Fragment } from "react"
import { createItemAction } from "../_actions"
import { toast } from "react-toastify"
import { useSession } from "next-auth/react"
import { Listbox, Transition, Combobox } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import { ingredientsObjects } from "../data/ingredients"
import { ReloadIcon } from "@radix-ui/react-icons"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const ItemLogger = ({ items }) => {
  const [selected, setSelected] = useState("Select an Item")
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const [customLoading, setCustomLoading] = useState(false)
  const [customItem, setCustomItem] = useState("")

  const filteredItems = ingredientsObjects.filter((el1) => {
    return !items.some((el2) => {
      return el2.name === el1.name
    })
  })

  const addItem = async (clientData) => {
    if (clientData !== "Select Item") {
      setLoading(true)
      const tip = ingredientsObjects.find(
        (el) => el.name === selected
      ).storageTip
      await createItemAction(session.user.email, clientData, tip)
      toast.success(`${clientData} added!`, {
        position: "top-center",
        autoClose: 1250,
      })
      setSelected("Select Item")
    } else {
      toast.error("Please select an item", {
        position: "top-center",
        autoClose: 1250,
      })
    }
    setLoading(false)
  }

  const addCustomItem = async (clientData) => {
    if (clientData !== "") {
      setCustomLoading(true)
      const tip =
        "Not available for custom items. Please consider quickly researching this particular item before storing."
      await createItemAction(session.user.email, clientData, tip)
      toast.success(`${clientData} added!`, {
        position: "top-center",
        autoClose: 1250,
      })
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
    <div className="my-6 mx-0 md:mx-6">
      <h2 className="text-center pb-2 font-quicksandBold text-lg text-slate-600 ">
        Item Logger
      </h2>

      <div className="flex flex-col items-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-2xl rounded-lg p-4">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="relative ">
                <Listbox.Button className="relative w-40 cursor-default rounded-md bg-white py-1.5 pl-2 text-left outline outline-1 outline-slate-400 text-slate-600 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span className="ml-3 text-slate-600 block font-quicksandBold">
                      {selected}
                    </span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {filteredItems.map((ingredient) => (
                      <Listbox.Option
                        key={ingredient.id}
                        className={({ active }) =>
                          classNames(
                            active ? "bg-green-300/40" : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-3 pr-9 font-quicksandBold"
                          )
                        }
                        value={ingredient.name}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected
                                    ? "font-quicksandBold"
                                    : "font-quicksandBold",
                                  "ml-3 block truncate"
                                )}
                              >
                                {ingredient.name}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active
                                    ? "text-green-500"
                                    : "text-green-800/50",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
        <div className="mt-4">
          <button
            type="submit"
            onClick={() => addItem(selected)}
            className="group relative h-8 w-28 overflow-hidden rounded-lg bg-white text-sm shadow-lg "
          >
            <div className="absolute inset-0 w-4 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-green-200 via-slate-400 to-gray-200 transition-all duration-700 group-hover:w-full"></div>
            <span className="relative text-gray-500 group-hover:text-white font-quicksandBold group-active:text-slate-500">
              {loading ? (
                <div className="flex justify-center items-center">
                  Adding...
                  <ReloadIcon className="ml-2 h-4 w-4 animate-spin" />
                </div>
              ) : (
                "Add"
              )}
            </span>
          </button>
        </div>
        <h2 className=" text-slate-600 my-8 font-quicksandBold">- or -</h2>

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
            className="group relative h-8 w-28 overflow-hidden rounded-lg bg-white text-sm shadow-lg"
          >
            <div className="absolute inset-0 w-4 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-green-200 via-slate-400 to-gray-200 transition-all duration-700 group-hover:w-full"></div>
            <span className="relative text-gray-500 group-hover:text-white font-quicksandBold group-active:text-slate-500">
              {customLoading ? (
                <div className="flex justify-center items-center font-quicksand">
                  Adding...
                  <ReloadIcon className="ml-2 h-4 w-4 animate-spin" />
                </div>
              ) : (
                "Add"
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemLogger
