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
        <div className={`ease-in-out ${open ? 'translate-x-0' : '-translate-x-[1500px]'} bg-secondary/90 max-w-80 2xl:max-w-full text-primary p-4 rounded-r-lg duration-500 sm:translate-x-0 h-screen`}>
            <div>
                <Picture />
            </div>
            <div className="mt-44 sm:mt-40">
                <Name />
            </div>
            <div className="mt-4 sm:mt-2">
                <SocialMediaIcons />
            </div>
            <div className="flex justify-center px-6 sm:px-0">
                <div className="mt-8 w-full sm:mt-2">
                    <MenuLinks />
                </div>
            </div>
        </div>
    )
}

export default Navigation