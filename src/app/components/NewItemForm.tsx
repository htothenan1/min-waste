"use client";

import { useRef } from "react";
import { createItemAction } from "../../app/_actions";

const NewItemForm = () => {
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
      className="border border-blue-500 border-dashed rounded-md p-6 mx-4 bg-slate-50"
    >
      <h2 className="mb-2 font-medium">Log a new Grocery Item</h2>
      <input
        type="text"
        name="name"
        className="rounded border border-slate-400 px-2 py-0.5 bg-slate-200"
      />
      <button
        type="submit"
        className="ml-2 rounded bg-slate-700 px-2 py-1 text-sm text-white"
      >
        Add Item
      </button>
    </form>
  );
};

export default NewItemForm;
