import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar/page";

import { Suspense } from "react";
import MenuContextWrapper from "./Context/MenuContextWrapper";

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
            <div>
              <div>
                <NavBar />
              </div>
              <div>{children}</div>
            </div>
          </MenuContextWrapper>
        </Suspense>
      </body>
    </html>
  );
}
