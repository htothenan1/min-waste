"use client"

import Image from "next/image"
import logo from "../../public/smile_logo.png"
import Link from "next/link"
import styles from "./styles/guestNavBar.module.css"

const GuestNavBar = () => {
  return (
    <nav class={styles.navContainer}>
      <Image class={styles.logo} src={logo} alt="Your Company" />
      <h2 class={styles.logIn}>
        <Link href={"/login"}>Log In</Link>
      </h2>
    </nav>
  )
}

export default GuestNavBar
