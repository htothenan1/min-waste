"use client";

import { toast } from "react-toastify";
import { deleteItemAction, updateItemAction } from "../_actions";
import { useState } from "react";

const EditItemForm = ({ item }) => {
  const [editMode, setEditMode] = useState(false);
  const [itemName, setItemName] = useState("");
  const deleteItem = async (data) => {
    await deleteItemAction(data.id);
    toast.info(`${data.name} deleted!`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const updateItem = async (data, newName) => {
    await updateItemAction(data.id, newName);
    toast.info(`Item updated!`, {
      position: "top-center",
      autoClose: 2000,
    });
    setEditMode(!editMode);
    setItemName("");
  };

  return (
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
              Update This Item
            </button>
          )}
          {editMode ? null : (
            <button
              onClick={() => deleteItem(item)}
              className="border border-bg-slate-700 my-2 py-1 px-2 rounded-md bg-red-500 text-white"
            >
              Delete This Item
            </button>
          )}
        </>
      ) : (
        <h1 className="text-center my-4">no item selected</h1>
      )}
    </div>
  );
};

export default EditItemForm;
