import { MenuContext } from "@/Context/MenuContextWrapper"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

const Picture = () => {
    const { open, setOpen } = useContext(MenuContext)
    return (
        <div className="pt-4">
            <Link href={'/'} onClick={() => { setOpen(!open) }} className="flex justify-center" >
                <div className="w-36 h-36 absolute rounded-full overflow-hidden object-cover ring-8">
                    <Image src='/pic.png' alt="Picture, Developer, React Developer picture" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
            </Link>
        </div>
    )
}

export default Picture