import GuestNavBar from "./common/GuestNavBar";
import Footer from "./common/Footer";
import screenshot from "../public/waste-not.png";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <section>
      <GuestNavBar />
      <div className="bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="overflow-hidden rounded-lg bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-100 via-blue-100 to-yellow-100 shadow-lg lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:px-20 xl:py-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl">
                  <span className="block">Want to stop wasting food?</span>
                  <span className="block">
                    Try <span className=" text-orange-600/70">Waste-Not!</span>
                  </span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-slate-600">
                  Our app will help improve your behavior, reduce your food
                  waste, and start saving you money today.
                </p>
                <a
                  href="/register"
                  className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-orange-600/80 shadow hover:bg-orange-50"
                >
                  Sign up for free
                </a>
              </div>
            </div>
            <div className="aspect-h-3 aspect-w-5 -mt-6 md:aspect-h-1 md:aspect-w-2">
              <Image
                className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={screenshot}
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-2/3 mx-auto mt-6 bg-slate-50/50">
        <h1 className="text-slate-600 text-center font-semibold mt-4 text-2xl">
          How to get the most out of{" "}
          <span className="text-orange-600/70">Waste-Not</span>
        </h1>
        <p className="my-2 text-slate-600 text-sm md:text-base">
          <span className=" font-extrabold">
            1. Log your kitchen items regularly.
          </span>{" "}
          The more accurate you keep your Items List, the more effective the app
          will be.
        </p>
        <p className="my-2 text-slate-600 text-sm md:text-base">
          <span className=" font-extrabold">
            2. Set a Use-By Date for your items.
          </span>{" "}
          This should be based on what you feel is appropriate, not the
          expiration code on the package. Make sure to factor in your lifestyle
          and schedule when choosing this date.
        </p>
        <p className="my-2 text-slate-600 text-sm md:text-base">
          <span className="font-extrabold">
            3. Consume your items from the top of the list, first.
          </span>{" "}
          Try to always eat what should be eaten next. If your item has a{" "}
          <span className="text-red-500/70">red background</span>, that means it
          is less than 2 days away from the Use-By Date.{" "}
          <span className="text-green-600">Green background</span> means you
          have more than 2 days, and the{" "}
          <span className="text-slate-500/70">gray ones</span> are yet to be
          set.
        </p>
        <p className="my-2 text-slate-600 text-sm md:text-base">
          <span className="font-extrabold">
            4. Update your Items List when an item is finished.
          </span>{" "}
          We will keep count of the items you fully consume, so that you can
          track your overall progress.
        </p>
        <p className="my-2 text-slate-600 text-sm md:text-base">
          <span className="font-extrabold">5. Take it with you.</span> Our app
          is mobile friendly, so use it as a grocery shopping tool. Never
          double-buy an item again!
        </p>

        <h1 className=" text-slate-600 font-semibold mb-4 mt-8 text-lg md:text-3xl text-center">
          What&apos;s so bad about food waste?
        </h1>
        <p className="my-2 text-slate-600 text-sm md:text-base mb-4">
          Nearly 40 percent of food in the US goes to waste! At the same time, 1
          in 8 Americans don&apos;t have enough food to eat. Isn&apos;t that
          absurd? That wasted food also makes up 20 percent of all landfills,
          which produces extreme amounts of methane gas (look up{" "}
          <Link
            className="text-orange-600/70"
            href={
              "https://www.epa.gov/lmop/basic-information-about-landfill-gas"
            }
            target="_blank"
          >
            anaerobic decomposition
          </Link>
          ). The resources used to produce and deliver wasted food to consumers
          is also immense. The only way this problem gets under control is if we
          collectively improve our personal food waste behaviors and attitudes.
          Watch this quick breakdown on the issue before getting started:
        </p>
        <div className="flex flex-col justify-center items-center w-full aspect-video mt-4 mb-20 bg-slate-50/50">
          <iframe
            className="rounded-md shadow-lg mx-auto max-w-xs md:max-w-lg"
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
