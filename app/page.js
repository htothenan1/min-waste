"use client"

import GuestNavBar from "./common/GuestNavBar"
import Footer from "./common/Footer"
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
                {/* <svg
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
                {/* <svg
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
                </svg> */}
              </div>
            </div>
            <div class="flex items-center lg:w-4/5 mx-auto sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                <Lottie animationData={ideas} />
                {/* <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  >
                  <path d="M20 11h3v2h-3v-2M1 11h3v2H1v-2M13 1v3h-2V1h2M4.92 3.5l2.13 2.14-1.42 1.41L3.5 4.93 4.92 3.5m12.03 2.13l2.12-2.13 1.43 1.43-2.13 2.12-1.42-1.42M12 6a6 6 0 016 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 016-6m2 15v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1h4m-3-3h2v-2.13c1.73-.44 3-2.01 3-3.87a4 4 0 00-4-4 4 4 0 00-4 4c0 1.86 1.27 3.43 3 3.87V18z" />
                </svg> */}
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
