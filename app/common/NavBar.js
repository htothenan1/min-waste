"use client";

import Image from "next/image";
import logo from "../../public/smile_logo.png";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = ({ user }) => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-8">
            <div className="relative flex justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center py-2">
                  <Image
                    className="block h-16 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <Image
                    className="hidden h-14 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a
                    href="dashboard"
                    className="inline-flex items-center border-b-2 border-orange-300 px-1 pt-1 text-sm font-medium text-slate-600"
                  >
                    Dashboard
                  </a>
                  <a
                    href="food_for_thought"
                    className="inline-flex items-center border-b-2 border-orange-300 px-1 pt-1 text-sm font-medium text-slate-600"
                  >
                    Food For Thought
                  </a>
                  <a
                    href="contact_us"
                    className="inline-flex items-center border-b-2 border-orange-300 px-1 pt-1 text-sm font-medium text-slate-600"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-green-300">
                        <span className="text-lg font-medium leading-none text-white">
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
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item> */}

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
                              "block px-4 py-2 text-sm text-gray-700"
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
                href="dashboard"
                className="block border-l-4 border-orange-300 py-2 pl-3 pr-4 text-base font-medium text-orange-300"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="food_for_thought"
                className="block border-l-4 border-orange-300 py-2 pl-3 pr-4 text-base font-medium text-orange-300"
              >
                Food For Thought
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="contact_us"
                className="block border-l-4 border-orange-300 py-2 pl-3 pr-4 text-base font-medium text-orange-300"
              >
                Contact Us
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
