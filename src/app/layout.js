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
      <body
        className={inter.className}
        style={{
          backgroundImage: 'url("/pic.png")',
          width: "100dvw",
          height: "100dvh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <MenuContextWrapper>
            <div className="bg-secondary/60 h-full">


              <div className="h-full sm:flex sm:justify-between overflow-auto">

                <div className="flex-1 sticky top-0 left-0 z-50">
                  <NavBar />
                </div>

                <div className="h-full flex-1 sm:flex-[2] md:flex-[3] z-50 ">
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
