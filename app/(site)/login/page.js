"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
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
          autoClose: 1250,
        })
        throw new Error(callback.error)
      }

      if (callback?.ok && !callback?.error) {
        // toast.success(`Logged in successfully!`, {
        //   position: "top-center",
        //   autoClose: 1250,
        // })
        router.push("/kitchen")
      }
    })
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-20 w-auto"
            src={smileLogo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-quicksandBold leading-9 tracking-tight text-slate-600">
            Welcome Back!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={loginUser}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-quicksandBold leading-6 text-slate-600"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-quicksandBold leading-6 text-slate-600"
                >
                  Password
                </label>
                <span>
                  {showPassword ? (
                    <div
                      className=" cursor-pointer text-xs font-quicksand text-slate-200 border bg-black/70 rounded-md px-2 py-1 active:bg-slate-600"
                      onClick={() => setShowPassword(false)}
                    >
                      hide password
                    </div>
                  ) : (
                    <div
                      className=" cursor-pointer text-xs text-slate-200 border bg-black/70 rounded-md px-2 py-1 active:bg-slate-600"
                      onClick={() => setShowPassword(true)}
                    >
                      show password
                    </div>
                  )}
                </span>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type={`${showPassword ? "text" : "password"}`}
                  autoComplete="current-password"
                  required
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-green-200 via-orange-400 to-red-400 px-3 py-1.5 text-sm font-quicksandBold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:ring-2 active:ring-orange-500/70 active:ring-offset-2"
              >
                Sign in
              </button>
            </div>
            <div className="text-sm">
              <h2 className=" font-quicksand">
                Don&apos;t have an account yet?{" "}
                <span>
                  <a
                    href="/register"
                    className="font-semibold text-green-500/70 hover:text-orange-600/70 active:text-orange-800"
                  >
                    Sign up here!
                  </a>
                </span>{" "}
              </h2>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
