"use client";

import { useState, Fragment } from "react";
import { createItemAction } from "../_actions";
import SlideFillButton from "../common/SlideFillButton";
import { toast } from "react-toastify";

import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { ingredients } from "../data/ingredients";
import TitleTooltip from "../common/TitleTooltip";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ItemLogger = () => {
  const [selected, setSelected] = useState(ingredients[0]);

  const addItem = async (data) => {
    await createItemAction(data.name, data.home);
    toast.success(`${data.name} added!`, {
      position: "top-center",
      autoClose: 1250,
    });
  };

  return (
    <div className="mb-6">
      <TitleTooltip
        titleText={"Item Logger"}
        tooltipText={"If you can't find your item, use 'Custom'"}
      />
      <div className="flex flex-col items-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-200 via-slate-300 to-indigo-200 shadow-md rounded-md p-4">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="relative ">
                <Listbox.Button className="relative w-40 cursor-default rounded-md bg-white py-1.5 pl-2 pr-12 text-left text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span
                      className={classNames(
                        selected.color,
                        "inline-block h-2 w-2 flex-shrink-0 rounded-full"
                      )}
                    />
                    <span className="ml-3 text-slate-600 block truncate">
                      {selected.name}
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
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                  ingredient.color,
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

        <div className="mt-3">
          <SlideFillButton
            buttonText={"Add Item"}
            handleClick={() => addItem(selected)}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemLogger;
