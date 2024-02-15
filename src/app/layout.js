import { Inter } from "next/font/google";
import "./globals.css";


import { Suspense } from "react";
import MenuContextWrapper from "@/Context/MenuContextWrapper";
import NavBar from "@/Components/NavBar/page";


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
            <div className="bg-[url('/pic.png')] bg-cover bg-center h-screen">
             
             
              <div className="bg-secondary/60 sm:flex justify-between h-screen">
                <div className="sm:flex-1">
                  <NavBar />
                </div>
                <div className="sm:flex-[3]">{children}</div>
              </div>


            </div>
          </MenuContextWrapper>
        </Suspense>
      </body>
    </html>
  );
}
