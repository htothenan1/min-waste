import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Quicksand } from "next/font/google"
import CustomToastContainer from "./components/CustomToastContainer"
import Provider from "./context/AuthContext"
import "react-toastify/dist/ReactToastify.css"
import "react-calendar/dist/Calendar.css"

export const metadata = {
  title: "MinWaste App",
  description: "A website to help reduce your food waste",
  verification: {
    google:
      "google-site-verification=kmR4sAUO7i4PlQcI2NSS3LRAV9GCtmUDalVjRadlDK4",
  },
}

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
  weight: "400",
})

const quicksandBold = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksandBold",
  weight: "700",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class={`${quicksand.variable} ${quicksandBold.variable}`}>
        <Provider>
          <CustomToastContainer />
          {children}
          <Analytics />
        </Provider>
      </body>
    </html>
  )
}
