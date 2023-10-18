"use client"

import Image from "next/image"
import logo from "../../public/smile_logo.png"
import { Fragment } from "react"
import { usePathname } from "next/navigation"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"
import { signOut } from "next-auth/react"
import Link from "next/link"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={` h-[2px] inline-block bg-orange-600/70 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
        ${pathname === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = ({ user }) => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-8">
            <div className="relative flex justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600/70">
                  <span className="sr-only font-quicksand">Open main menu</span>
                  {open ? (
                    <Cross1Icon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HamburgerMenuIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center py-2">
                  <Image
                    className="block h-20 w-auto lg:hidden"
                    src={logo}
                    alt="MinWaste"
                  />
                  <Image
                    className="hidden h-20 w-auto lg:block"
                    src={logo}
                    alt="MinWaste"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <CustomLink
                    href={"/kitchen"}
                    title={"Kitchen"}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-600 font-quicksandBold"
                  />
                  <CustomLink
                    href={"/recipes"}
                    title={"Recipes"}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-600 font-quicksandBold"
                  />
                  <CustomLink
                    href={"/resources"}
                    title={"Resources"}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-600 font-quicksandBold"
                  />
                  <CustomLink
                    href={"/contact"}
                    title={"Contact Us"}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-600 font-quicksandBold"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-600/70 focus:ring-offset-2">
                      <span className="sr-only font-quicksand">
                        Open user menu
                      </span>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-green-300">
                        <span className="text-lg font-medium leading-none text-white font-quicksandBold">
                          {user[0].toUpperCase()}
                        </span>
                      </span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href={"/account"}
                            // onClick={() =>
                            //   signOut({
                            //     callbackUrl: "/",
                            //   })
                            // }
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 font-quicksand"
                            )}
                          >
                            Account
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() =>
                              signOut({
                                callbackUrl: "/",
                              })
                            }
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 font-quicksand"
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              <Disclosure.Button
                as="a"
                href="kitchen"
                className="block border-l-4 border-orange-600 py-2 pl-3 pr-4 text-base font-quicksandBold text-orange-600/70"
              >
                Kitchen
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="recipes"
                className="block border-l-4 border-orange-600 py-2 pl-3 pr-4 text-base font-quicksandBold text-orange-600/70"
              >
                Recipes
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                href="resources"
                className="block border-l-4 border-orange-600 py-2 pl-3 pr-4 text-base font-quicksandBold text-orange-600/70"
              >
                Resources
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="contact"
                className="block border-l-4 border-orange-600 py-2 pl-3 pr-4 text-base font-quicksandBold text-orange-600/70"
              >
                Contact Us
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar
