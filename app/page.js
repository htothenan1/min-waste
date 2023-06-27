import GuestNavBar from "./common/GuestNavBar";
import Footer from "./common/Footer";

export default async function Home() {
  return (
    <section>
      <GuestNavBar />
      <div className="flex justify-center p-6">
        <div className="flex flex-col justify-center items-center border shadow-md rounded-md sm:w-3/4 md:w-1/2 p-4">
          <h1 className="text-lg text-slate-600 font-semibold">
            What am I building?
          </h1>
          <p className="my-2 text-sm">Waste-Not!</p>
          <h1 className="text-lg text-slate-600 font-semibold">
            What is my goal?
          </h1>
          <p className="my-2 text-sm">
            To empower users to live a minimum-waste lifestyle. My hope is to
            provide an effective, easy-to-use tool to track the current contents
            of a user&apos;s kitchen. Simply being aware of what food you have
            in your kitchen has been shown to reduce an individual&apos;s food
            waste. Additionally, I will develop features that teach the user
            about the minimum-waste lifestyle, and how to apply it.
          </p>
          <h1 className="text-lg text-slate-600 font-semibold">
            How should you use Waste-Not?
          </h1>
          <p className="my-2 text-sm">
            We want our users to cook and eat more of the food that they buy on
            a regular basis. The user should (1) Log all current kitchen items
            as accurately as possible, (2) Update the items with a responsibly
            set Use By Date. *NOTE* This has less to do with food safety, and
            more with setting a plan in motion to actually consume your food (3)
            When its time to decide what to eat, use our built-in recipe search
            to kickstart the meal (4) Eat more of your food. Save money. Help
            the planet. Tell your friends and family to visit this website.
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
            much damn food. Also, the less food you waste, the more money you
            save! I recommend watching this video for a great breakdown of the
            issue at hand:
          </p>

          <iframe
            className="rounded-md mt-4 border shadow-md"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ishA6kry8nc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </section>
  );
}
