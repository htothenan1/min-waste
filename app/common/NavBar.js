"use client"

import Image from "next/image"
import logo from "../../public/smile_logo.png"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"

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
  const [navOpen, setNavOpen] = useState(false)
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)

  return (
    <div className="flex justify-between items-center p-5 bg-white">
      <button className="sm:hidden p-2" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? (
          <Cross1Icon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <HamburgerMenuIcon className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {navOpen ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-white">
          <Image className="mb-5 h-20 w-auto" src={logo} alt="MinWaste" />
          <CustomLink
            href={"/kitchen"}
            title={"Kitchen"}
            className="mb-4 text-xl text-slate-600 font-quicksandBold"
          />
          <CustomLink
            href={"/recipes"}
            title={"Recipes"}
            className="mb-4 text-xl text-slate-600 font-quicksandBold"
          />
          <CustomLink
            href={"/contact"}
            title={"Contact Us"}
            className="mb-4 text-xl text-slate-600 font-quicksandBold"
          />
        </div>
      ) : (
        <div className="relative sm:flex hidden space-x-8">
          <Image
            className="hidden sm:block mr-3 h-20 w-auto"
            src={logo}
            alt="MinWaste"
          />
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
            href={"/contact"}
            title={"Contact Us"}
            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-600 font-quicksandBold"
          />
        </div>
      )}

      <div className="relative">
        <button
          onClick={() => setAccountMenuOpen(!accountMenuOpen)}
          className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-600/70 focus:ring-offset-2"
        >
          <span className="sr-only font-quicksand">Open user menu</span>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-green-300">
            <span className="text-lg font-medium leading-none text-white font-quicksandBold">
              {user[0].toUpperCase()}
            </span>
          </span>
        </button>
        {accountMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "px",
              right: "20px",
              border: "1px solid #ccc",
              padding: "10px",
              background: "white",
              borderRadius: "10px",
            }}
          >
            <a href="account">Account</a>
            <div style={{ marginTop: "10px" }}>
              <button onClick={() => signOut({ callbackUrl: "/" })}>
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
