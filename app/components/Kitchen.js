"use client"

import { useState, useEffect } from "react"
import SingleItem from "./SingleItem"
import ItemLogger from "./ItemLogger"
import { toast } from "react-toastify"
import { thought } from "../data/thoughts"
import styles from "./styles/kitchen.module.css"

const Kitchen = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [currentThought, setCurrentThought] = useState("")

  const handleSelectItem = (data) => {
    setSelectedItem(data)
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
            autoClose: 1000,
          })
        } else {
          toast.success(`${selectedItem.name} recipes found!`, {
            position: "top-center",
            autoClose: 1000,
          })
        }
      })
  }

  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * thought.length)
    setCurrentThought(thought[randomIdx])
  }, [items])

  return (
    <>
      <h1 className={styles.headerText}>MinWaste Kitchen</h1>
      <div className={styles.kitchenContainer}>
        {editMode ? (
          <div className={styles.foodForThoughtContainer}>
            <h2 className={styles.thoughtTitle}>Food For Thought</h2>
            <p className={styles.thoughtText}>{currentThought}</p>
          </div>
        ) : (
          <ItemLogger
            items={items}
            editStatus={editMode}
            selectedItem={selectedItem}
            handleSelectItem={handleSelectItem}
          />
        )}

        <SingleItem
          handleEditToggle={setEditMode}
          handleSelectItem={handleSelectItem}
          editStatus={editMode}
          item={selectedItem}
          handleRecipesFetch={fetchRecipes}
        />
      </div>
    </>
  )
}

export default Kitchen
