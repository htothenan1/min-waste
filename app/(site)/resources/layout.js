export const metadata = {
  title: "Waste-Not App Resources",
  description:
    "List of organizations and projects that help with food waste reduction.",
};

export default function ResourcesLayout({ children }) {
  return (
    <section className="h-full bg-slate-50/50" lang="en">
      {children}
    </section>
  );
}
