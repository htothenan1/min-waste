"use client";

import { useState, Fragment } from "react";
import { createItemAction } from "../_actions";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { Listbox, Transition, Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { ingredientsObjects } from "../data/ingredients";
import TitleTooltip from "../common/TitleTooltip";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ItemLogger = ({ items }) => {
  const [selected, setSelected] = useState("Select an Item");
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [customLoading, setCustomLoading] = useState(false);
  const [customItem, setCustomItem] = useState("");

  const filteredItems = ingredientsObjects.filter((el1) => {
    return !items.some((el2) => {
      return el2.name === el1.name;
    });
  });

  const addItem = async (clientData) => {
    if (clientData !== "Select Item") {
      setLoading(true);
      const tip = ingredientsObjects.find(
        (el) => el.name === selected
      ).storageTip;
      await createItemAction(session.user.email, clientData, tip);
      toast.success(`${clientData} added!`, {
        position: "top-center",
        autoClose: 1250,
      });
      setSelected("Select Item");
    } else {
      toast.error("Please select an item", {
        position: "top-center",
        autoClose: 1250,
      });
    }
    setLoading(false);
  };

  const addCustomItem = async (clientData) => {
    if (clientData !== "") {
      setCustomLoading(true);
      const tip = "Not available for custom items";
      await createItemAction(session.user.email, clientData, tip);
      toast.success(`${clientData} added!`, {
        position: "top-center",
        autoClose: 1250,
      });
      setCustomItem("");
    } else {
      toast.error("Cannot be blank", {
        position: "top-center",
        autoClose: 1250,
      });
    }
    setCustomLoading(false);
  };

  return (
    <div className="m-6">
      <div className="flex justify-center">
        <h2 className="text-center pb-1">Item Logger</h2>
        <span>
          <TitleTooltip tooltipText={"Add an item to your list"} />
        </span>
      </div>
      <div className="flex flex-col items-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-200 via-slate-300 to-indigo-200 shadow-md rounded-md p-4">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="relative ">
                <Listbox.Button className="relative w-40 cursor-default rounded-md bg-green-100/40 py-1.5 pl-2 text-left text-slate-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300/30 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span className="ml-3 text-slate-600 block">
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
                            "relative cursor-default select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={ingredient.name}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
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
                                  active ? "text-white" : "text-green-300/30",
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
          <button
            type="submit"
            onClick={() => addItem(selected)}
            className="group relative h-8 w-28 overflow-hidden rounded-lg bg-white text-sm shadow-lg"
          >
            <div className="absolute inset-0 w-4 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-200 via-green-400 to-indigo-200 transition-all duration-700 group-hover:w-full"></div>
            <span className="relative text-gray-500 group-hover:text-white">
              {loading ? "Adding..." : "Add"}
            </span>
          </button>
        </div>
        <h2 className=" text-slate-600 my-4">- or -</h2>
        <div>
          <Combobox>
            <Combobox.Input
              value={customItem}
              onChange={(e) => setCustomItem(e.target.value)}
              placeholder="Add your own"
              className="relative w-40 cursor-default rounded-md bg-blue-100/40 py-1.5 pl-5 text-slate-600 shadow-sm  focus:outline-none sm:text-sm sm:leading-6"
            />
          </Combobox>
        </div>
        <div className="mt-3">
          <button
            type="submit"
            onClick={() => addCustomItem(customItem)}
            className="group relative h-8 w-28 overflow-hidden rounded-lg bg-white text-sm shadow-lg"
          >
            <div className="absolute inset-0 w-4 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-200 via-slate-600 to-blue-200 transition-all duration-700 group-hover:w-full"></div>
            <span className="relative text-gray-500 group-hover:text-white">
              {customLoading ? "Adding..." : "Add"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemLogger;
