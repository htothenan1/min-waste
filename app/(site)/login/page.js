"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import styles from "../styles/login.module.css"
import smileLogo from "../../../public/smile_logo.png"
import Image from "next/image"

export default function Login() {
  const router = useRouter()
  const [data, setData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)

  const loginUser = async (e) => {
    e.preventDefault()
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      if (callback?.error) {
        toast.error(`${callback.error}`, {
          position: "top-center",
          autoClose: 1000,
        })
        throw new Error(callback.error)
      }

      if (callback?.ok && !callback?.error) {
        router.push("/kitchen")
      }
    })
  }

  return (
    <>
      <div class={styles.pageContainer}>
        <div class={styles.welcomeLogoContainer}>
          <Image class={styles.logo} src={smileLogo} alt="MinWaste Logo" />
          <h2 class={styles.headerText}>Welcome Back!</h2>
        </div>

        <form class={styles.formContainer} onSubmit={loginUser}>
          <label htmlFor="email" class={styles.formLabel}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={data.email}
            onChange={(e) =>
              setData({ ...data, email: e.target.value.toLowerCase() })
            }
            required
            class={styles.input}
          />
          <div>
            <div class={styles.passwordContainer}>
              <label htmlFor="password" class={styles.formLabel}>
                Password
              </label>
              <div>
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
              </div>
            </div>
            <input
              id="password"
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              autoComplete="current-password"
              required
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              class={styles.input}
            />
          </div>
          <button type="submit" class={styles.signInButton}>
            Sign in
          </button>
          <h2 class={styles.bottomText}>
            Don&apos;t have an account yet?{" "}
            <a class={styles.hyperLink} href="/register">
              Sign up here!
            </a>
          </h2>
        </form>
      </div>
    </>
  )
}
