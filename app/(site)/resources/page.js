import { getUser } from "../../lib/items";
import { getServerSession } from "next-auth";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import refedLogo from "../../../public/refed-logo.jpeg";
import foodBankLogo from "../../../public/food-bank.png";
import farmlinkLogo from "../../../public/farmlink-project.png";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import Image from "next/image";
import Link from "next/link";

export default async function Resources() {
  const session = await getServerSession(authOptions);
  const { user } = await getUser(session.user.email);

  return (
    <>
      <NavBar user={user?.name} />
      <div className="flex flex-col text-center justify-center items-center mx-auto w-3/4 py-12 bg-slate-50/50">
        <h1 className=" text-orange-600/70 font-bold text-4xl">Resources</h1>
        <p className="my-2 text-slate-600 text-md md:text-lg text-center w-3/4 md:w-1/2">
          These are the organizations and projects that helped define the goals
          and values of this app. They deserve a closer look!
        </p>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  alt="gallery"
                  class="absolute inset-0 w-full h-full max-h-64 object-cover object-center"
                  src={refedLogo}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-orange-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
                    <Link href={"https://refed.org/"} target="_blank">
                      LEARN MORE
                    </Link>
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    ReFED
                  </h1>
                  <p class="leading-relaxed">
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
                  <h2 class="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
                    <Link href={"https://www.foodbanking.org/"} target="_blank">
                      LEARN MORE
                    </Link>
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The Global Foodbanking Network
                  </h1>
                  <p class="leading-relaxed">
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
                  <h2 class="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
                    <Link
                      href={"https://www.farmlinkproject.org/"}
                      target="_blank"
                    >
                      LEARN MORE
                    </Link>
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The Farmlink Project
                  </h1>
                  <p class="leading-relaxed">
                    Their mission is to make the worlds abundance of produce
                    accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
      <Footer />
    </>
  );
}