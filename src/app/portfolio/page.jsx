import ImageArray from "./ImageArray";
import LinkComponent from "./LinkComponent";

export const metadata = {
  title: "Portfolio",
  description:
    "Familiar Technologies, about, qualification, skills, experience, message, contact, service, projects",
};

const PortfolioPage = () => {
  const images = [
    { id: 1, path: "/1.webp" },
    { id: 2, path: "/2.webp" },
    { id: 3, path: "/3.webp" },
  ];
  const weatherImages = [
    { id: 1, path: "/4.webp" },
    { id: 2, path: "/5.webp" },
    { id: 3, path: "/6.webp" },
    { id: 4, path: "/7.webp" },
    { id: 5, path: "/8.webp" },
  ];
  const name = "Portfolio Application";
  const weatherName = "Weather Forecast Application";
  return (
    <div className="h-full px-2 pb-14 flex flex-col gap-3 md:gap-8 pt-3 md:pb-5 font-manrope md:pt-5 md:px-16 overflow-auto scroll-hide scroll-btn">
      <div className="bg-slate-500/70 rounded-lg text-primary w-full animate-scale-up-center">
        <div className="flex flex-col gap-6 p-4">
          <ImageArray images={weatherImages} />
          <LinkComponent
            link={"https://seasondemo.netlify.app/"}
            name={weatherName}
          />
        </div>
      </div>
      <div className="bg-slate-500/70 rounded-lg text-primary w-full animate-scale-up-center">
        <div className="flex flex-col gap-6 p-4">
          <ImageArray images={images} />
          <LinkComponent
            link={"https://profile-waqas.vercel.app/"}
            name={name}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
