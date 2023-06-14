import "./globals.css";
import { Inter } from "next/font/google";
import CustomToastContainer from "../app/components/CustomToastContainer";
import "react-toastify/dist/ReactToastify.css";

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
      <body className={inter.className}>
        <CustomToastContainer />
        {children}
      </body>
    </html>
  );
}
