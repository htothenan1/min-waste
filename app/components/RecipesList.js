"use client"

import styles from "./styles/recipesList.module.css"

const RecipesList = ({ recipes, handleSelectRecipe, selectedRecipe }) => {
  console.log(selectedRecipe?.id)
  return (
    <div className={styles.recipesListContainer}>
      <h2 className={styles.titleText}>Your Recipes</h2>

      <div role="list" className={styles.recipesList}>
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div
              onClick={() => handleSelectRecipe(recipe.id)}
              key={recipe.id}
              className={`${styles.recipeItem} ${
                selectedRecipe && selectedRecipe.id === recipe.id
                  ? styles.selectedItem
                  : ""
              }`}
            >
              {recipe.title}
            </div>
          ))
        ) : (
          <p className={styles.emptyListText}>No current recipes</p>
        )}
      </div>
    </div>
  )
}

export default RecipesList
