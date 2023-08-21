/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

const SingleRecipe = ({ recipe }) => {
  return (
    <div id="singleRecipeView" className="m-6 mb-10">
      <h2 className="text-center pb-2 font-quicksandBold text-lg text-slate-600">
        Single Recipe View
      </h2>

      <div className=" flex flex-col bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/50 via-slate-100/50 to-indigo-100/50 shadow-2xl rounded-lg w-80 h-80 overflow-scroll">
        {recipe ? (
          <>
            <div className=" bg-transparent">
              <img
                className="rounded-md w-full"
                src={recipe.image}
                alt="A picture of the selected recipe"
              />
            </div>
            <h2 className="text-slate-600 font-semibold text-2xl text-center p-4 font-quicksandBold">
              {recipe.title}
            </h2>
            <p className="text-center text-slate-600 font-quicksandBold">{`Serves ${recipe.servings}`}</p>
            <p className="text-center text text-slate-600 font-quicksandBold">{`Ready in ${recipe.readyInMinutes} minutes`}</p>
            <Link
              target="_blank"
              href={recipe.sourceUrl}
              className="text-center text text-orange-600/70 font-quicksandBold"
            >
              Click here to visit the source
            </Link>{" "}
            <div className="my-2 px-4">
              <h2 className="text-slate-600 font-quicksandBold">
                Ingredients:
              </h2>
              {recipe.extendedIngredients ? (
                <ul className="list-inside">
                  {recipe.extendedIngredients.map((ingredient) => (
                    <li
                      key={ingredient.id}
                      className="text-sm text-slate-600 list-disc font-quicksand"
                    >
                      {ingredient.original}
                    </li>
                  ))}
                </ul>
              ) : (
                "Sorry, ingredients not available"
              )}
              <h2 className="text-slate-600 font-quicksandBold">
                Instructions:
              </h2>
              {recipe.analyzedInstructions[0] ? (
                <>
                  <ol className=" list-inside font-quicksandBold">
                    {recipe.analyzedInstructions[0].steps.map((step) => (
                      <li
                        className="text-sm text-slate-600 px-1 list-decimal font-quicksand"
                        key={step.id}
                      >
                        {step.step}
                      </li>
                    ))}
                  </ol>
                </>
              ) : (
                <p className=" font-quicksand">
                  Sorry, not available.{" "}
                  <Link target="_blank" href={recipe.sourceUrl}>
                    Click here to visit the source!
                  </Link>
                </p>
              )}
            </div>
          </>
        ) : (
          <h2 className="text-center my-auto cursor-default text-slate-600 font-quicksand">
            No recipe selected
          </h2>
        )}
      </div>
    </div>
  )
}

export default SingleRecipe
