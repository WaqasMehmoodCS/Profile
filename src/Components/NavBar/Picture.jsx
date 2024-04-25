import { MenuContext } from "@/Context/MenuContextWrapper"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { IoMdKey } from "react-icons/io";

const Picture = () => {
    const { open, setOpen } = useContext(MenuContext)
    return (
        <div className="relative cursor-pointer mt-5" onClick={() => setOpen(!open)}>
            <Link href={'/admin'}>
                <div className="absolute top-0 right-0 p-2 text-blue-700">
                    <IoMdKey />
                </div>
            </Link>
            <Link href={'/'} onClick={() => { setOpen(!open) }} className="flex justify-center md:mt-3" >
                <div className="w-36 h-36 md:w-28 md:h-28 2xl:w-56 2xl:h-56 relative rounded-full overflow-hidden ring-8">
                    <Image className="absolute object-cover" src='/pic.png' alt="Picture, Developer, React Developer picture" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
            </Link>
        </div>
    )
}

export default Picture