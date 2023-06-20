"use client";

import { toast } from "react-toastify";
import { deleteItemAction, updateItemAction } from "../_actions";
import { useState, Fragment, useRef } from "react";
import { Listbox, Transition, Dialog } from "@headlessui/react";
import DatePicker from "react-date-picker";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { homes } from "../data/homes";
import TitleTooltip from "../common/TitleTooltip";

const EditItemForm = ({ item, handleRecipesFetch }) => {
  const [editMode, setEditMode] = useState(false);
  const [itemName, setItemName] = useState("");
  const [open, setOpen] = useState(false);
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [selected, setSelected] = useState(homes[0]);

  const cancelButtonRef = useRef(null);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const deleteItem = async (data) => {
    await deleteItemAction(data.id);
    toast.info(`${data.name} deleted!`, {
      position: "top-center",
      autoClose: 1250,
    });
    setOpen(false);
  };

  const updateItem = async (data, newName, newHome) => {
    await updateItemAction(data.id, newName, expiryDate, newHome.name);
    toast.info(`Item updated!`, {
      position: "top-center",
      autoClose: 1250,
    });
    setEditMode(!editMode);
    setItemName("");
    setExpiryDate(new Date());
    setSelected(homes[0]);
  };

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
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Delete Item
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to delete this item?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:ml-10 sm:mt-4 sm:flex sm:pl-4">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto"
                      onClick={() => {
                        deleteItem(item);
                      }}
                    >
                      Yes, Delete!
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
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

      <div className="flex flex-col">
        {/* <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <h2 className="mb-2 font-medium text-center text-slate-600 cursor-default">
                Single Item View
              </h2>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-slate-600">Update or Delete Item</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider> */}
        <TitleTooltip
          titleText={"Single Item View"}
          tooltipText={"Update or Delete a single item, or find recipes"}
        />
        <div className="flex flex-col items-center bg-gradient-to-br from-[#e1dffb] to-[#fcf2f2] shadow-md rounded-md mx-4 w-96 h-80 py-4">
          {item ? (
            <>
              {editMode ? (
                <input
                  className="text-center text-slate-600 my-2 bg-slate-50"
                  placeholder={item.name}
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              ) : (
                <h1 className="my-2 text-slate-600 text-lg font-semibold cursor-default">
                  {item.name}
                </h1>
              )}
              {editMode ? (
                <DatePicker
                  calendarClassName={" rounded-md text-slate-600"}
                  onChange={setExpiryDate}
                  value={expiryDate}
                />
              ) : (
                <h1 className="my-2 text-slate-600 cursor-default">{`Use By: ${
                  item.expiredAt ? item.expiredAt.toDateString() : "Not set"
                }`}</h1>
              )}
              {editMode ? (
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <div className="relative mt-2">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-slate-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          <span className="block truncate text-slate-600">
                            {selected.name}
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
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {homes.map((home) => (
                              <Listbox.Option
                                key={home.id}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "bg-indigo-600 text-white"
                                      : "text-slate-600",
                                    "relative cursor-default select-none py-2 pl-3 pr-9"
                                  )
                                }
                                value={home}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "block truncate"
                                      )}
                                    >
                                      {home.name}
                                    </span>

                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active
                                            ? "text-white"
                                            : "text-indigo-600",
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
              ) : (
                <h1 className="my-2 text-slate-600 cursor-default">{`Item Type: ${item.home}`}</h1>
              )}
              {editMode ? (
                <button
                  onClick={() => {
                    updateItem(item, itemName, selected);
                  }}
                  className="border border-bg-slate-700 my-2 py-1 px-2 rounded-md bg-blue-300 text-white"
                >
                  Confirm Changes
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setEditMode(true);
                  }}
                  className="border border-bg-slate-700 my-2 py-1 px-2 rounded-md bg-indigo-600/80 text-white"
                >
                  Update Item
                </button>
              )}
              {editMode ? null : (
                <>
                  <button
                    onClick={() => setOpen(true)}
                    className="border border-bg-slate-700 my-2 py-1 px-2 rounded-md bg-red-500/80 text-white"
                  >
                    Delete Item
                  </button>
                  <button
                    onClick={() => handleRecipesFetch(item)}
                    className="border border-bg-slate-700 my-2 py-1 px-2 rounded-md bg-green-500/80 text-white"
                  >
                    Get Recipes
                  </button>
                </>
              )}
            </>
          ) : (
            <h1 className="text-center my-auto cursor-default text-slate-600">
              No item selected
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default EditItemForm;
