export const metadata = {
  title: "MinWaste Account",
  description: "See your acccount details and waste stats",
}

export default function AccountLayout({ children }) {
  return (
    <section className="h-full bg-slate-50/50" lang="en">
      {children}
    </section>
  )
}
