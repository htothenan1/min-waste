"use client";

import { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import SingleItem from "./SingleItem";
import RecipesList from "./RecipesList";
import SingleRecipe from "./SingleRecipe";
import ItemLogger from "./ItemLogger";

const Kitchen = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [fetchedRecipes, setFetchedRecipes] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleSelectItem = (data) => {
    setSelectedItem(data);
  };

  const handleSelectRecipe = (data) => {
    setSelectedRecipe(data);
  };

  const fetchRecipes = async () => {
    const res = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${selectedItem.name}&app_id=53197589&app_key=e5b705b274508e7de4de1f3a3a726545&diet=balanced&random=true`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const recipes = await res.json();
    setFetchedRecipes(recipes.hits);
  };

  useEffect(() => {
    setSelectedItem(null);
    setFetchedRecipes(null);
  }, [items]);

  return (
    <div className="flex justify-center flex-wrap mb-20 bg-slate-50/50">
      {editMode ? (
        <div className="flex flex-col justify-center items-center w-64 h-64 m-16 my-20">
          <div className=" text-center">
            LOGGER AND LIST DISABLED WHILE IN EDIT MODE
          </div>
        </div>
      ) : (
        <>
          <ItemLogger items={items} editStatus={editMode} />
          <ItemsList
            editStatus={editMode}
            items={items}
            handleSelectItem={handleSelectItem}
          />
        </>
      )}

      <SingleItem
        handleEditToggle={setEditMode}
        editStatus={editMode}
        item={selectedItem}
        handleRecipesFetch={fetchRecipes}
      />
      <RecipesList
        recipes={fetchedRecipes}
        handleSelectRecipe={handleSelectRecipe}
      />
      <SingleRecipe recipe={selectedRecipe} />
    </div>
  );
};

export default Kitchen;
