'use client'
import { useContext } from "react"
import Picture from "./Picture"
import { MenuContext } from "@/Context/MenuContextWrapper"
import SocialMediaIcons from "./SocialMediaIcons"
import MenuLinks from "./MenuLinks"
import Name from "./Name"

const Navigation = () => {
    const { open } = useContext(MenuContext)
    return (
        <div className={`bg-black/90 h-screen absolute top-0 left-0 w-2/3 md:w-2/6 ease-in-out duration-1000 text-primary ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col z-50 gap-5`}>
            <Picture />
            <div className="flex flex-col gap-4">
                <Name />
                <SocialMediaIcons />
            </div>
            <MenuLinks />
        </div>
    )
}

export default Navigation