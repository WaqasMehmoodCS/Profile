import { Inter } from "next/font/google";
import "./globals.css";

import { Suspense } from "react";

import NavBar from "@/Components/NavBar/page";
import MenuContextWrapper from "@/Context/MenuContextWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Created by Waqas Mehmood, Full Stack Developer",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <MenuContextWrapper>
            <div className="bg-[url('/pic.png')] bg-cover bg-center overflow-hidden ">
              <div className="bg-secondary/60 sm:flex sm:justify-between ">
                <div className="border border-red-600 sm:flex-1 2xl:flex-1 static">
                  <NavBar />
                </div>
                <div className="border border-green-600 flex-1 h-screen sm:flex-[4] 2xl:flex-[3]">
                  {children}
                </div>
              </div>
            </div>
          </MenuContextWrapper>
        </Suspense>
      </body>
    </html>
  );
}
