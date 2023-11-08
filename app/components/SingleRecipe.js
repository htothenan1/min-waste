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
    <div>
      <h2 className={styles.titleText}>Recipe Details</h2>
      <div ref={divRef} className={styles.recipeCardContainer}>
        {recipe ? (
          <>
            <Image
              width={556}
              height={370}
              src={recipe.image}
              alt="A picture of the selected recipe"
            />
            <div className={styles.textContainer}>
              <h2 className={styles.recipeTitle}>{recipe.title}</h2>
              <p
                className={styles.servingsText}
              >{`Serves ${recipe.servings}`}</p>
              <p
                className={styles.servingsText}
              >{`Ready in ${recipe.readyInMinutes} minutes`}</p>
              <Link
                target="_blank"
                href={recipe.sourceUrl}
                className={styles.hyperLinkOrange}
              >
                Click here to visit the source
              </Link>
              <h2 className={styles.recipeText}>Ingredients:</h2>
              {recipe.extendedIngredients ? (
                <ul className={styles.ingredientList}>
                  {recipe.extendedIngredients.map((ingredient) => (
                    <li
                      key={ingredient.id}
                      className={styles.ingredientListItem}
                    >
                      {ingredient.original}
                    </li>
                  ))}
                </ul>
              ) : (
                "Sorry, ingredients not available"
              )}
              <h2 className={styles.recipeText}>Instructions:</h2>
              {recipe.analyzedInstructions[0] ? (
                <>
                  <ol className={styles.ingredientList}>
                    {recipe.analyzedInstructions[0].steps.map((step) => (
                      <li className={styles.instructionText} key={step.id}>
                        {step.step}
                      </li>
                    ))}
                  </ol>
                </>
              ) : (
                <p className={styles.emptyListText}>
                  Sorry, not available.
                  <Link target="_blank" href={recipe.sourceUrl}>
                    Click here to visit the source!
                  </Link>
                </p>
              )}
            </div>
          </>
        ) : (
          <h2 className={styles.emptyListText}>No recipe selected</h2>
        )}
      </div>
    </div>
  )
}

export default SingleRecipe
