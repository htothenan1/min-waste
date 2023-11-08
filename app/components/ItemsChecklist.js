"use client"

import { useState } from "react"
import RecipesList from "./RecipesList"
import SingleRecipe from "./SingleRecipe"
import { toast } from "react-toastify"
import styles from "./styles/itemsChecklist.module.css"

const ItemsChecklist = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [fetchedRecipes, setFetchedRecipes] = useState(null)
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const handleItemSelect = (item) => {
    if (!selectedItems.includes(item.name)) {
      setSelectedItems((prevItems) => [...prevItems, item.name])
    } else {
      setSelectedItems((prevItems) => prevItems.filter((i) => i !== item.name))
    }
  }

  const fetchRecipes = () => {
    setLoading(true)
    if (selectedItems.length) {
      const queryString = selectedItems.map((item) => item).join(",+")
      fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=757d368ebb304fb3bf99a64e38c11942&ingredients=${queryString}&number=15`
      )
        .then((response) => response.json())
        .then((resItems) => {
          setFetchedRecipes(resItems)
        })
    } else {
      toast.error("Select some items first!", {
        position: "top-center",
        autoClose: 1000,
      })
    }
    setLoading(false)
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
      <div className={styles.itemsChecklistContainer}>
        <div>
          <h2 className={styles.titleText}>Your Items</h2>
          <button
            onClick={() => fetchRecipes()}
            disabled={selectedItems.length === 0}
            className={styles.addItemsButton}
          >
            <p className={selectedItems.length && styles.whiteText}>
              Get Recipes ({selectedItems.length})
            </p>
          </button>

          <div className={styles.groceriesList}>
            {items.map((item) => (
              <div
                onClick={() => handleItemSelect(item)}
                key={item.id}
                className={`${styles.groceryItem} ${
                  selectedItems.includes(item.name) &&
                  styles.selectedGroceryItem
                }`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        <RecipesList
          selectedRecipe={selectedRecipe}
          recipes={fetchedRecipes}
          handleSelectRecipe={handleSelectRecipe}
        />
        <SingleRecipe recipe={selectedRecipe} />
      </div>
    </>
  )
}

export default ItemsChecklist
