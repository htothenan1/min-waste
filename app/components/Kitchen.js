"use client"

import { useState, useEffect } from "react"
import ItemsList from "./ItemsList"
import SingleItem from "./SingleItem"
import RecipesList from "./RecipesList"
import SingleRecipe from "./SingleRecipe"
import ItemLogger from "./ItemLogger"
import { toast } from "react-toastify"
import { thought } from "../data/thoughts"

const Kitchen = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [fetchedRecipes, setFetchedRecipes] = useState(null)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [currentThought, setCurrentThought] = useState("")

  const calcDaysFrom = (data) => {
    const daysFrom =
      (data.expiredAt.getTime() - new Date().getTime()) / (1000 * 3600 * 24)

    return daysFrom
  }

  const fetchRedItemRecipes = (data) => {
    const redItems = data.filter(
      (item) => item.expiredAt && calcDaysFrom(item) < 2
    )
    let namesArray = []
    if (redItems.length === 0) {
      toast.error("You don't have red items!", {
        position: "top-center",
        autoClose: 1250,
      })
    } else {
      redItems.map((item) => namesArray.push(item.name))
      const finalString = namesArray.join(",+")
      fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=757d368ebb304fb3bf99a64e38c11942&ingredients=${finalString}`
      )
        .then((response) => response.json())
        .then((resItems) => {
          toast.success("Red Item recipes found!", {
            position: "top-center",
            autoClose: 1250,
          })
          setFetchedRecipes(resItems)
        })
    }
  }

  const handleSelectItem = (data) => {
    setSelectedItem(data)
    toast.success(`${data.name} selected!`, {
      position: "top-center",
      autoClose: 1250,
    })
  }

  const handleSelectRecipe = (data) => {
    fetch(
      `https://api.spoonacular.com/recipes/${data}/information?apiKey=757d368ebb304fb3bf99a64e38c11942&includeNutrition=false`
    )
      .then((res) => res.json())
      .then((recipe) => {
        toast.success("New recipe selected!", {
          position: "top-center",
          autoClose: 1250,
        })
        setSelectedRecipe(recipe)
      })
  }

  const fetchRecipes = () => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=757d368ebb304fb3bf99a64e38c11942&query=${selectedItem.name}`
    )
      .then((res) => res.json())
      .then((recipes) => {
        if (recipes.results.length === 0) {
          toast.error("Sorry, no recipes found", {
            position: "top-center",
            autoClose: 1250,
          })
        } else {
          toast.success(`${selectedItem.name} recipes found!`, {
            position: "top-center",
            autoClose: 1250,
          })
        }
        setFetchedRecipes(recipes.results)
      })
  }

  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * thought.length)
    setSelectedItem(null)
    setFetchedRecipes(null)
    setCurrentThought(thought[randomIdx])
  }, [items])

  return (
    <div className="flex justify-center flex-wrap bg-slate-50/50 mt-12">
      {editMode ? (
        <div className="flex flex-col justify-center items-center w-80 h-72 m-10">
          <h2 className="font-semibold text-lg text-orange-600/70">
            Food For Thought
          </h2>
          <p className="text-center text-slate-600 p-2">{currentThought}</p>
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
  )
}

export default Kitchen
