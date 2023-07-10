import GuestNavBar from "./common/GuestNavBar";
import Footer from "./common/Footer";
import Link from "next/link";

export default async function Home() {
  return (
    <section>
      <GuestNavBar />
      <div className="flex flex-col text-center w-3/4 mx-auto mt-6 bg-slate-50/50">
        <h1 className=" text-slate-600 font-semibold mt-4 text-lg md:text-2xl">
          What are we building?
        </h1>
        <p className="my-2 text-orange-600/80 font-semibold text-sm md:text-base">
          Waste-Not!
        </p>
        <h1 className="text-slate-600 font-semibold my-4 text-lg md:text-2xl">
          What is our goal?
        </h1>
        <p className="my-2 text-green-800 text-sm md:text-base">
          To empower users to live a minimum-waste lifestyle. Our hope is to
          provide an effective, easy-to-use tool to track the current contents
          of a user&apos;s kitchen, and then set a responsible plan to consume
          those items. Simply being consistently aware of what food you have in
          your kitchen has been shown to reduce an individual&apos;s food waste.
          Additionally, We will develop features that educate the user about the
          minimum-waste lifestyle, and how to apply it. Along the way, the user
          will gain awareness about the issues interconnected with food waste,
          and how they can affect further change.
        </p>
        <h1 className="text-slate-600 font-semibold mt-4 text-lg md:text-2xl">
          How should you use Waste-Not?
        </h1>
        <p className="my-2 text-green-800 text-sm md:text-base">
          Simply put, we want our users to cook and eat more of the food that
          they purchase on a regular basis. The user should (1) log all current
          kitchen items found from the list, (2) and update the items with a
          responsibly set Use-By Date. The date that you set has less to do with
          food safety, and more about setting a reasonable, attainable plan in
          motion to consume your foods. (3) Try your best to consume the items
          from the top of your list first. Your list will always be filtered by
          the Use-By Date. (4) When it&apos;s time to decide what to cook, use
          our built-in recipe search to kickstart the meal ideas. As you cook
          and eat more of your food, you&apos;ll start to save money. As you
          make it a habit, you&apos;ll learn about the issue, and hopefully find
          your own creative ways to reduce waste. Since food waste is such a
          cultural issue, we must draw on these creative ideas to move us
          forward! So the last step is to tell your friends and family to visit
          this website and join the cause!
        </p>
        <h1 className=" text-slate-600 font-semibold mt-4 text-lg md:text-2xl">
          What&apos;s so bad about food waste?
        </h1>
        <p className="my-2 text-green-800 text-sm md:text-base">
          It&apos;s probably worse than you think. Nearly 40 percent of food in
          the US goes to waste! At the same time, 1 in 8 Americans don&apos;t
          have enough food to eat each day. Isn&apos;t that absurd? That wasted
          food also makes up 20 percent of all landfills, and produces extreme
          amounts of methane (look up{" "}
          <Link
            className="text-purple-400"
            href={
              "https://www.epa.gov/lmop/basic-information-about-landfill-gas"
            }
            target="_blank"
          >
            anaerobic decomposition
          </Link>
          ). The amount of resources that are used to produce and deliver
          uneaten food to consumers is also immense. The only way this problem
          goes away is if we can collectively improve our behavior, and stop
          being reckless with our food. Also, the less food you waste, the more
          money you save! So sign up, start logging, and stop wasting! We
          recommend watching this quick breakdown on the issue before getting
          started:
        </p>
        <div className="flex flex-col justify-center items-center w-full aspect-video mt-4 mb-20 bg-slate-50/50">
          <iframe
            className="rounded-md shadow-md mx-auto max-w-xs md:max-w-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ishA6kry8nc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="text-center p-1 text-xs w-3/4">
            *Older phones may experience a{" "}
            <span className="text-green-500">green screen error</span>. If this
            is the case, please watch on YouTube directly.*
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
