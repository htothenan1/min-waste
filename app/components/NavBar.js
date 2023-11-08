"use client"

import Image from "next/image"
import logo from "../../public/smile_logo.png"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { HamburgerIcon } from "@/data/icons"
import styles from "./styles/navBar.module.css"

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname()

  return (
    <Link href={href} className={`${className} ${styles.customLink}`}>
      {title}
      <span
        className={`${styles.mobileCustomLinkLine} ${
          pathname !== href && styles.hidden
        }`}
      ></span>
    </Link>
  )
}

const NavBar = ({ user }) => {
  const [navOpen, setNavOpen] = useState(false)
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)

  return (
    <nav className={styles.navContainer}>
      <button
        className={styles.hamburgerButton}
        onClick={() => setNavOpen(!navOpen)}
      >
        <HamburgerIcon className={styles.hamburgerIcon} aria-hidden="true" />
      </button>
      {navOpen ? (
        <div className={styles.mobileCustomLink}>
          <Image width={80} height={80} src={logo} alt="MinWaste" />
          <CustomLink
            href={"/kitchen"}
            title={"Kitchen"}
            className={styles.mobileCustomLinkText}
          />
          <CustomLink
            href={"/recipes"}
            title={"Recipes"}
            className={styles.mobileCustomLinkText}
          />
          <CustomLink
            href={"/account"}
            title={"Account"}
            className={styles.mobileCustomLinkText}
          />
          <CustomLink
            href={"/contact"}
            title={"Contact Us"}
            className={styles.mobileCustomLinkText}
          />
        </div>
      ) : (
        <div className={styles.webNavContainer}>
          <Image
            width={80}
            height={80}
            className={styles.webNavLogo}
            src={logo}
            alt="MinWaste"
          />
          <CustomLink
            href={"/kitchen"}
            title={"Kitchen"}
            className={styles.webNavLink}
          />
          <CustomLink
            href={"/recipes"}
            title={"Recipes"}
            className={styles.webNavLink}
          />
          <CustomLink
            href={"/account"}
            title={"Account"}
            className={styles.webNavLink}
          />
          <CustomLink
            href={"/contact"}
            title={"Contact Us"}
            className={styles.webNavLink}
          />
        </div>
      )}
      <div>
        <button
          onClick={() => setAccountMenuOpen(!accountMenuOpen)}
          className={styles.userName}
        >
          {user}
        </button>
        {accountMenuOpen && (
          <div className={styles.signOutContainer}>
            <button
              className={styles.signOutButton}
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
