"use client"

import Image from "next/image"
import logo from "../../public/smile_logo.png"
import Link from "next/link"

const GuestNavBar = () => {
  return (
    <nav className="bg-white">
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
              <div>
                <Link
                  className="flex rounded-full bg-white focus:outline-none active:ring-2 active:ring-orange-500/70 active:ring-offset-2"
                  href={"/login"}
                >
                  <span className="inline-flex p-4 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-green-300">
                    <span className="text-md font-quicksandBold leading-none text-white">
                      Log In
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </nav>
  )
}

export default GuestNavBar
