'use client'
import { MenuContext } from "@/app/Context/MenuContextWrapper"
import { useContext } from "react"


const Navigation = () => {
    const { open, setOpen } = useContext(MenuContext)
    return (
        <div className={`ease-in-out ${open ? 'translate-x-0' : '-translate-x-[1500px]'} bg-secondary/90 max-w-80 text-primary p-4 rounded-r-lg h-screen duration-500`}>
            <div>
                AA
            </div>
        </div>
    )
}

export default Navigation