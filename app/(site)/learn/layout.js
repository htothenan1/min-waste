export const metadata = {
  title: "Learn",
  description: "Our 5 step program will improve your food waste behavior",
};

export default function LearnLayout({ children }) {
  return (
    <section className="h-full bg-slate-50/50" lang="en">
      {children}
    </section>
  );
}
