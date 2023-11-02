"use client"

import styles from "./styles/recipesList.module.css"

const RecipesList = ({ recipes, handleSelectRecipe, selectedRecipe }) => {
  console.log(selectedRecipe?.id)
  return (
    <div class={styles.recipesListContainer}>
      <h2 class={styles.titleText}>Your Recipes</h2>

      <div role="list" class={styles.recipesList}>
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div
              onClick={() => handleSelectRecipe(recipe.id)}
              key={recipe.id}
              class={`${styles.recipeItem} ${
                selectedRecipe && selectedRecipe.id === recipe.id
                  ? styles.selectedItem
                  : ""
              }`}
            >
              {recipe.title}
            </div>
          ))
        ) : (
          <p class={styles.emptyListText}>No current recipes</p>
        )}
      </div>
    </div>
  )
}

export default RecipesList
