import { getUser } from "../../lib/items"
import { getServerSession } from "next-auth"
import NavBar from "../../common/NavBar"
import Footer from "../../common/Footer"
import refedLogo from "../../../public/refed-logo.jpeg"
import foodBankLogo from "../../../public/food-bank.png"
import farmlinkLogo from "../../../public/farmlink-project.png"
import feedingAmericaLogo from "../../../public/feeding-america.png"
import fwraLogo from "../../../public/fwra.jpg"
import jamesBeardLogo from "../../../public/james-beard-foundation.png"
import styles from "./resources.module.css"
import { authOptions } from "../../api/auth/[...nextauth]/route"
import Image from "next/image"
import Link from "next/link"

export default async function Resources() {
  const session = await getServerSession(authOptions)
  const { user } = await getUser(session.user.email)

  return (
    <>
      <NavBar user={user?.name} />
      <div class={styles.pageContainer}>
        <h1 class={styles.headerText}>Resources</h1>
        <p class={styles.subheaderText}>
          The organizations, projects, and videos that helped shape the goals
          and values of this app.
        </p>
        <div class={styles.logosContainer}>
          <div class={styles.rowContainer}>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  alt="gallery"
                  class="absolute inset-0 w-full h-full max-h-64 object-cover object-center"
                  src={refedLogo}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-orange-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-quicksand text-orange-500 mb-1">
                    <Link href={"https://refed.org/"} target="_blank">
                      LEARN MORE
                    </Link>
                  </h2>
                  <h2 class="title-font text-lg font-quicksandBold text-gray-900 mb-3">
                    ReFED
                  </h2>
                  <p class="leading-relaxed font-quicksand">
                    ReFED is a national nonprofit dedicated to ending food loss
                    and waste by advancing data-driven solutions.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  alt="gallery"
                  class="absolute inset-0 w-full h-full max-h-64 object-cover object-center"
                  src={foodBankLogo}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-orange-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-quicksand text-orange-500 mb-1">
                    <Link href={"https://www.foodbanking.org/"} target="_blank">
                      LEARN MORE
                    </Link>
                  </h2>
                  <h2 class="title-font text-lg font-quicksandBold text-gray-900 mb-3">
                    The Global Foodbanking Network
                  </h2>
                  <p class="leading-relaxed font-quicksand">
                    Hunger Relief Now. Powering Communities. Advancing Food
                    Banks. Helping connect people to safe food.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  alt="gallery"
                  class="absolute inset-0 w-full h-full max-h-64 object-cover object-center"
                  src={farmlinkLogo}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-orange-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-quicksand text-orange-500 mb-1">
                    <Link
                      href={"https://www.farmlinkproject.org/"}
                      target="_blank"
                    >
                      LEARN MORE
                    </Link>
                  </h2>
                  <h2 class="title-font text-lg font-quicksandBold text-gray-900 mb-3">
                    The Farmlink Project
                  </h2>
                  <p class="leading-relaxed font-quicksand">
                    Their mission is to make the worlds abundance of produce
                    accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class={styles.rowContainer}>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  alt="gallery"
                  class="absolute inset-0 w-full h-full max-h-64 object-cover object-center"
                  src={feedingAmericaLogo}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-orange-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-quicksand text-orange-500 mb-1">
                    <Link
                      href={"https://www.feedingamerica.org/"}
                      target="_blank"
                    >
                      LEARN MORE
                    </Link>
                  </h2>
                  <h2 class="title-font text-lg font-quicksandBold text-gray-900 mb-3">
                    Feeding America
                  </h2>
                  <p class="leading-relaxed font-quicksand">
                    Feeding America is the largest charity working to end hunger
                    in the United States.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  alt="gallery"
                  class="absolute inset-0 w-full h-full max-h-64 object-cover object-center"
                  src={fwraLogo}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-orange-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-quicksand text-orange-500 mb-1">
                    <Link
                      href={"https://www.foodwastealliance.org/"}
                      target="_blank"
                    >
                      LEARN MORE
                    </Link>
                  </h2>
                  <h2 class="title-font text-lg font-quicksandBold text-gray-900 mb-3">
                    Food Waste Reduction Alliance
                  </h2>
                  <p class="leading-relaxed font-quicksand">
                    FWRA’s objectives are to reduce our environmental footprint
                    while helping those suffering from hunger.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  alt="gallery"
                  class="absolute inset-0 w-full h-full max-h-64 object-cover object-center"
                  src={jamesBeardLogo}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-orange-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-quicksand text-orange-500 mb-1">
                    <Link href={"https://www.jamesbeard.org/"} target="_blank">
                      LEARN MORE
                    </Link>
                  </h2>
                  <h2 class="title-font text-lg font-quicksandBold text-gray-900 mb-3">
                    James Beard Foundation
                  </h2>
                  <p class="leading-relaxed font-quicksand">
                    A nonprofit organization whose mission is to support the
                    people behind America’s food culture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full aspect-video mb-20 bg-slate-50/50">
          <h2 className="py-1 text-md md:text-lg font-quicksandBold text-slate-600">
            Food Waste: The Hidden Cost of the Food We Throw Out{" "}
          </h2>
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
        </div>
        <div className="w-full aspect-video mb-20 bg-slate-50/50">
          <h2 className="py-1 text-md md:text-lg font-quicksandBold text-slate-600">
            Eating Trash: The Chefs Turning Food Waste Into Trendy Eats
          </h2>
          <iframe
            className="rounded-md shadow-lg mx-auto max-w-xs md:max-w-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4xS-grlssPw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full aspect-video mb-20 bg-slate-50/50">
          <h2 className="py-1 text-md md:text-lg font-quicksandBold text-slate-600">
            Food Waste: Last Week Tonight with John Oliver
          </h2>
          <iframe
            className="rounded-md shadow-lg mx-auto max-w-xs md:max-w-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/i8xwLWb0lLY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full aspect-video mb-20 bg-slate-50/50 my-8">
          <h2 className="py-1 text-md md:text-lg font-quicksandBold text-slate-600">
            Tristram Stuart: The global food waste scandal
          </h2>
          <iframe
            className="rounded-md shadow-lg mx-auto max-w-xs md:max-w-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cWC_zDdF74s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full aspect-video mb-20 bg-slate-50/50 my-8">
          <h2 className="py-1 text-md md:text-lg font-quicksandBold text-slate-600">
            Food waste is the world&apos;s dumbest problem
          </h2>
          <iframe
            className="rounded-md shadow-lg mx-auto max-w-xs md:max-w-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6RlxySFrkIM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full aspect-video mb-20 bg-slate-50/50 my-8">
          <h2 className="py-1 text-md md:text-lg font-quicksandBold text-slate-600">
            South Korea&apos;s push to cut back on Food Waste
          </h2>
          <iframe
            className="rounded-md shadow-lg mx-auto max-w-xs md:max-w-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VgUYTgwPKn8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}
