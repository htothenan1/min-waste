"use client"

import { useState } from "react"
import RecipesList from "./RecipesList"
import SingleRecipe from "./SingleRecipe"
import { toast } from "react-toastify"
import styles from "./styles/itemsChecklist.module.css"

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
        return styles.redItem
      } else {
        return styles.greenItem
      }
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

    if (itemsArray.length) {
      const queryString = itemsArray.map((item) => item.name).join(",+")
      fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=757d368ebb304fb3bf99a64e38c11942&ingredients=${queryString}&number=15`
      )
        .then((response) => response.json())
        .then((resItems) => {
          toast.success("Recipes found!", {
            position: "top-center",
            autoClose: 1000,
          })
          setFetchedRecipes(resItems)
        })
    } else {
      toast.error("Select some items first!", {
        position: "top-center",
        autoClose: 1000,
      })
    }
  }

  const handleSelectRecipe = (data) => {
    fetch(
      `https://api.spoonacular.com/recipes/${data}/information?apiKey=757d368ebb304fb3bf99a64e38c11942&includeNutrition=false`
    )
      .then((res) => res.json())
      .then((recipe) => {
        setSelectedRecipe(recipe)
        console.log(recipe)
      })
  }

  return (
    <>
      <button
        disabled={!checkedState}
        onClick={() => fetchRecipes()}
        class={styles.getRecipesButton}
      >
        Get Recipes
      </button>
      <button onClick={() => resetSelectedItems()} class={styles.clearButton}>
        Clear Selections
      </button>

      <h2 class={styles.titleText}>Your Items</h2>

      {items.length ? (
        <div class={styles.itemsGrid}>
          {items.map((item, index) => (
            <div
              onClick={() => handleItemSelect(index)}
              key={item.id}
              class={`${calcDaysFrom(item)} ${
                checkedState[index] === true && styles.orangeBackground
              }`}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p class={styles.emptyListText}>
          No Items! Log some items to get started!
        </p>
      )}
      <div class={styles.recipeCardsContainer}>
        <RecipesList
          recipes={fetchedRecipes}
          handleSelectRecipe={handleSelectRecipe}
        />
        <SingleRecipe recipe={selectedRecipe} />
      </div>
    </>
  )
}

export default ItemsChecklist
