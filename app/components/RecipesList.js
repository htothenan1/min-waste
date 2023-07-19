"use client";

import TitleTooltip from "../common/TitleTooltip";

const RecipesList = ({ recipes, handleSelectRecipe }) => {
  return (
    <div className="m-6">
      {/* <div className="flex justify-center"> */}
      <h2 className="text-center mb-1">Recipes List</h2>
      {/* <span>
          <TitleTooltip tooltipText={"Recipes based on selected item"} />
        </span>
      </div> */}

      <ul
        role="list"
        className="flex flex-col divide-y h-80 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-200 via-orange-200 to-yellow-100 shadow-lg rounded-md overflow-scroll w-64"
      >
        {recipes ? (
          recipes.map((recipe) => (
            <li
              onClick={() => handleSelectRecipe(recipe.recipe)}
              key={recipe.id}
              className="relative shadow-lg px-4 py-3 hover:bg-orange-100/50 rounded-md"
            >
              <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                  <a className="block focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="truncate cursor-default text-sm font-medium text-slate-600">
                      {recipe.recipe.label}
                    </p>
                  </a>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className=" p-2 cursor-default text-center text-slate-600 my-auto">
            No current recipes
          </p>
        )}
      </ul>
    </div>
  );
};

export default RecipesList;
