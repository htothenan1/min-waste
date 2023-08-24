"use client"

import { useState } from "react"
import RecipesList from "./RecipesList"
import SingleRecipe from "./SingleRecipe"
import { toast } from "react-toastify"

const ItemsChecklist = ({ items }) => {
  const [fetchedRecipes, setFetchedRecipes] = useState(null)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [checkedState, setCheckedState] = useState(
    new Array(items.length).fill(false)
  )

  const calcDaysFrom = (data) => {
    if (data.expiredAt) {
      const daysFrom =
        (data.expiredAt.getTime() - new Date().getTime()) / (1000 * 3600 * 24)

      if (daysFrom < 2) {
        return "bg-red-300/30 hover:bg-red-200 active:bg-red-500/80"
      } else {
        return "bg-green-300/30 hover:bg-green-200/30 active:bg-green-400/80"
      }
    } else {
      return "bg-slate-200/30 hover:bg-slate-100/30 active:bg-slate-400/30"
    }
  }

  const resetSelectedItems = () => {
    setCheckedState(new Array(items.length).fill(false))
  }

  const handleItemSelect = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )
    setCheckedState(updatedCheckedState)
  }

  const fetchRecipes = () => {
    let itemsArray = []
    for (let i = 0; i < items.length; i++) {
      if (checkedState[i]) {
        itemsArray.push(items[i])
      }
    }
    const queryString = itemsArray.map((item) => item.name).join(",+")
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=757d368ebb304fb3bf99a64e38c11942&ingredients=${queryString}&number=15`
    )
      .then((response) => response.json())
      .then((resItems) => {
        toast.success("Recipes found!", {
          position: "top-center",
          autoClose: 1250,
        })
        setFetchedRecipes(resItems)
      })
  }

  const handleSelectRecipe = (data) => {
    fetch(
      `https://api.spoonacular.com/recipes/${data}/information?apiKey=757d368ebb304fb3bf99a64e38c11942&includeNutrition=false`
    )
      .then((res) => res.json())
      .then((recipe) => {
        toast.success(`Recipe selected!`, {
          position: "top-center",
          autoClose: 1250,
        })
        setSelectedRecipe(recipe)
        console.log(recipe)
      })
  }

  return (
    <div className="mt-6 mb-4 mx-0 md:mx-6">
      <button
        onClick={() => resetSelectedItems()}
        className="py-1 px-2 rounded-md bg-blue-600/60 text-white text-sm font-quicksand shadow-2xl active:bg-red-700/80"
      >
        Clear Selections
      </button>
      <ul className="grid grid-cols-3 md:grid-cols-6 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-2xl rounded-lg mt-10 mb-20 mx-10">
        {items.length ? (
          items.map((item, index) => (
            <div
              onClick={() => handleItemSelect(index)}
              key={item.id}
              className={`${calcDaysFrom(item)} ${
                checkedState[index] === true ? "bg-white shadow-lg" : ""
              } relative shadow-lg px-4 py-3 
              focus-within:ring-2 focus-within:ring-green-200 rounded-md`}
            >
              <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                  <a className="block focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p
                      className={`truncate cursor-default text-sm font-medium text-slate-600 font-quicksandBold`}
                    >
                      {item.name}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className=" p-2 cursor-default text-center text-slate-600 my-auto font-quicksand">
            You have no items. Go to your logger!
          </p>
        )}
      </ul>
      <button
        onClick={() => fetchRecipes()}
        className="py-1 px-2 rounded-md bg-orange-600/60 text-white text-sm font-quicksand shadow-2xl active:bg-red-700/80"
      >
        Get Recipes
      </button>
      <div className="flex justify-center flex-wrap">
        <RecipesList
          recipes={fetchedRecipes}
          handleSelectRecipe={handleSelectRecipe}
        />
        <SingleRecipe recipe={selectedRecipe} />
      </div>
    </div>
  )
}

export default ItemsChecklist
