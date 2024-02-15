
import { socialIcons } from "@/lib/SocialMediaDetail"
import Link from "next/link"
const SocialMediaIcons = () => {
    return (
        <div className="flex justify-around p-1 sm:gap-2">
            {socialIcons && socialIcons.map((icon) => {
                return (
                    <Link key={icon.id} href={icon.address}>
                        <div className="ring-1 p-2 rounded-full hover:cursor-pointer  hover:bg-slate-600 hover:text-secondary duration-500">
                            <div>{icon.icon}</div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default SocialMediaIcons