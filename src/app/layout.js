import "./globals.css";
import { Suspense } from "react";
import NavBar from "@/Components/NavBar/page";
import MenuContextWrapper from "@/Context/MenuContextWrapper";
import LoadingContextWrapper from "@/Context/LoadingContextWrapper";
import Loading from "@/Components/Loading/page";

export const metadata = {
  title: "Portfolio",
  description: "Created by Waqas Mehmood, Full Stack Developer",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="h-screen overflow-hidden bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          <LoadingContextWrapper>
            <MenuContextWrapper>
              <div className="h-full flex flex-col md:flex-row relative">
                <div className="md:flex-1">
                  <NavBar />
                </div>
                <div className="flex-1 md:flex-[2] h-full overflow-auto md:scroll-hide md:scroll-btn">
                  {children}
                </div>
              </div>
            </MenuContextWrapper>
          </LoadingContextWrapper>
        </Suspense>
      </body>
    </html>
  );
}
