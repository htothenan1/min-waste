import Link from "next/link"
import { useEffect, useRef } from "react"
import styles from "./styles/singleRecipe.module.css"
import Image from "next/image"

const SingleRecipe = ({ recipe }) => {
  const divRef = useRef(null)

  useEffect(() => {
    divRef.current.scrollTo({ top: 0, behavior: "smooth" })
  }, [recipe])

  return (
    <div class={styles.recipeDetailsContainer}>
      <h2 class={styles.titleText}>Recipe Details</h2>
      <div ref={divRef} class={styles.recipeCardContainer}>
        {recipe ? (
          <>
            <Image
              width={556}
              height={370}
              src={recipe.image}
              alt="A picture of the selected recipe"
            />
            <div class={styles.textContainer}>
              <h2 class={styles.recipeTitle}>{recipe.title}</h2>
              <p class={styles.servingsText}>{`Serves ${recipe.servings}`}</p>
              <p
                class={styles.servingsText}
              >{`Ready in ${recipe.readyInMinutes} minutes`}</p>
              <Link
                target="_blank"
                href={recipe.sourceUrl}
                class={styles.hyperLinkOrange}
              >
                Click here to visit the source
              </Link>
              <h2 class={styles.recipeText}>Ingredients:</h2>
              {recipe.extendedIngredients ? (
                <ul class={styles.ingredientList}>
                  {recipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id} class={styles.ingredientListItem}>
                      {ingredient.original}
                    </li>
                  ))}
                </ul>
              ) : (
                "Sorry, ingredients not available"
              )}
              <h2 class={styles.recipeText}>Instructions:</h2>
              {recipe.analyzedInstructions[0] ? (
                <>
                  <ol class={styles.ingredientList}>
                    {recipe.analyzedInstructions[0].steps.map((step) => (
                      <li class={styles.instructionText} key={step.id}>
                        {step.step}
                      </li>
                    ))}
                  </ol>
                </>
              ) : (
                <p class={styles.emptyListText}>
                  Sorry, not available.
                  <Link target="_blank" href={recipe.sourceUrl}>
                    Click here to visit the source!
                  </Link>
                </p>
              )}
            </div>
          </>
        ) : (
          <h2 class={styles.emptyListText}>No recipe selected</h2>
        )}
      </div>
    </div>
  )
}

export default SingleRecipe
