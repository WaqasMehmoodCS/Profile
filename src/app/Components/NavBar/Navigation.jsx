'use client'
import { MenuContext } from "@/app/Context/MenuContextWrapper"
import { useContext } from "react"
import Picture from "./Picture"


const Navigation = () => {
    const { open } = useContext(MenuContext)
    return (
        <div className={`ease-in-out ${open ? 'translate-x-0' : '-translate-x-[1500px]'} bg-secondary/90 max-w-80 text-primary p-4 rounded-r-lg duration-500 sm:translate-x-0 h-screen`}>

            <Picture />


        </div>
    )
}

export default Navigation