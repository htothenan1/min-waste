"use client"

import { useState, useEffect, useRef } from "react"
import SingleItem from "./SingleItem"
import ItemLogger from "./ItemLogger"
import { toast } from "react-toastify"
import { useSession } from "next-auth/react"
import { thought } from "../data/thoughts"
import styles from "./styles/kitchen.module.css"
import {
  createItemAction,
  deleteItemsActions,
  multiLogIncrementAction,
} from "@/_actions"
import { ReloadIcon, TrashCan, UploadIcon, MagicStick } from "@/data/icons"
import { veggiesTest } from "@/utils/openai"
import { addDays } from "date-fns"

const Kitchen = ({ items, user }) => {
  const hiddenFileInput = useRef(null)
  const [file, setFile] = useState(undefined)
  const [itemList, setItemList] = useState({})
  const [openLoading, setOpenLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()
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

  const addCustomItem = async (name, tip) => {
    const fiveDaysFromToday = addDays(new Date(), 5)
    await createItemAction(session.user.email, name, tip, fiveDaysFromToday)
  }

  const handleAddItems = async () => {
    setOpenLoading(true)

    const itemsString = await veggiesTest(file)
    console.log(itemsString.message.content)
    const itemsObject = JSON.parse(itemsString.message.content)

    try {
      const promises = Object.entries(itemsObject).map(([itemName, tip]) => {
        return addCustomItem(itemName, tip)
      })

      const results = await Promise.all(promises)
      toast.success(`${results.length} items added!`, {
        position: "top-center",
        autoClose: 1000,
      })

      await multiLogIncrementAction(session.user.email, results.length)
      setItemList({})
      setFile(undefined)
    } catch (error) {
      console.error("Error adding items:", error)
    }

    setOpenLoading(false)
  }

  const handleOnChange = (e) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setFile(reader.result)
    })
    reader.readAsDataURL(e.target.files[0])
  }

  const deleteAllItems = async () => {
    await deleteItemsActions(user.id)
    setIsOpen(false)
  }

  const handleClick = () => {
    hiddenFileInput.current.click()
  }

  function Modal({ onClose }) {
    return (
      <div className={styles.modalBackground} onClick={onClose}>
        <div
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className={styles.modalTitle}>Delete All Current Items!</h3>
          <p className={styles.modalSub}>
            Are you sure you want to delete all of your current items?
          </p>
          <button
            className={styles.greenButton}
            onClick={() => {
              deleteAllItems()
            }}
          >
            Delete All Items
          </button>

          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    )
  }

  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * thought.length)
    setCurrentThought(thought[randomIdx])
  }, [items])

  return (
    <>
      {isOpen && <Modal onClose={() => setIsOpen(false)}></Modal>}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className={styles.headerText}>MinWaste Kitchen</h1>
        <button
          className={styles.clearFridgeButton}
          onClick={() => setIsOpen(true)}
        >
          <TrashCan
            style={{
              height: "15px",
              width: "15px",
              fill: "white",
            }}
          />
          <span style={{ marginLeft: "5px" }}>Clear Your Items</span>
        </button>

        <button className={styles.AiLogButton} onClick={handleClick}>
          <UploadIcon
            style={{
              height: "20px",
              width: "20px",
              fill: "white",
              marginRight: ".5rem",
            }}
          />
          <span>Upload Pic / Log with AI</span>
          <MagicStick
            style={{
              height: "20px",
              width: "20px",
              fill: "white",
              marginLeft: ".5rem",
              paddingRight: "0px",
            }}
          />
        </button>

        <input
          className={styles.fileInput}
          type="file"
          ref={hiddenFileInput}
          onChange={(e) => handleOnChange(e)}
        />

        {file && (
          <>
            <div className={styles.imagePreviewContainer}>
              <img src={file} alt="Preview" className={styles.imagePreview} />
            </div>
            <button
              disabled={itemList.length < 1}
              className={styles.addButton}
              onClick={() => handleAddItems()}
            >
              {openLoading ? (
                <ReloadIcon className={styles.reloadIcon} />
              ) : (
                "Add Items"
              )}
            </button>
          </>
        )}
      </div>

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
