"use client"

import Image from "next/image"
import logo from "../../public/smile_logo.png"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import styles from "./styles/navBar.module.css"

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname()

  return (
    <Link href={href} class={`${className} ${styles.customLink}`}>
      {title}
      <span
        class={`${styles.mobileCustomLinkLine} ${
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
    <nav class={styles.navContainer}>
      <button
        class={styles.hamburgerButton}
        onClick={() => setNavOpen(!navOpen)}
      >
        <HamburgerMenuIcon class={styles.hamburgerIcon} aria-hidden="true" />
      </button>
      {navOpen ? (
        <div class={styles.mobileCustomLink}>
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
        <div class={styles.webNavContainer}>
          <Image
            width={80}
            height={80}
            class={styles.webNavLogo}
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
          class={styles.userName}
        >
          {user}
        </button>
        {accountMenuOpen && (
          <div class={styles.signOutContainer}>
            {/* <Link class={styles.accountText} href="/account">
              Account
            </Link> */}
            <button
              class={styles.signOutButton}
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
