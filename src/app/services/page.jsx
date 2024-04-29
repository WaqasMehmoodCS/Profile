import Web from "./Web"
import Mobile from "./Mobile"

export const metadata = {
    title: "Services",
    description: "webiste, linkedIn, gmail, Familiar Technologies, about, qualification, skills, experience, message, contact, service, projects",
};


const ServicesPage = () => {
    return (
        <div className="h-full flex flex-col gap-5 p-4 pb-16 md:pb-4 overflow-auto scroll-hide scroll-btn">
            <Web />
            <Mobile />
        </div>
    )
}

export default ServicesPage