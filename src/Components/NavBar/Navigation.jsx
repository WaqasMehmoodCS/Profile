'use client'

import { useContext } from "react"
import Picture from "./Picture"
import SocialMediaIcons from "./SocialMediaIcons"
import { MenuContext } from "@/Context/MenuContextWrapper"


const Navigation = () => {
    const { open } = useContext(MenuContext)
    return (
        <div className={`ease-in-out ${open ? 'translate-x-0' : '-translate-x-[1500px]'} bg-secondary/90 max-w-80 text-primary p-4 rounded-r-lg duration-500 sm:translate-x-0 h-screen`}>
            <div>
                <Picture />
            </div>
            <div className="mt-44">
                {/* <SocialMediaIcons /> */}
            </div>


        </div>
    )
}

export default Navigation