import MenuIcon from "./MenuIcon";
import Navigation from "./Navigation";

const NavBar = () => {
    return (
        <div className="overflow-auto">
            <div className="flex justify-end items-center md:hidden font-quick">
                <MenuIcon />
            </div>
            <div className="">
                <Navigation />
            </div>
        </div>
    )
}
export default NavBar