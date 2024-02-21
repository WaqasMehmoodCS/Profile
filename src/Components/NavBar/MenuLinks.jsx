import { BsProjector } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { AiTwotoneHome } from "react-icons/ai";
import { MdOutlineInfo } from "react-icons/md";
import { FaAddressBook, FaRegAddressCard } from "react-icons/fa";
import Link from "next/link";
import { useContext } from "react";
import { MenuContext } from "@/Context/MenuContextWrapper";
import { usePathname } from "next/navigation";


const MenuLinks = () => {
    const path = usePathname()
    const { open, setOpen } = useContext(MenuContext)
    const links = [
        { id: 1, name: 'Home', icon: <AiTwotoneHome size={25} />, address: '/' },
        { id: 2, name: 'About', icon: <MdOutlineInfo size={25} />, address: '/about' },
        { id: 3, name: 'Services', icon: <GrUserWorker size={25} />, address: '/services' },
        { id: 4, name: 'Portfolio', icon: <BsProjector size={25} />, address: '/portfolio' },
        { id: 5, name: 'Resume', icon: <FaRegAddressCard size={25} />, address: '/resume' },
        { id: 6, name: 'Contact', icon: <FaAddressBook size={25} />, address: '/contact' },
    ]
    return (
        <div className="flex flex-col gap-6 lg:gap-3 w-full">
            {links && links.map((link) => {
                return (
                    <Link key={link.id} href={link.address} onClick={() => { setOpen(!open) }}>
                        <div className={`p-1 pl-2 sm:p-3 rounded-lg ring-1 flex gap-5 hover:bg-other hover:cursor-pointer hover:font-semibold hover:tracking-wider duration-500 items-center ${path === link.address ? 'bg-other' : ''}`}>
                            <div>{link.icon}</div>
                            <div>{link.name}</div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default MenuLinks