"use client"

import Image from "next/image"
import logo from "../../public/smile_logo.png"
import { Disclosure } from "@headlessui/react"
import Link from "next/link"

const GuestNavBar = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      <>
        <div className="mx-8 mr-10">
          <div className="relative flex justify-between">
            <div className="flex flex-1 items-center justify-start">
              <div className="flex flex-shrink-0 items-center py-2">
                <Image
                  className="block h-20 w-auto"
                  src={logo}
                  alt="Your Company"
                />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <h1 className="text-slate-600 font-quicksand">Login</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>

              <div>
                <Link
                  className="flex rounded-full bg-white focus:outline-none active:ring-2 active:ring-orange-500/70 active:ring-offset-2"
                  href={"/login"}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-green-300">
                    <span className="text-md font-quicksandBold leading-none text-white">
                      Go!
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  )
}

export default GuestNavBar
