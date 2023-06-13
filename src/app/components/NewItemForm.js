"use client";

import { useState, Fragment } from "react";
import { createItemAction } from "../_actions";
import SlideFillButton from "./SlideFillButton";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { ingredients } from "../data/ingredients";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NewItemForm = () => {
  const [selected, setSelected] = useState(ingredients[0]);

  const addItemToDb = async (data) => {
    await createItemAction(data.name);
  };

  return (
    <div className="flex flex-col border border-blue-500 border-dashed rounded-md p-6 mx-4 bg-slate-50 h-44 w-56">
      <h2 className="mb-2 font-medium">Log a Grocery Item</h2>

      <div>
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="relative mt-2">
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span
                      aria-label={selected.online ? "Online" : "Offline"}
                      className={classNames(
                        selected.online ? "bg-green-400" : "bg-gray-200",
                        "inline-block h-2 w-2 flex-shrink-0 rounded-full"
                      )}
                    />
                    <span className="ml-3 block truncate">{selected.name}</span>
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
                    {ingredients.map((ingredient) => (
                      <Listbox.Option
                        key={ingredient.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={ingredient}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  ingredient.online
                                    ? "bg-green-400"
                                    : "bg-gray-200",
                                  "inline-block h-2 w-2 flex-shrink-0 rounded-full"
                                )}
                                aria-hidden="true"
                              />
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {ingredient.name}
                                <span className="sr-only">
                                  {" "}
                                  is {ingredient.online ? "online" : "offline"}
                                </span>
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-indigo-600",
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

        <SlideFillButton
          buttonText={"Add Item"}
          handleClick={() => addItemToDb(selected)}
        />
      </div>
    </div>
  );
};

export default NewItemForm;
