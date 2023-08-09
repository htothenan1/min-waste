import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Inter, Quicksand } from "next/font/google"
import CustomToastContainer from "./common/CustomToastContainer"
import Provider from "./context/AuthContext"
import "react-toastify/dist/ReactToastify.css"
import "react-date-picker/dist/DatePicker.css"
import "react-calendar/dist/Calendar.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MinWaste App",
  description: "An app to help reduce your food waste",
  // alternates: {
  //   canonical: "https://wastenot-app.com",
  // },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full bg-slate-50/50" lang="en">
      <body
        className={`${inter.className} ${quicksand.variable} ${quicksandBold.variable} bg-slate-50/50 h-full`}
      >
        <Provider>
          <CustomToastContainer />
          {children}
          <Analytics />
        </Provider>
      </body>
    </html>
  )
}
