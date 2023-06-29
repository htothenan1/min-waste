"use client";

import { toast } from "react-toastify";
import { deleteItemAction, updateItemAction } from "../_actions";
import { useState, Fragment, useRef } from "react";
import { Listbox, Transition, Dialog } from "@headlessui/react";
import { format, addDays } from "date-fns";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { homes } from "../data/homes";
import TitleTooltip from "../common/TitleTooltip";

const EditItemForm = ({
  item,
  handleRecipesFetch,
  handleEditToggle,
  editStatus,
}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
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

  const updateItem = async (data, newHome) => {
    await updateItemAction(data.id, data.name, date, newHome.name);
    toast.info(`${data.name} updated!`, {
      position: "top-center",
      autoClose: 1250,
    });
    handleEditToggle(false);
    setDate(new Date());
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

      <div className="flex flex-col m-6">
        <div className="flex justify-center">
          <h2 className="text-center">Single Item View</h2>
          <span>
            <TitleTooltip
              tooltipText={"Update or Delete a single item, or find recipes"}
            />
          </span>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-br from-[#e1dffb] to-[#fcf2f2] shadow-md rounded-md w-64 h-64">
          {item ? (
            <>
              <h1 className="pt-4 pb-3 text-slate-600 text-lg font-semibold cursor-default">
                {item.name}
              </h1>
              {editStatus ? (
                <Popover>
                  <PopoverTrigger asChild on>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
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
                    <div className="rounded-md border">
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
                <h1 className="text-slate-600 cursor-default mb-4">{`Use By: ${
                  item.expiredAt
                    ? item.expiredAt.toLocaleString("en-En", {
                        weekday: "short",
                        month: "long",
                        day: "numeric",
                      })
                    : "Not set"
                }`}</h1>
              )}

              {editStatus ? (
                <button
                  onClick={() => {
                    updateItem(item, item.name, selected);
                  }}
                  className="border border-bg-slate-700 my-3 py-1 px-2 rounded-md bg-indigo-600/80 text-white text-sm"
                >
                  Confirm Changes
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    handleEditToggle(true);
                  }}
                  className="border border-bg-slate-700 my-2 py-1 px-2 rounded-md bg-indigo-600/80 text-white text-sm"
                >
                  Set Use By Date
                </button>
              )}
              {editStatus ? null : (
                <>
                  <button
                    onClick={() => setOpen(true)}
                    className="border border-bg-slate-700 my-2 py-1 px-2 rounded-md bg-red-500/80 text-white text-sm"
                  >
                    Delete Item
                  </button>
                  <button
                    onClick={() => handleRecipesFetch(item)}
                    className="border border-bg-slate-700 my-2 py-1 px-2 rounded-md bg-green-500/80 text-white text-sm"
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
