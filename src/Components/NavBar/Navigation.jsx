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
        <div className={`z-50 p-2 ease-in-out ${open ? 'translate-x-0' : '-translate-x-[1500px]'} bg-secondary/90  text-primary rounded-r-lg duration-500 sm:translate-x-0 h-[100dvh]`}>
            <div>
                <Picture />
            </div>
            <div className="mt-40 sm:mt-40">
                <Name />
            </div>
            <div className="">
                <SocialMediaIcons />
            </div>
            <div className="flex justify-center px-6">
                <div className="mt-2 w-full">
                    <MenuLinks />
                </div>
            </div>
        </div>
    )
}

export default Navigation