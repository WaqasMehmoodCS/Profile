import ImageArray from "./ImageArray"
import LinkComponent from "./LinkComponent"

export const metadata = {
    title: "Portfolio",
    description: "Familiar Technologies, about, qualification, skills, experience, message, contact, service, projects",
  };

const PortfolioPage = () => {
    const images = [
        { id: 1, path: '/1.png' },
        { id: 2, path: '/2.png' },
        { id: 3, path: '/3.png' },
    ];
    const name = 'Portfolio Application'
    return (
        <div className="p-4 mt-2 sm:mt-8 lg:mt-10 h-full font-manrope">
            <div className="border border-white bg-slate-500/70 rounded-lg text-primary w-full p-4 animate-scale-up-center">
                <div className="flex flex-col gap-6 p-4">
                    <ImageArray images={images} />
                    <LinkComponent link={'https://profile-waqas.vercel.app/'} name={name} />
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage