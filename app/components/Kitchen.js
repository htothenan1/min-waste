"use client"

import { useState, useEffect } from "react"
import SingleItem from "./SingleItem"
import ItemLogger from "./ItemLogger"

import { toast } from "react-toastify"
import { thought } from "../data/thoughts"

const Kitchen = ({ items, itemsCount, userName }) => {
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
      <div className="flex flex-col items-center">
        <h1 className=" text-orange-600/70 font-quicksandBold text-4xl">
          MinWaste Kitchen
        </h1>
        <h2 className="my-2 text-slate-600 text-lg font-quicksandBold">
          {`${userName} has consumed ` + itemsCount + ` complete items!`}
        </h2>
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
            <ItemLogger
              items={items}
              editStatus={editMode}
              selectedItem={selectedItem}
              handleSelectItem={handleSelectItem}
            />
          </div>
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
