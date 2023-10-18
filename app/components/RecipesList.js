"use client"

const RecipesList = ({ recipes, handleSelectRecipe }) => {
  return (
    <div className="m-6 flex flex-col text-left">
      <h2 className="text-left pb-2 font-quicksandBold text-lg text-slate-600">
        Recipes List
      </h2>

      <ul
        role="list"
        className="flex flex-col justify-center h-96 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-2xl rounded-lg overflow-scroll w-96"
      >
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li
              onClick={() => handleSelectRecipe(recipe.id)}
              key={recipe.id}
              className="relative shadow-lg cursor-pointer px-4 py-4 bg-orange-200/50 hover:bg-orange-100/50 rounded-md font-quicksandBold text-sm font-medium text-slate-600"
            >
              {recipe.title}
            </li>
          ))
        ) : (
          <p className="p-2 cursor-default mx-auto text-slate-600 font-quicksand">
            No current recipes
          </p>
        )}
      </ul>
    </div>
  )
}

export default RecipesList
