export const metadata = {
  title: "MinWaste App Dashboard",
  description: "Log your items, track your goals, find recipes",
}

export default function DashboardLayout({ children }) {
  return (
    <section className="h-full bg-slate-50/50" lang="en">
      {children}
    </section>
  )
}
