import Link from "next/link"

const SingleRecipe = ({ recipe }) => {
  return (
    <div className="m-6 mb-10">
      <h2 className="text-center pb-2">Single Recipe View</h2>

      <div className=" flex flex-col bg-gradient-to-t from-red-100 to-red-200 shadow-lg rounded-md w-80 h-80 overflow-scroll">
        {recipe ? (
          <>
            <div className=" bg-transparent">
              <img
                className="rounded-md w-full"
                src={recipe.image}
                alt="A picture of the selected recipe"
              />
            </div>
            <h2 className="text-slate-600 font-semibold text-2xl text-center p-4">
              {recipe.title}
            </h2>
            <p className="text-center text-slate-600">{`Serves ${recipe.servings}`}</p>
            <p className="text-center text text-slate-600">{`Ready in ${recipe.readyInMinutes} minutes`}</p>
            <Link
              target="_blank"
              href={recipe.sourceUrl}
              className="text-center text text-orange-600/70"
            >
              Click to visit the source
            </Link>{" "}
            <div className="my-2 px-4">
              <h2 className="text-slate-600 underline font-light">
                Ingredients
              </h2>
              {recipe.extendedIngredients ? (
                <ul className="list-inside">
                  {recipe.extendedIngredients.map((ingredient) => (
                    <li
                      key={ingredient.id}
                      className="text-sm text-slate-600 list-disc"
                    >
                      {ingredient.original}
                    </li>
                  ))}
                </ul>
              ) : (
                "Sorry, ingredients not available"
              )}
              <h2 className="text-slate-600 underline font-light">
                Instructions
              </h2>
              {recipe.analyzedInstructions[0] ? (
                <>
                  <ol className=" list-inside">
                    {recipe.analyzedInstructions[0].steps.map((step) => (
                      <li
                        className="text-sm text-slate-600 px-1 list-decimal"
                        key={step.id}
                      >
                        {step.step}
                      </li>
                    ))}
                  </ol>
                </>
              ) : (
                <p>
                  Sorry, not available.{" "}
                  <Link target="_blank" href={recipe.sourceUrl}>
                    Click here to visit the source!
                  </Link>
                </p>
              )}
            </div>
          </>
        ) : (
          <h2 className="text-center my-auto cursor-default text-slate-600">
            No recipe selected
          </h2>
        )}
      </div>
    </div>
  )
}

export default SingleRecipe
