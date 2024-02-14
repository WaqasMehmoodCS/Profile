import { FiMenu } from "react-icons/fi";

const NavBar = () => {
    return (
        <div className='border border-secondary font-quick flex items-center p-2 justify-end'>
            <div className="bg-other p-2 ring-1 hover:cursor-pointer hover:bg-other/50 duration-1000 rounded-full">
                <FiMenu size={20} />
            </div>
        </div>
    )
}

export default NavBar