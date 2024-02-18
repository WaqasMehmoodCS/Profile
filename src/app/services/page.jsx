import Web from "./Web"
import Mobile from "./Mobile"


const ServicesPage = () => {
    return (
        <div className="p-4 sm:mt-8 lg:mt-10 h-full flex items-center font-manrope">
            <div className="flex-1 flex flex-col justify-center items-center gap-3 py-2 h-full">
                <Web />
                <Mobile />
            </div>
        </div>
    )
}

export default ServicesPage