"use client";

import EditItemForm from "./EditItemForm";
import RecipesList from "./RecipesList";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../common/ToolTip";
import { useState, useEffect } from "react";
import { getRecipesAction } from "../_actions";

const ItemsList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [fetchedRecipes, setFetchedRecipes] = useState(null);

  const handleSelectItem = (data) => {
    setSelectedItem(data);
  };

  const fetchRecipes = async () => {
    // await getRecipesAction(selectedItem.name);
    // console.log(fetchedRecipes);
    const res = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${selectedItem.name}&app_id=53197589&app_key=e5b705b274508e7de4de1f3a3a726545&diet=balanced&random=true`
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const recipes = await res.json();
    console.log(recipes.hits);
    setFetchedRecipes(recipes.hits);
    // return res.json();
  };

  useEffect(() => {
    setSelectedItem(null);
    setFetchedRecipes(null);
  }, [items]);

  return (
    <div className="flex flex-wrap">
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <h2 className="mb-2 font-medium text-slate-600 text-center cursor-default">
                Your Kitchen
              </h2>
            </TooltipTrigger>
            <TooltipContent>
              <p>Keep track of your items</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ul
          role="list"
          className="flex flex-col divide-y divide-gray-200 h-96 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-100 via-emerald-100 to-yellow-100 shadow-md rounded-md overflow-scroll w-36 mx-10 mb-10"
        >
          {items.length ? (
            items.map((item) => (
              <li
                onClick={() => handleSelectItem(item)}
                key={item.id}
                className="relative bg-white/60 shadow-md px-4 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-400 hover:bg-gray-50 rounded-md"
              >
                <div className="flex justify-between space-x-3">
                  <div className="min-w-0 flex-1">
                    <a href="#" className="block focus:outline-none">
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
            <p className=" p-2 cursor-default text-center text-slate-600 mt-2">
              Add an item!
            </p>
          )}
        </ul>
      </div>
      <EditItemForm item={selectedItem} handleRecipesFetch={fetchRecipes} />
      <div>
        <RecipesList recipes={fetchedRecipes} selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default ItemsList;
