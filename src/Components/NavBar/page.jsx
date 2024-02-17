import MenuIcon from "./MenuIcon";
import Navigation from "./Navigation";

const NavBar = () => {
    return (
        <div className='font-quick flex justify-between h-16'>
            <div className="flex-1">
                <div>
                    <Navigation />
                </div>
            </div>
            <div className="sm:hidden">
                <MenuIcon />
            </div>
        </div>
    )
}
export default NavBar