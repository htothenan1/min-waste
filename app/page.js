"use client"

import GuestNavBar from "./components/GuestNavBar"
import Footer from "./components/Footer"
import screenshot from "../public/waste-not.png"
import Image from "next/image"
import Lottie from "lottie-react"
import recipes from "../public/recipes.json"
import grocerylist from "../public/grocerylist.json"
import ideas from "../public/ideas.json"

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
                  className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-quicksand text-orange-600/80 shadow hover:bg-orange-50 active:bg-orange-100"
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
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-12 mx-auto">
            <div class="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                <Lottie animationData={grocerylist} />
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
                  Customized recipes on demand
                </h2>
                <p class="leading-relaxed text-base text-slate-600 font-quicksand">
                  Get instant access to over 5,000 recipes, based on what you
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
                <Lottie animationData={recipes} />
              </div>
            </div>
            <div class="flex items-center lg:w-4/5 mx-auto sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                <Lottie animationData={ideas} />
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
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-quicksand text-orange-600/80 shadow hover:bg-orange-50 active:bg-orange-200"
              >
                Sign up for free
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}
