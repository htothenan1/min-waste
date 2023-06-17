"use client";

import EditItemForm from "./EditItemForm";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../common/ToolTip";
import { useState, useEffect } from "react";

const ItemsList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (data) => {
    setSelectedItem(data);
  };

  useEffect(() => {
    setSelectedItem(null);
  }, [items]);

  return (
    <div className="flex">
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <h2 className="mb-2 font-medium text-slate-600 text-center cursor-default">
                Your Kitchen
              </h2>
            </TooltipTrigger>
            <TooltipContent>
              <p>Keep track of your items</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ul
          role="list"
          className="flex flex-col divide-y divide-gray-200 h-96 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-100 via-emerald-100 to-yellow-100 shadow-md rounded-md overflow-scroll w-36"
        >
          {items.length ? (
            items.map((item) => (
              <li
                onClick={() => handleSelectItem(item)}
                key={item.id}
                className="relative bg-white/60 shadow-md px-4 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-400 hover:bg-gray-50 rounded-md"
              >
                <div className="flex justify-between space-x-3">
                  <div className="min-w-0 flex-1">
                    <a href="#" className="block focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="truncate cursor-default text-sm font-medium text-slate-600">
                        {item.name}
                      </p>
                    </a>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p className=" p-2 cursor-default text-center text-slate-600 mt-2">
              Add an item!
            </p>
          )}
        </ul>
      </div>
      <EditItemForm item={selectedItem} />
    </div>
  );
};

export default ItemsList;
