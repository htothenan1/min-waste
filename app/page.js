import GuestNavBar from "./common/GuestNavBar";

export default async function Home() {
  return (
    <section>
      <GuestNavBar />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center border md:hover:scale-110 rounded-md mt-20 sm:w-3/4 md:w-1/2 p-4">
          <h1 className="text-lg text-slate-600 font-semibold">
            What am I building?
          </h1>
          <p className="my-2 text-sm">Waste-Not!</p>
          <h1 className="text-lg text-slate-600 font-semibold">
            What is my goal?
          </h1>
          <p className="my-2 text-sm">
            To empower users to live a minimum-waste life. My hope is to provide
            an effective, easy-to-use tool to track the current contents of a
            user&apos;s kitchen. Simply knowing what food you have in your
            kitchen has been shown to reduce an individual&apos;s food waste
            significantly. Additionally, I will develop features that teach the
            user about the minimum-waste lifestyle, and how to apply it.
          </p>
          <h1 className="text-lg text-slate-600 font-semibold">
            What&apos;s so bad about food waste?
          </h1>
          <p className="my-2 text-sm">
            Nearly 40 percent of food in the US goes to waste! At the same time,
            1 in 8 Americans don&apos;t have enough food to eat each day.
            Isn&apos;t that absurd? That wasted food also makes up 20 percent of
            all landfills, and ends up being a terrible producer of greenhouse
            gasses. The resources that are spent to produce and deliver uneaten
            food to consumers are immense. The only way this problem goes away
            is if we can collectively improve our behavior, and stop wasting so
            much damn food. Additionally, on a less altruistic note, the less
            food you waste, the more money you save. So let&apos;s make a
            change!
          </p>
          <h1 className="text-lg text-slate-600 font-semibold">
            What tech am I utilizing?
          </h1>
          <p className="my-2 text-sm">
            Next.js 13.4 (React) - PostgreSQL - NextAuth - Bcrypt - Axios -
            Prisma - TailwindCSS - HeadlessUI - React Toastify - Edamam API -
            React Date Picker
          </p>
        </div>
      </div>
    </section>
  );
}
