"use client";

import EditItemForm from "./EditItemForm";
import { useState } from "react";

const ItemsList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (data) => {
    setSelectedItem(data);
    console.log(data);
  };

  return (
    <div className="flex">
      <ul
        role="list"
        className="flex flex-col divide-y divide-gray-200 h-96 border border-blue-400 rounded-md overflow-scroll w-36"
      >
        {items.length ? (
          items.map((item) => (
            <li
              onClick={() => handleSelectItem(item)}
              key={item.id}
              className="relative bg-white px-4 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50"
            >
              <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                  <a href="#" className="block focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="truncate text-sm font-medium text-gray-900">
                      {item.name}
                    </p>
                  </a>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className=" p-2">Add something!</p>
        )}
      </ul>
      <EditItemForm item={selectedItem} />
    </div>
  );
};

export default ItemsList;
