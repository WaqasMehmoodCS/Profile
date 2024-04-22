import MenuIcon from "./MenuIcon";
import Navigation from "./Navigation";

const NavBar = () => {
    return (
        <>
            <div className="flex justify-end items-center md:hidden font-quick">
                <MenuIcon />
            </div>
            <Navigation />
        </>
    )
}
export default NavBar