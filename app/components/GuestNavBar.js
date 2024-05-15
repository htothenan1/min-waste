"use client"

import Image from "next/image"
import logo from "../../public/smile_logo.png"
import Link from "next/link"
import styles from "./styles/guestNavBar.module.css"

const GuestNavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <Image className={styles.logo} src={logo} alt="Your Company" />

      {/* <Link className={styles.logIn} href={"/login"}>
        Log In
      </Link> */}
    </nav>
  )
}

export default GuestNavBar
