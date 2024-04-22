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
        <div className={`z-50 bg-black/90 w-2/3 h-full md:w-2/6 absolute top-0 ease-in-out duration-1000 p-2 text-primary ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            <Picture />
            <Name />
            <SocialMediaIcons />
            <MenuLinks />
        </div>
    )
}

export default Navigation