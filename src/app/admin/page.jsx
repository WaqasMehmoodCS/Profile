import { cookies } from "next/headers";
import Form from "./Form"
import { MdOutlineAdminPanelSettings } from "react-icons/md";

export const metadata = {
    title: 'Admin',
}
const Admin = () => {
    return (
        <div className="h-full flex justify-center items-center absolute top-0 left-0 w-full md:relative p-4 md:p-0">
            <div className="rounded-xl w-full md:w-2/3 bg-secondary text-primary flex flex-col justify-center items-center animate-scale-up-center border-other border ">
                <MdOutlineAdminPanelSettings size={100} color="blue" />
                <h1 className="p-4 text-center uppercase font-semibold tracking-widest font-quick md:text-2xl select-none">Administrator Login</h1>
                <Form />
            </div>
        </div>
    )
}

export default Admin