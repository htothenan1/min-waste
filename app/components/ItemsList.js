const ItemsList = ({ items, handleSelectItem }) => {
  const calcDaysFrom = (data) => {
    if (data.expiredAt) {
      const daysFrom =
        (data.expiredAt.getTime() - new Date().getTime()) / (1000 * 3600 * 24)

      if (daysFrom < 2) {
        return "bg-red-300/30 hover:bg-red-200"
      } else {
        return "bg-green-300/30 hover:bg-green-200/30"
      }
    } else {
      return "bg-slate-200/30 hover:bg-slate-100/30"
    }
  }
  return (
    <div className="my-6 mx-0 md:mx-6">
      <h2 className="text-center pb-2 font-quicksand">Items List</h2>

      <ul
        role="list"
        className="flex flex-col divide-y divide-gray-200 h-60 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-2xl rounded-lg overflow-scroll w-36"
      >
        {items.length ? (
          items.map((item) => (
            <li
              onClick={() => handleSelectItem(item)}
              key={item.id}
              className={`${calcDaysFrom(item)} relative shadow-lg px-4 py-3 
                focus-within:ring-2 focus-within:ring-green-200 rounded-md`}
            >
              <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                  <a className="block focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="truncate cursor-default text-sm font-medium text-slate-600 font-quicksandBold">
                      {item.name}
                    </p>
                  </a>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className=" p-2 cursor-default text-center text-slate-600 my-auto font-quicksand">
            Add an item!
          </p>
        )}
      </ul>
    </div>
  )
}

export default ItemsList
