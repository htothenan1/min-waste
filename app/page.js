import GuestNavBar from "./common/GuestNavBar";
import Footer from "./common/Footer";

export default async function Home() {
  return (
    <section>
      <GuestNavBar />
      <div className="flex flex-col text-center w-3/4 mx-auto mt-6 bg-slate-50/50">
        <h1 className=" text-slate-600 font-semibold mt-4 text-lg md:text-2xl">
          What am I building?
        </h1>
        <p className="my-2 text-orange-600/80 font-semibold text-sm md:text-base">
          Waste-Not!
        </p>
        <h1 className="text-slate-600 font-semibold my-4 text-lg md:text-2xl">
          What is my goal?
        </h1>
        <p className="my-2 text-green-800 text-sm md:text-base">
          To empower users to live a minimum-waste lifestyle. My hope is to
          provide an effective, easy-to-use tool to track the current contents
          of a user&apos;s kitchen. Simply being aware of what food you have in
          your kitchen has been shown to reduce an individual&apos;s food waste.
          Additionally, I will develop features that teach the user about the
          minimum-waste lifestyle, and how to apply it. Along the way, the user
          will gain awareness about the issues interconnected with food waste,
          and how they can affect further change.
        </p>
        <h1 className="text-slate-600 font-semibold mt-4 text-lg md:text-2xl">
          How should you use Waste-Not?
        </h1>
        <p className="my-2 text-green-800 text-sm md:text-base">
          Simply put, we want our users to cook and eat more of the food that
          they purchase on a regular basis. The user should (1) Log all current
          kitchen items found from the list (2) Update the items with a
          responsibly set Use-By Date. The date that you set has less to do with
          food safety, and more about setting a reasonable, attainable plan in
          motion to consume your foods. (3) Your list will always have the items
          with the nearest Use-By Date at the top. Try your best to consume
          those items first. (4) When its time to decide what to cook, use our
          built-in recipe search to kickstart the meal ideas (5) Cook more of
          your food. Eat more of your food. Learn about the issue. Save money.
          Help the planet. Tell your friends and family to visit this website
          and join the cause!
        </p>
        <h1 className=" text-slate-600 font-semibold mt-4 text-lg md:text-2xl">
          What&apos;s so bad about food waste?
        </h1>
        <p className="my-2 text-green-800 text-sm md:text-base">
          Nearly 40 percent of food in the US goes to waste! At the same time, 1
          in 8 Americans don&apos;t have enough food to eat each day. Isn&apos;t
          that absurd? That wasted food also makes up 20 percent of all
          landfills, and ends up being a terrible producer of greenhouse gasses.
          The amount of resources that are used to produce and deliver uneaten
          food to consumers is immense. The only way this problem goes away is
          if we can collectively improve our behavior, and stop being reckless
          with our food. Also, the less food you waste, the more money you save!
          So sign up, start logging, and stop wasting! I recommend watching this
          video for a quick breakdown of the issue at hand:
        </p>
        <div className="w-full aspect-video mt-4 mb-20 bg-slate-50/50">
          <iframe
            className="rounded-md shadow-md mx-auto max-w-xsm md:max-w-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ishA6kry8nc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </section>
  );
}
