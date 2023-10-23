"use client"

import { useState } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import smileLogo from "../../../public/smile_logo.png"
import Image from "next/image"
import styles from "./register.module.css"

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const registerUser = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success("User has been successfully registered!", {
          position: "top-center",
          autoClose: 1000,
        })
        router.push("/login")
      } else {
        throw new Error("User registration failed")
      }
    } catch (error) {
      toast.error("User already exists. Proceed to login.", {
        position: "top-center",
        autoClose: 1000,
      })
    }
  }

  return (
    <>
      <div class={styles.pageContainer}>
        <Image class={styles.logo} src={smileLogo} alt="Your Company" />
        <h2 class={styles.headerText}>Sign up for an account</h2>

        <form class={styles.formContainer} onSubmit={registerUser}>
          <label htmlFor="name" class={styles.formLabel}>
            First Name
          </label>
          <input
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            id="name"
            name="name"
            type="text"
            required
            class={styles.input}
          />
          <div>
            <label class={styles.formLabel} htmlFor="email">
              Email address
            </label>
            <input
              value={data.email}
              onChange={(e) =>
                setData({ ...data, email: e.target.value.toLowerCase() })
              }
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              class={styles.input}
            />
          </div>

          <div class={styles.passwordContainer}>
            <label htmlFor="password" class={styles.formLabel}>
              Password
            </label>
            <span>
              {showPassword ? (
                <div
                  class={styles.showPassword}
                  onClick={() => setShowPassword(false)}
                >
                  hide password
                </div>
              ) : (
                <div
                  class={styles.showPassword}
                  onClick={() => setShowPassword(true)}
                >
                  show password
                </div>
              )}
            </span>
          </div>
          <input
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            id="password"
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            autoComplete="current-password"
            required
            class={styles.input}
          />

          <button type="submit" class={styles.signInButton}>
            Register
          </button>
          <h2 class={styles.bottomText}>
            Already have an account?{" "}
            <a href="/login" class={styles.hyperLink}>
              Sign in here!
            </a>
          </h2>
        </form>
      </div>
    </>
  )
}
