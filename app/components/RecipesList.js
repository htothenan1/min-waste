"use client"

const RecipesList = ({ recipes, handleSelectRecipe }) => {
  return (
    <div className="m-6">
      <h2 className="text-center pb-2 font-quicksandBold text-lg text-slate-600">
        Recipes List
      </h2>
      <ul
        role="list"
        className="flex flex-col divide-y h-80 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-2xl rounded-lg overflow-scroll w-80"
      >
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li
              onClick={() => handleSelectRecipe(recipe.id)}
              key={recipe.id}
              className="relative shadow-lg px-4 py-3 bg-orange-200/50 hover:bg-orange-100/50 rounded-md font-quicksandBold"
            >
              <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                  <a className="block focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="truncate cursor-default text-sm font-medium text-slate-600">
                      {recipe.title}
                    </p>
                  </a>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className=" p-2 cursor-default text-center text-slate-600 my-auto font-quicksand">
            No current recipes
          </p>
        )}
      </ul>
    </div>
  )
}

export default RecipesList
