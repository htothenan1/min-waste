"use client";

import { useRef, useState } from "react";
import { createItemAction } from "../../app/_actions";
// import LineArrowButton from "./LineArrowButton";
import SlideFillButton from "./SlideFillButton";
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

type groceryItemProps = {
  name: String;
};

const groceries = [
  { id: 1, name: "Apples" },
  { id: 2, name: "Bananas" },
  { id: 3, name: "Carrots" },
  { id: 4, name: "Dulce de Leche" },
  { id: 5, name: "Escargot" },
  { id: 6, name: "Fries" },
  { id: 7, name: "Grapes" },
  { id: 8, name: "Hot sauce" },
  { id: 9, name: "Iffy lettuce" },
  { id: 10, name: "Jerk chicken" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const NewItemForm = () => {
  const [query, setQuery] = useState("");
  const [selectedGrocery, setSelectedGrocery] = useState(null);

  const filteredGroceries =
    query === ""
      ? groceries
      : groceries.filter((grocery) => {
          return grocery.name.toLowerCase().includes(query.toLowerCase());
        });
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const name = data.get("name");
    if (typeof name !== "string" || !name) return;

    await createItemAction(name);
    formRef.current?.reset();
  }

  return (
    <form
      ref={formRef}
      action={action}
      className="flex flex-col justify-center align-middle items-center border border-blue-500 border-dashed rounded-md p-6 mx-4 bg-slate-50 h-44"
    >
      <h2 className="mb-2 font-medium">Log a Grocery Item</h2>

      <div>
        <Combobox
          as="div"
          value={selectedGrocery}
          onChange={setSelectedGrocery}
        >
          <div className="relative mt-2">
            <Combobox.Input
              type="text"
              name="name"
              className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(grocery) => grocery?.name}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>

            {filteredGroceries.length > 0 && (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredGroceries.map((grocery) => (
                  <Combobox.Option
                    key={grocery.id}
                    value={grocery}
                    className={({ active }) =>
                      classNames(
                        "relative cursor-default select-none py-2 pl-3 pr-9",
                        active ? "bg-indigo-600 text-white" : "text-gray-900"
                      )
                    }
                  >
                    {({ active, selected }) => (
                      <>
                        <span
                          className={classNames(
                            "block truncate",
                            selected && "font-semibold"
                          )}
                        >
                          {grocery.name}
                        </span>

                        {selected && (
                          <span
                            className={classNames(
                              "absolute inset-y-0 right-0 flex items-center pr-4",
                              active ? "text-white" : "text-indigo-600"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </div>
        </Combobox>
        <div className=" self-center">
          <SlideFillButton buttonText={"Add Item"} />
        </div>
      </div>
    </form>
  );
};

export default NewItemForm;
