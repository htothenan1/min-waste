"use client"

import styles from "./styles/recipesList.module.css"

const RecipesList = ({ recipes, handleSelectRecipe }) => {
  return (
    <div class={styles.recipesListContainer}>
      <h2 class={styles.titleText}>Your Recipes</h2>

      <ul role="list" class={styles.recipesList}>
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li
              onClick={() => handleSelectRecipe(recipe.id)}
              key={recipe.id}
              class={styles.recipeItem}
            >
              {recipe.title}
            </li>
          ))
        ) : (
          <p class={styles.emptyListText}>No current recipes</p>
        )}
      </ul>
    </div>
  )
}

export default RecipesList
