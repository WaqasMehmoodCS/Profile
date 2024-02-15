'use client'
import { MenuContext } from '@/app/Context/MenuContextWrapper'
import { useContext } from 'react'
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from "react-icons/io";

const MenuIcon = () => {
    const { open, setOpen } = useContext(MenuContext)
        return (
        <div className='p-4'>
            <div onClick={() => setOpen(!open)} className={`${open ? 'hidden' : 'visible'} flex items-center justify-center bg-other text-white p-2 ring-1 hover:cursor-pointer hover:bg-other/80 duration-1000 rounded-full`}>
                <div className={` ${open ? 'opacity-0' : 'opacity-1'} duration-1000`}>
                    <FiMenu size={20} />
                </div>
            </div>
            <div onClick={() => setOpen(!open)} className={`${open ? 'visible' : 'hidden'} flex items-center justify-center bg-other text-white p-2 ring-1 hover:cursor-pointer hover:bg-other/80 duration-1000 rounded-full`}>
                <div >
                    <IoMdClose size={20} />
                </div>
            </div>
        </div>
    )
}

export default MenuIcon