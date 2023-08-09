import GuestNavBar from "./common/GuestNavBar"
import Footer from "./common/Footer"
import screenshot from "../public/waste-not.png"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../app/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"

export default async function Home() {
  return (
    <section>
      <GuestNavBar />
      <div className="bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="overflow-hidden rounded-lg bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-100 via-blue-100 to-yellow-100 shadow-lg lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:px-20 xl:py-20">
              <div className="lg:self-center">
                <h1 className="text-3xl font-quicksandBold tracking-tight text-slate-600 sm:text-4xl">
                  <span className="block">Want to stop wasting food?</span>
                  <span className="block">
                    Try <span className=" text-orange-600/70">MinWaste!</span>
                  </span>
                </h1>
                <p className="mt-4 text-lg leading-6 text-slate-600 font-quicksand">
                  Our app will help improve your behavior, reduce your food
                  waste, and start saving you money.
                </p>
                <a
                  href="/register"
                  className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-quicksand text-orange-600/80 shadow hover:bg-orange-50"
                >
                  Get started
                </a>
              </div>
            </div>
            <div className="aspect-h-3 aspect-w-5 -mt-6 md:aspect-h-1 md:aspect-w-2">
              <Image
                priority
                className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={screenshot}
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-2/3 mx-auto mt-6 bg-slate-50/50">
        {/* <h2 className="text-slate-600 text-center font-semibold mt-4 text-2xl md:text-3xl">
          How to get the most out of{" "}
          <span className="text-orange-600/70">MinWaste</span>
        </h2>
        <p className="my-2 text-slate-600 text-md">
          <span className=" font-extrabold">
            1. Log your spoilable items regularly.
          </span>{" "}
          The more in sync your Items List is with your kitchen, the more
          effective the app will be. If the item you brought home can spoil in
          the next month, make sure to log it.
        </p>
        <p className="my-2 text-slate-600 text-md">
          <span className=" font-extrabold">
            2. Set a Use-By Date for your items.
          </span>{" "}
          Set a reasonable goal for when each item{" "}
          <span className=" italic">should optimistically</span> be consumed by.
          This should be based on what you feel is appropriate, not the
          expiration code on the package. Make sure to factor in your lifestyle
          and schedule when choosing this date.
        </p>
        <p className="my-2 text-slate-600 text-md">
          <span className="font-extrabold">
            3. Consume your items from the top of the list, first.
          </span>{" "}
          Try to always eat what should be eaten next. If your item has a{" "}
          <span className="text-red-500/70">red background</span>, that means it
          is less than 2 days away from the Use-By Date.{" "}
          <span className="text-green-600">Green background</span> means you
          have more than 2 days, and the{" "}
          <span className="text-slate-500/70">gray ones</span> are items that
          are yet to be set.
        </p>
        <p className="my-2 text-slate-600 text-md">
          <span className="font-extrabold">
            4. Update your Items List when an item is finished.
          </span>{" "}
          We will keep count of the items you fully consume, so that you can
          track your overall progress.
        </p>
        <p className="my-2 text-slate-600 text-md">
          <span className="font-extrabold">5. Take it with you!</span> Our app
          is mobile friendly, so use it as a grocery shopping tool. Never
          double-buy an item again!
        </p> */}
        {/* <Accordion
          type="single"
          collapsible
          className=" w-full md:w-1/2 mb-20 mt-16"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-center">
              <h2 className=" text-slate-600 font-semibold mt-8 text-2xl md:text-3xl text-center">
                What&apos;s so bad about food waste?
              </h2>
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <p className="my-2 text-slate-600 text-md mb-4">
                Nearly 40 percent of food in the US goes to waste! At the same
                time, 1 in 8 Americans don&apos;t have enough food to eat.
                Isn&apos;t that absurd? That wasted food also makes up 20
                percent of all landfills, which produces extreme amounts of
                methane gas (look up{" "}
                <Link
                  className="text-orange-600/70"
                  href={
                    "https://www.epa.gov/lmop/basic-information-about-landfill-gas"
                  }
                  target="_blank"
                >
                  anaerobic decomposition
                </Link>
                ). The resources used to produce and deliver wasted food to
                consumers is also immense. Reducing the amount you waste will
                not only save you money in the short term, it will also be good
                for the planet in the long term. Watch this quick breakdown on
                the issue before getting started:
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
                  <span className="text-green-500">green screen error</span>. If
                  this is the case, please watch on YouTube directly.*
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}

        {/* <h2 className=" text-slate-600 font-semibold mt-8 text-2xl md:text-3xl text-center">
          What&apos;s so bad about food waste?
        </h2>
        <p className="my-2 text-slate-600 text-md mb-4">
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
          is also immense. Reducing the amount you waste will not only save you
          money in the short term, it will also be good for the planet in the
          long term. Watch this quick breakdown on the issue before getting
          started:
        </p> */}
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-12 mx-auto">
            <div class="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M3.5 5.5L5 7l2.5-2.5M3.5 11.5L5 13l2.5-2.5M3.5 17.5L5 19l2.5-2.5M11 6h9M11 12h9M11 18h9" />
                </svg>
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg> */}
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-orange-600/70 text-lg title-font font-quicksandBold mb-2">
                  Keep track of your items
                </h2>
                <p class="leading-relaxed text-base text-slate-600 font-quicksand">
                  Our innovative logging and tracking system will help you
                  regain control of your kitchen.
                </p>

                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                ></svg>
              </div>
            </div>
            <div class="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-orange-600/70 text-lg title-font font-quicksandBold mb-2">
                  Get recipes
                </h2>
                <p class="leading-relaxed text-base text-slate-600 font-quicksand">
                  Gain instant access to over 5,000 recipes, based on what you
                  have in your kitchen.
                </p>

                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                ></svg>
              </div>
              <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M12 3c1.918 0 3.52 1.35 3.91 3.151A4 4 0 0118 13.874V21H6v-7.126a4.002 4.002 0 112.092-7.723A3.999 3.999 0 0112 3zM6.161 17.009L18 17" />
                </svg>
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg> */}
              </div>
            </div>
            <div class="flex items-center lg:w-4/5 mx-auto sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg> */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                >
                  <path d="M20 11h3v2h-3v-2M1 11h3v2H1v-2M13 1v3h-2V1h2M4.92 3.5l2.13 2.14-1.42 1.41L3.5 4.93 4.92 3.5m12.03 2.13l2.12-2.13 1.43 1.43-2.13 2.12-1.42-1.42M12 6a6 6 0 016 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 016-6m2 15v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1h4m-3-3h2v-2.13c1.73-.44 3-2.01 3-3.87a4 4 0 00-4-4 4 4 0 00-4 4c0 1.86 1.27 3.43 3 3.87V18z" />
                </svg>
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-orange-600/70 text-lg title-font font-quicksandBold mb-2">
                  Learn new skills
                </h2>
                <p class="leading-relaxed text-base text-slate-600 font-quicksand">
                  Our curated content will educate you on food waste, and give
                  you the tools to improve your behavior.
                </p>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                ></svg>
              </div>
            </div>
            <div className="flex justify-center mb-20">
              <a
                href="/register"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-quicksand text-orange-600/80 shadow hover:bg-orange-50"
              >
                Get started
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}
