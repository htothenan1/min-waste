export const metadata = {
  title: "Food For Thought",
  description: "Videos that are related to food waste reduction.",
};

export default function FoodForThoughtLayout({ children }) {
  return (
    <section className="h-full bg-slate-50/50" lang="en">
      {children}
    </section>
  );
}
