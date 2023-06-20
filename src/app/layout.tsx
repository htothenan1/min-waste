import "./globals.css";
import { Inter } from "next/font/google";
import CustomToastContainer from "./common/CustomToastContainer";
import NavBar from "./common/NavBar";
import "react-toastify/dist/ReactToastify.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Waste-Not",
  description: "Created by H",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100`}>
        <NavBar />
        <CustomToastContainer />
        {children}
      </body>
    </html>
  );
}
