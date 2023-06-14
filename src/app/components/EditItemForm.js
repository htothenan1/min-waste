"use client";

const EditItemForm = ({ item }) => {
  return (
    <div className="flex flex-col items-center border border-red-500 rounded-md mx-4 w-96">
      <h1 className="underline my-2">Item Details</h1>
      {item ? (
        <>
          <h1 className="my-2">{item.name}</h1>
          <h1 className="my-2">{`expired: ${item.expired ? "yes" : "no"}`}</h1>
          <h1 className="my-2">{`home: ${item.home.toLowerCase()}`}</h1>
        </>
      ) : (
        <h1 className="text-center my-4">no item selected</h1>
      )}
    </div>
  );
};

export default EditItemForm;
