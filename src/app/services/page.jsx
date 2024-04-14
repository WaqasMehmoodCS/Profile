import Web from "./Web"
import Mobile from "./Mobile"

export const metadata = {
    title: "Services",
    description: "webiste, linkedIn, gmail, Familiar Technologies, about, qualification, skills, experience, message, contact, service, projects",
};


const ServicesPage = () => {
    return (
        <div className="h-full flex flex-col gap-5 p-5 pb-20 md:pb-0 md:my-10">
            <Web />
            <Mobile />
        </div>
    )
}

export default ServicesPage