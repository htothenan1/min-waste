export const metadata = {
  title: "Waste-Not Contact Form",
  description: "Send us your comments, questions, and concerns.",
};

export default function ContactLayout({ children }) {
  return (
    <section className="h-full bg-slate-50/50" lang="en">
      {children}
    </section>
  );
}
