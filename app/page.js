import GuestNavBar from "./common/GuestNavBar";
import Footer from "./common/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import Link from "next/link";

export default async function Home() {
  return (
    <section>
      <GuestNavBar />
      <div className="flex flex-col w-3/4 mx-auto mt-6 bg-slate-50/50">
        <h1 className=" text-slate-600 text-center font-semibold mt-4 text-lg md:text-2xl">
          What are we building?
        </h1>
        <p className="my-2 text-green-800 text-sm md:text-base">
          Waste-Not! Our goal is to empower users to live a minimum-waste
          lifestyle. We hope to provide an effective, easy-to-use tool to track
          the current contents of a user&apos;s kitchen. Consistently being
          aware of what food you have in your kitchen has been shown to reduce
          an individual&apos;s food waste. Additionally, We will develop
          features that educate the user about the minimum-waste lifestyle, and
          how to apply it. The user will gain awareness about the issues
          interconnected with food waste, and how they can affect further
          change.
        </p>

        <h1 className="text-slate-600 text-center font-semibold mt-4 text-lg md:text-2xl">
          How to use Waste-Not?
        </h1>
        <p className="my-2 text-green-800 text-sm md:text-base">
          <span className=" font-extrabold">1. Log your kitchen items.</span>{" "}
          The more accurate your Items List is, the more effective the app will
          be for you. <br />{" "}
          <span className=" font-extrabold">
            2. Set a Use-By Date for your items.
          </span>{" "}
          These dates should be based on your own sense of when the item should
          responsibly be consumed by, NOT based on whatever expiration code is
          written on the package. <br />{" "}
          <span className="font-extrabold">
            3. Consume your items from the top of your list, first.
          </span>{" "}
          Use our recipe search tool to get ideas on how to cook those items.
          <br />{" "}
          <span className="font-extrabold">
            4. Update your Items List when an item is finished.
          </span>{" "}
          We will keep count of the items you fully consume, so that you can
          track your overall progress.
        </p>
        {/* <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className=" text-slate-600 font-semibold mt-4 text-lg md:text-2xl text-center mb-10">
                What&apos;s so bad about food waste?
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              <p className="my-2 text-green-800 text-sm md:text-base">
                It&apos;s probably worse than you think. Nearly 40 percent of
                food in the US goes to waste! At the same time, 1 in 8 Americans
                don&apos;t have enough food to eat each day. Isn&apos;t that
                absurd? That wasted food also makes up 20 percent of all
                landfills, and produces extreme amounts of methane (look up{" "}
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
                uneaten food to consumers is also immense. The only way this
                problem goes away is if we collectively improve our personal
                food waste behaviors and attitudes. Also, the less food you
                waste, the more money you save! So sign up, start logging, and
                stop wasting! We recommend watching this quick breakdown on the
                issue before getting started:
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
                  <span className="text-green-500">green screen error</span>. If
                  this is the case, please watch on YouTube directly.*
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
        <h1 className=" text-slate-600 font-semibold mt-4 text-lg md:text-2xl text-center">
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
          goes away is if we collectively improve our personal food waste
          behaviors and attitudes. Also, the less food you waste, the more money
          you save! So sign up, start logging, and stop wasting! We recommend
          watching this quick breakdown on the issue before getting started:
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
