import Web from "./Web"
import Mobile from "./Mobile"


const ServicesPage = () => {
    return (
        <div className="p-4 sm:mt-8 lg:mt-10 h-full flex font-manrope">
            <div className="flex-1 flex flex-col gap-5">
                <Web />
                <Mobile />
            </div>
        </div>
    )
}

export default ServicesPage