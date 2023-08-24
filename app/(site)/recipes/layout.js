export const metadata = {
  title: "Recipes",
  description:
    "Choose from over 5,000 recipes, based on what you have in the kitchen.",
}

export default function RecipesLayout({ children }) {
  return (
    <section className="h-full bg-slate-50/50" lang="en">
      {children}
    </section>
  )
}
