"use client";

import { toast } from "react-toastify";
import { deleteItemAction, updateItemAction } from "../_actions";
import { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const EditItemForm = ({ item }) => {
  const [editMode, setEditMode] = useState(false);
  const [itemName, setItemName] = useState("");
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const deleteItem = async (data) => {
    await deleteItemAction(data.id);
    toast.info(`${data.name} deleted!`, {
      position: "top-center",
      autoClose: 1250,
    });
    setOpen(false);
  };

  const updateItem = async (data, newName) => {
    await updateItemAction(data.id, newName);
    toast.info(`Item updated!`, {
      position: "top-center",
      autoClose: 1250,
    });
    setEditMode(!editMode);
    setItemName("");
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
      <div className="flex flex-col items-center border border-red-500 rounded-md mx-4 w-96">
        <h1 className="underline my-4">Item Details</h1>

        {item ? (
          <>
            {editMode ? (
              <input
                className="text-center"
                placeholder={item.name}
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            ) : (
              <h1 className="my-2">{item.name}</h1>
            )}

            <h1 className="my-2">{`Expiration Date: ${
              item.expired ? "yes" : "Not set"
            }`}</h1>
            <h1 className="my-2">{`Item Type: ${item.home}`}</h1>
            {editMode ? (
              <button
                onClick={() => {
                  updateItem(item, itemName);
                }}
                className="border border-bg-slate-700 my-2 py-1 px-2 rounded-md bg-blue-500 text-white"
              >
                Confirm Changes
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setEditMode(true);
                }}
                className="border border-bg-slate-700 my-2 py-1 px-2 rounded-md bg-blue-500 text-white"
              >
                Update Item
              </button>
            )}
            {editMode ? null : (
              <button
                onClick={() => setOpen(true)}
                className="border border-bg-slate-700 my-2 py-1 px-2 rounded-md bg-red-500 text-white"
              >
                Delete Item
              </button>
            )}
          </>
        ) : (
          <h1 className="text-center my-4">no item selected</h1>
        )}
      </div>
    </>
  );
};

export default EditItemForm;
