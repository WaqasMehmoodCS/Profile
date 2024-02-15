import { FiMenu } from "react-icons/fi";
import MenuIcon from "./MenuIcon";
import Navigation from "./Navigation";

const NavBar = () => {
    return (
        <div className='font-quick flex justify-between'>
            <div className="flex-1">
                <Navigation />
            </div>
            <div>
                <MenuIcon />
            </div>
        </div>
    )
}
export default NavBar