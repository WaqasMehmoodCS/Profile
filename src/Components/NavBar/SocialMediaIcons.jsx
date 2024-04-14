
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Link from "next/link"
const SocialMediaIcons = () => {
    const socialIcons = [
        { id: 1, name: "github", icon: <FaGithub size={20} />, address: "https://github.com/WaqasMehmoodCS" },
        { id: 2, name: "linkedIn", icon: <FaLinkedin size={20} />, address: "https://www.linkedin.com/in/waqas-mehmood-472509131/" },
        { id: 3, name: "gmail", icon: <SiGmail size={20} />, address: "mailto:waqasmehmoodcs@gmail.com" },
        // { id: 4, name: "phone", icon: <FaPhoneAlt size={20} />, address: "/" },
    ];
    return (
        <div className="flex justify-around p-1 sm:gap-2 text-primary mt-2">
            {socialIcons && socialIcons.map((icon) => {
                return (
                    <Link key={icon.id} href={icon.address} target="_blank">
                        <div className=" p-2 rounded-full hover:cursor-pointer  hover:bg-other hover:text-primary duration-500">
                            <div>{icon.icon}</div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default SocialMediaIcons