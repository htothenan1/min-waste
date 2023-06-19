"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../common/ToolTip";
import SingleRecipe from "./SingleRecipe";
import { useState, useEffect } from "react";

const RecipesList = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  //   useEffect(() => {
  //     setSelectedRecipe(null);
  //   }, [recipes]);

  return (
    <div className="flex">
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <h2 className="mb-2 font-medium text-slate-600 text-center cursor-default">
                Recipes
              </h2>
            </TooltipTrigger>
            <TooltipContent>
              <p>A list of recipes based on a single item</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ul
          role="list"
          className="flex flex-col divide-y divide-gray-200 h-96 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-100 via-emerald-100 to-yellow-100 shadow-md rounded-md overflow-scroll w-64 mx-10"
        >
          {recipes ? (
            recipes.map((recipe) => (
              <li
                onClick={() => setSelectedRecipe(recipe.recipe)}
                key={recipe.id}
                className="relative bg-white/60 shadow-md px-4 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-400 hover:bg-gray-50 rounded-md"
              >
                <div className="flex justify-between space-x-3">
                  <div className="min-w-0 flex-1">
                    <a href="#" className="block focus:outline-none">
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
      <SingleRecipe recipe={selectedRecipe} />
    </div>
  );
};

export default RecipesList;
