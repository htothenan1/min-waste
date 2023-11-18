"use client"

import GuestNavBar from "./components/GuestNavBar"
import Footer from "./components/Footer"
import Lottie from "lottie-react"
import recipes from "../public/recipes.json"
import grocerylist from "../public/grocerylist.json"
import ideas from "../public/ideas.json"
import styles from "./page.module.css"
import Link from "next/link"

export default async function Home() {
  return (
    <>
      <GuestNavBar />
      <div class={styles.container}>
        <div class={styles.headerContainer}>
          <h2 class={styles.headerText}>Do you want to stop wasting food?</h2>
          <h2 class={styles.headerText}>
            Try <span class={styles.orangeText}>MinWaste!</span>
          </h2>

          <p class={styles.subheaderText}>
            Our website will help you throw away less food.
          </p>
          <p class={styles.subheaderText}>
            Start saving money (and the planet) today!
          </p>
          <Link href={"/login"} class={styles.ctaButton}>
            See It In Action!
          </Link>
        </div>
        <div class={styles.contentContainer}>
          <div class={styles.sectionContainer}>
            <div class={styles.lottieContainer}>
              <Lottie animationData={grocerylist} />
            </div>
            <div class={styles.sectionTextContainer}>
              <h2 class={styles.sectionTitle}>Keep track of your items</h2>
              <p class={styles.sectionContentText}>
                Our innovative logging and tracking system will help you regain
                control of your kitchen.
              </p>

              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class={styles.svg}
                viewBox="0 0 24 24"
              ></svg>
            </div>
          </div>
          <div class={styles.sectionContainer}>
            <div class={styles.lottieContainer}>
              <Lottie animationData={recipes} />
            </div>
            <div class={styles.sectionTextContainer}>
              <h2 class={styles.sectionTitle}>Customized recipes on demand</h2>
              <p class={styles.sectionContentText}>
                Get instant access to over 5,000 recipes, based on what you have
                in your kitchen.
              </p>

              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class={styles.svg}
                viewBox="0 0 24 24"
              ></svg>
            </div>
          </div>
          <div class={styles.sectionContainer}>
            <div class={styles.lottieContainer}>
              <Lottie animationData={ideas} />
            </div>
            <div class={styles.sectionTextContainer}>
              <h2 class={styles.sectionTitle}>Learn new skills</h2>
              <p class={styles.sectionContentText}>
                Our curated content will educate you on food waste, and give you
                the tools to improve your behavior.
              </p>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class={styles.svg}
                viewBox="0 0 24 24"
              ></svg>
            </div>
          </div>
          <div class={styles.signupButton}>
            <Link href={"/register"} class={styles.ctaButton}>
              Sign Up For Free!
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
