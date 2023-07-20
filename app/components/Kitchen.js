"use client";

import { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import SingleItem from "./SingleItem";
import RecipesList from "./RecipesList";
import SingleRecipe from "./SingleRecipe";
import ItemLogger from "./ItemLogger";
import { thought } from "../data/thoughts";

const Kitchen = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [fetchedRecipes, setFetchedRecipes] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [currentThought, setCurrentThought] = useState("");

  const calcDaysFrom = (data) => {
    const daysFrom =
      (data.expiredAt.getTime() - new Date().getTime()) / (1000 * 3600 * 24);

    return daysFrom;
  };

  const fetchRedItemRecipes = (data) => {
    const redItems = data.filter(
      (item) => item.expiredAt && calcDaysFrom(item) < 2
    );
    let namesArray = [];
    redItems.map((item) => namesArray.push(item.name));
    const finalString = namesArray.join(",+");
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=757d368ebb304fb3bf99a64e38c11942&ingredients=${finalString}`
    )
      .then((response) => response.json())
      .then((resItems) => setFetchedRecipes(resItems));
  };

  const handleSelectItem = (data) => {
    setSelectedItem(data);
  };

  const handleSelectRecipe = (data) => {
    fetch(
      `https://api.spoonacular.com/recipes/${data}/information?apiKey=757d368ebb304fb3bf99a64e38c11942&includeNutrition=false`
    )
      .then((res) => res.json())
      .then((recipe) => {
        setSelectedRecipe(recipe);
      });
  };

  const fetchRecipes = () => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=757d368ebb304fb3bf99a64e38c11942&query=${selectedItem.name}`
    )
      .then((res) => res.json())
      .then((recipes) => {
        setFetchedRecipes(recipes.results);
      });
  };

  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * thought.length);
    setSelectedItem(null);
    setFetchedRecipes(null);
    setCurrentThought(thought[randomIdx]);
  }, [items]);

  return (
    <div className="flex justify-center flex-wrap bg-slate-50/50 mt-12">
      {editMode ? (
        <div className="flex flex-col justify-center items-center w-64 h-80 m-20 my-20">
          <div className=" text-center">{currentThought}</div>
        </div>
      ) : (
        <>
          <ItemLogger items={items} editStatus={editMode} />
          <div className="flex flex-col items-center">
            <ItemsList
              editStatus={editMode}
              items={items}
              handleSelectItem={handleSelectItem}
            />
            <button
              onClick={() => fetchRedItemRecipes(items)}
              className="py-1 px-2 my-2 rounded-md bg-red-500/50 text-white text-sm shadow-lg"
            >
              Red Item Recipes
            </button>
          </div>
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
