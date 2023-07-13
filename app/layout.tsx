import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import CustomToastContainer from "./common/CustomToastContainer";
import Provider from "./context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Waste-Not",
  description: "A web app to help users reduce their food waste",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-slate-50/50" lang="en">
      <body className={`${inter.className} bg-slate-50/50 h-full`}>
        <Provider>
          <CustomToastContainer />
          {children}
          <Analytics />
        </Provider>
      </body>
    </html>
  );
}
