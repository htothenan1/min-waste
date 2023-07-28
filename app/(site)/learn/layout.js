export const metadata = {
  title: "Learn",
  description: "5-Step program to improve your food waste behavior",
};

export default function LearnLayout({ children }) {
  return (
    <section className="h-full bg-slate-50/50" lang="en">
      {children}
    </section>
  );
}
