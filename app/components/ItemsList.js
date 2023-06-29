import TitleTooltip from "../common/TitleTooltip";

const ItemsList = ({ items, handleSelectItem }) => {
  return (
    <div className="m-6">
      <div className="flex justify-center">
        <h2 className="text-center">Items List</h2>
        <span>
          <TitleTooltip tooltipText={"Use the top items first"} />
        </span>
      </div>

      <ul
        role="list"
        className="flex flex-col divide-y divide-gray-200 h-64 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-red-100 via-orange-100 to-gray-100 shadow-md rounded-md overflow-scroll w-36"
      >
        {items.length ? (
          items.map((item) => (
            <li
              onClick={() => handleSelectItem(item)}
              key={item.id}
              className="relative bg-white/60 shadow-md px-4 py-3 focus-within:ring-2 focus-within:ring-green-400 hover:bg-orange-300/60 rounded-md"
            >
              <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                  <a className="block focus:outline-none">
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
          <p className=" p-2 cursor-default text-center text-slate-600 my-auto">
            Add an item!
          </p>
        )}
      </ul>
    </div>
  );
};

export default ItemsList;
