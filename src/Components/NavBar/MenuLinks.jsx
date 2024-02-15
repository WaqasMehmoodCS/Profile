import { BsProjector } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { AiTwotoneHome } from "react-icons/ai";
import { MdOutlineInfo } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";

const MenuLinks = () => {
    const links = [
        { id: 1, name: 'Home', icon: <AiTwotoneHome size={18} />, address: '/' },
        { id: 2, name: 'About', icon: <MdOutlineInfo size={18} />, address: '/' },
        { id: 3, name: 'Services', icon: <GrUserWorker size={18} />, address: '/' },
        { id: 4, name: 'Portfolio', icon: <BsProjector size={18} />, address: '/' },
        { id: 5, name: 'Resume', icon: <FaRegAddressCard size={18} />, address: '/' },
    ]

    return (
        <div className="flex flex-col gap-2 p-1 sm:p-3 sm:gap-8">
            {links && links.map((link) => {
                return (
                    <div key={link.id} className="p-1 pl-2 sm:p-3  rounded-lg ring-1 flex gap-8 hover:bg-other duration-500">
                        <div>{link.icon}</div>
                        <div>{link.name}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default MenuLinks