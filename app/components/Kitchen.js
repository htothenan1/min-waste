"use client"

import { useState, useEffect } from "react"
import ItemsList from "./ItemsList"
import SingleItem from "./SingleItem"
import RecipesList from "./RecipesList"
import SingleRecipe from "./SingleRecipe"
import { generateStorageTip } from "../utils/openai"
import ItemLogger from "./ItemLogger"
import { Steps } from "intro.js-react"

import { toast } from "react-toastify"
import { thought } from "../data/thoughts"

const Kitchen = ({ items, itemsCount, userName }) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [fetchedRecipes, setFetchedRecipes] = useState(null)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [currentThought, setCurrentThought] = useState("")
  const [stepsEnabled, setStepsEnabled] = useState(false)
  const [initialStep, setInitialStep] = useState(0)

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
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=757d368ebb304fb3bf99a64e38c11942&ingredients=${finalString}&number=15`
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

  const fetchRecipes = () => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=757d368ebb304fb3bf99a64e38c11942&query=${selectedItem.name}&number=15`
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

  const onExit = () => {
    setStepsEnabled(false)
  }

  const steps = [
    {
      element: "#title",
      intro:
        "Welcome to your MinWaste Kitchen! Let's see how to use this app to reduce your food waste!",
    },
    {
      element: "#itemLogger",
      intro:
        "This is your Logger! Add grocery items you have from the top first, then log any other spoilable items not found on the list.",
    },
    {
      element: "#itemsList",
      intro:
        "Here's your Items List! It should contain all of your spoilable items that you want to keep track of. Eat from the top of the list, first!",
    },
    {
      element: "#singleItemView",
      intro:
        "This window shows details of single selected items. Storage tips are on the back. Set a use-by date, delete the item, or get recipes!",
    },
    {
      element: "#recipesList",
      intro:
        "This is where your recipes will show up, once you start a search. If one looks yummy, click it to show the recipe details!",
    },
    {
      element: "#singleRecipeView",
      intro:
        "This is where the details of your selected recipe are shown. Displays servings, prep time, ingredients, and instructions.",
    },
    {
      element: "#redItemRecipes",
      intro:
        "This will search for recipes that hopefully have a combination of all the red items you have. Eat those up!",
    },
    {
      element: "#itemsCount",
      intro:
        "This is meant to keep track of your long term progress with the app. Enjoy, MinWasters!",
    },
  ]

  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * thought.length)
    setSelectedItem(null)
    setFetchedRecipes(null)
    setCurrentThought(thought[randomIdx])
  }, [items])

  return (
    <>
      <Steps
        enabled={stepsEnabled}
        steps={steps}
        initialStep={initialStep}
        onExit={onExit}
      />
      <div className="flex flex-col items-center">
        <h1
          id="title"
          className=" text-orange-600/70 font-quicksandBold text-4xl"
        >
          MinWaste Kitchen
        </h1>
        <h2
          id="itemsCount"
          className="my-2 text-slate-600 text-lg font-quicksandBold"
        >
          {`${userName} has consumed ` + itemsCount + ` complete items!`}
        </h2>
        {/* <button onClick={generateStorageTip}>Generate open ai magic</button> */}
      </div>
      <div className="flex justify-center flex-wrap bg-slate-50/50">
        {editMode ? (
          <div className="flex flex-col justify-center items-center w-80 h-72 border-2 rounded-md shadow-xl mx-14 mt-16 mb-1">
            <h2 className="font-semibold text-lg text-orange-600/70">
              Food For Thought
            </h2>
            <p className="text-center text-slate-600 p-2">{currentThought}</p>
          </div>
        ) : (
          <div className="flex">
            <ItemLogger items={items} editStatus={editMode} />
            <div className="flex flex-col items-center">
              <ItemsList
                editStatus={editMode}
                items={items}
                handleSelectItem={handleSelectItem}
                selectedItem={selectedItem}
              />
              {/* <button
                id="redItemRecipes"
                onClick={() => fetchRedItemRecipes(items)}
                className="py-1 px-2 rounded-md bg-red-600/90 text-white text-sm font-quicksand shadow-2xl active:bg-red-700/80"
              >
                Red Item Recipes
              </button> */}
            </div>
          </div>
        )}

        <SingleItem
          handleEditToggle={setEditMode}
          editStatus={editMode}
          item={selectedItem}
          handleRecipesFetch={fetchRecipes}
        />
        {/* <RecipesList
          recipes={fetchedRecipes}
          handleSelectRecipe={handleSelectRecipe}
        />
        <SingleRecipe recipe={selectedRecipe} /> */}
      </div>
    </>
  )
}

export default Kitchen
