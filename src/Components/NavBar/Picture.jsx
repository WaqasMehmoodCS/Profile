import { MenuContext } from "@/Context/MenuContextWrapper"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

const Picture = () => {
    const { open, setOpen } = useContext(MenuContext)
    return (
        <div className="mt-5 md:mt-3 2xl:mt-10">
            <Link href={'/'} onClick={() => { setOpen(!open) }} className="flex justify-center" >
                <div className="w-36 h-36 relative rounded-full overflow-hidden ring-8">
                    <Image className="absolute object-cover" src='/pic.png' alt="Picture, Developer, React Developer picture" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
            </Link>
        </div>
    )
}

export default Picture