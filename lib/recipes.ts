export async function getRecipes(item: string) {
  try {
    const recipes = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${item}&app_id=53197589&app_key=e5b705b274508e7de4de1f3a3a726545&diet=balanced&random=true`
    );
    console.log(recipes.body);
  } catch (err) {
    return { err };
  }
}
