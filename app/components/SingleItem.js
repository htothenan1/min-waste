"use client"

import { toast } from "react-toastify"
import {
  createItemAction,
  deleteItemAction,
  incrementCounterAction,
  updateItemAction,
} from "../_actions"
import { useState, Fragment, useRef } from "react"
import { useSession } from "next-auth/react"
import { Transition, Dialog } from "@headlessui/react"
import { format, addDays } from "date-fns"
import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import { PlusIcon } from "@radix-ui/react-icons"
import { Calendar } from "./ui/calendar"
import { CalendarIcon, ReloadIcon } from "@radix-ui/react-icons"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import { homes } from "../data/homes"
import { useSpring, a } from "@react-spring/web"

const EditItemForm = ({
  item,
  handleRecipesFetch,
  handleEditToggle,
  editStatus,
}) => {
  const { data: session } = useSession()
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(homes[0])
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [wasteLoading, setWasteLoading] = useState(false)
  const [updateLoading, setUpdateLoading] = useState(false)
  const [repurchaseLoading, setRepurchaseLoading] = useState(false)
  const [mistaken, setMistaken] = useState(false)
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const cancelButtonRef = useRef(null)

  const repurchaseItem = async (clientData) => {
    setRepurchaseLoading(true)
    await createItemAction(
      session.user.email,
      clientData.name,
      clientData.storageTip
    )
    toast.success(`${clientData.name} repurchased!`, {
      position: "top-center",
      autoClose: 1250,
    })
    setRepurchaseLoading(false)
  }

  const adjustDate = (date) => {
    date.setHours(date.getHours() + 18)

    return date
  }

  const deleteItem = async (data) => {
    setDeleteLoading(true)
    await deleteItemAction(data.id)
    if (!mistaken) {
      await incrementCounterAction(session.user.email)
    }
    toast.success(`${data.name} ${mistaken ? "deleted!" : "consumed!"}`, {
      position: "top-center",
      autoClose: 1250,
    })
    setOpen(false)
    setDeleteLoading(false)
    setMistaken(false)
  }

  const deleteItemWithWaste = async (data) => {
    setWasteLoading(true)
    await deleteItemAction(data.id)
    toast.success("Its ok, next time will be better", {
      position: "top-center",
      autoClose: 1250,
    })
    setOpen(false)
    setWasteLoading(false)
  }

  const updateItem = async (data, newHome) => {
    setUpdateLoading(true)
    const finalDate = adjustDate(date)
    await updateItemAction(data.id, data.name, finalDate, newHome.name)
    toast.info(`${data.name} Use By Date set!`, {
      position: "top-center",
      autoClose: 1250,
    })
    handleEditToggle(false)
    setDate(new Date())
    setSelected(homes[0])
    setUpdateLoading(false)
  }

  const handleMistake = () => {
    setMistaken(true)
    setOpen(true)
  }

  const handleCancel = () => {
    if (mistaken) {
      setOpen(false)
      setMistaken(false)
    } else {
      setOpen(false)
    }
  }

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex h-1/2 items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-quicksandBold leading-6 text-gray-900"
                      >
                        {`${
                          mistaken ? "Item added by mistake" : "Item Finished"
                        }`}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 font-quicksand">
                          {`${
                            mistaken
                              ? "Was this item added by mistake?"
                              : " Was any of this item wasted?"
                          }`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:ml-10 sm:mt-4 sm:flex sm:pl-4">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-quicksandBold text-white shadow-sm hover:bg-green-500 sm:w-auto"
                      onClick={() => {
                        deleteItem(item)
                      }}
                      disabled={deleteLoading}
                    >
                      {deleteLoading ? (
                        <div className="flex justify-center items-center">
                          {mistaken ? "Deleting..." : "Yay"}
                          <ReloadIcon className="ml-2 h-4 w-4 animate-spin" />
                        </div>
                      ) : (
                        <>{mistaken ? "Yes!" : "Nope!"}</>
                      )}
                    </button>
                    {mistaken ? null : (
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-quicksandBold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => {
                          deleteItemWithWaste(item)
                        }}
                        disabled={wasteLoading}
                      >
                        {wasteLoading ? (
                          <div className="flex justify-center items-center">
                            Discarding...
                            <ReloadIcon className="ml-2 h-4 w-4 animate-spin" />
                          </div>
                        ) : (
                          "Yes..."
                        )}
                      </button>
                    )}
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-quicksandBold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:mt-0 sm:w-auto"
                      onClick={handleCancel}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="flex flex-col m-6">
        <h2 className="text-center pb-2 font-quicksand">Single Item View</h2>

        <div className="flex items-center justify-center">
          <a.div
            className="flex flex-col z-10 items-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-2xl rounded-lg w-80 h-80"
            style={{ opacity: opacity.to((o) => 1 - o), transform }}
          >
            {item ? (
              <>
                <button
                  className="bg-white rounded-b-md p-1 text-sm font-quicksand"
                  onClick={() => set((state) => !state)}
                >
                  Flip Me
                </button>
                <h2 className="mt-2 text-slate-600 text-lg font-quicksandBold cursor-default">
                  {item.name}
                </h2>
                {editStatus ? (
                  <Popover>
                    <PopoverTrigger asChild on>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] justify-start text-left font-quicksand",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      align="start"
                      className="flex w-auto flex-col space-y-2 p-2"
                    >
                      <Select
                        onValueChange={(value) =>
                          setDate(addDays(new Date(), parseInt(value)))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an interval of time" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="3">In 3 days</SelectItem>
                          <SelectItem value="7">In 1 week</SelectItem>
                          <SelectItem value="10">In 10 days</SelectItem>
                          <SelectItem value="14">In 2 weeks</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="rounded-md">
                        <Calendar
                          required
                          mode="single"
                          selected={
                            item.expired ? item.expiredAt.toDateString() : date
                          }
                          onSelect={setDate}
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
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
                      updateItem(item, item.name, selected)
                    }}
                    className={`shadow-lg my-3 py-1 px-2 rounded-md ${
                      updateLoading ? "bg-slate-400" : "bg-indigo-500/80"
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
                    className="py-1 px-2 my-2 rounded-md bg-indigo-500/80 text-white text-sm shadow-lg font-quicksand"
                  >
                    Set Date
                  </button>
                )}
                {editStatus ? null : (
                  <>
                    <button
                      disabled={flipped}
                      onClick={() => handleRecipesFetch(item)}
                      className="py-1 px-2 my-2 rounded-md bg-orange-400/70 text-white text-sm shadow-lg font-quicksand"
                    >
                      Get Recipes
                    </button>
                    <button
                      disabled={flipped}
                      onClick={() => setOpen(true)}
                      className="py-1 px-2 my-2 rounded-md bg-red-500/50 text-white text-sm shadow-lg font-quicksand"
                    >
                      Item Finished
                    </button>
                    <button
                      disabled={flipped}
                      onClick={() => repurchaseItem(item)}
                      className="flex text-xs text-center text-black border border-black py-1 px-2 my-1 rounded-md shadow-lg"
                    >
                      {repurchaseLoading ? (
                        "Repurchasing..."
                      ) : (
                        <>
                          <p className="pr-1 font-quicksand">Repurchase</p>
                          <PlusIcon className="w-3 text-slate-900" />
                        </>
                      )}
                    </button>
                    <button
                      disabled={flipped}
                      onClick={handleMistake}
                      className=" text-xs text-red-500 text-center border border-red-500 py-1 px-2 my-2 rounded-md shadow-lg font-quicksand"
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
            className="flex flex-col absolute items-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-lg rounded-md w-80 h-80"
            style={{
              opacity,
              transform,
              rotateX: "180deg",
            }}
          >
            {item ? (
              <>
                <h2 className="my-3 text-slate-600 text-lg font-quicksandBold cursor-default underline">
                  {`Storage Tips for ${item.name}`}
                </h2>
                <p className="px-10 text-center font-quicksand">
                  {item.storageTip}
                </p>
                <div className="absolute bottom-0 bg-white rounded-t-md p-1 text-sm font-quicksand">
                  Flip Back
                </div>
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

export default EditItemForm
