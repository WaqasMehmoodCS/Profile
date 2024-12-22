import "./globals.css";
import NavBar from "@/Components/NavBar/page";
import MenuContextWrapper from "@/Context/MenuContextWrapper";
import LoadingContextWrapper from "@/Context/LoadingContextWrapper";
export const metadata = {
  title: "Portfolio",
  description: "Created by Waqas Mehmood, Full Stack Developer",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="h-screen bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/bg.webp')" }}
      >
        <LoadingContextWrapper>
          <MenuContextWrapper>
            <div className="bg-black/60 h-full flex flex-col md:flex-row relative">
              <div className="md:flex-1">
                <NavBar />
              </div>
              <div className="flex-1 md:flex-[2] h-full overflow-hidden">
                {children}
              </div>
            </div>
          </MenuContextWrapper>
        </LoadingContextWrapper>
      </body>
    </html>
  );
}
