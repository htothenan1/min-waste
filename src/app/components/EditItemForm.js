"use client";

const EditItemForm = ({ item }) => {
  return (
    <div className="flex flex-col items-center border border-red-500 rounded-md mx-4 w-96">
      <h1 className="underline my-4">Item Details</h1>
      {item ? (
        <>
          <h1 className="my-2">{item.name}</h1>
          <h1 className="my-2">{`Expired: ${
            item.expired ? "yes" : "Not yet"
          }`}</h1>
          <h1 className="my-2">{`Item Type: ${item.home}`}</h1>
          <button className="border border-bg-slate-700 my-2 py-1 px-2 rounded-md bg-red-500 text-white">
            Delete This Item
          </button>
        </>
      ) : (
        <h1 className="text-center my-4">no item selected</h1>
      )}
    </div>
  );
};

export default EditItemForm;
