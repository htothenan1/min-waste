import Link from "next/link";
import TitleTooltip from "../common/TitleTooltip";
import Image from "next/image";

const SingleRecipe = ({ recipe }) => {
  return (
    <div className="mt-6 mb-10">
      <h2 className="text-center">Single Recipe View</h2>

      <div className=" flex flex-col bg-gradient-to-t from-red-100 to-red-200 shadow-lg rounded-md w-80 h-80 overflow-scroll">
        {recipe ? (
          <>
            <div className="flex items-center">
              <img
                className=" w-36 h-36 rounded-md"
                src={recipe.image}
                alt="A picture of the selected recipe"
              />
              <div className="px-2">
                <h2 className="text-slate-600 font-semibold">{recipe.title}</h2>
              </div>
            </div>
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
              {recipe.analyzedInstructions[0].steps ? (
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
                  <Link href={recipe.sourceUrl}>
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
  );
};

export default SingleRecipe;
