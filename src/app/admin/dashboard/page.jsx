import { MdOutlineAdminPanelSettings, MdOutlineCloudUpload } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsProjector } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";

const AdminDashboard = () => {
    const options = [
        {
            id: 1,
            name: 'Register New Admin',
            icon: <MdOutlineAdminPanelSettings size={50} />,
            path: `${process.env.NEXT_PUBLIC_VERCEL_URL}/admin/dashboard/register`
        },

        {
            id: 2,
            name: 'Upload New Resume',
            icon: <MdOutlineCloudUpload size={50} />,
            path: `${process.env.NEXT_PUBLIC_VERCEL_URL}/admin/dashboard/resume`
        },
        {
            id: 3,
            name: 'Change About',
            icon: <IoIosInformationCircleOutline size={50} />,
            path: `${process.env.NEXT_PUBLIC_VERCEL_URL}/admin/dashboard/about`
        },
        {
            id: 4,
            name: 'Add Portfolio',
            icon: <BsProjector size={50} />,
            path: `${process.env.NEXT_PUBLIC_VERCEL_URL}/admin/dashboard/portfolio`
        },
        {
            id: 5,
            name: 'Add Services',
            icon: <GrUserWorker size={50} />,
            path: `${process.env.NEXT_PUBLIC_VERCEL_URL}/admin/dashboard/services`
        },
        {
            id: 6,
            name: 'Logout',
            icon: <IoLogOutOutline size={50} />,
            path: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/logout`
        },
    ]
    return (
        <div className="h-full flex justify-center items-center">
            <div className="grid grid-cols-2 gap-6 lg:gap-16">
                {options.map((option) => {
                    return (
                        <Link href={option.path} key={option.id}>
                            <div className="rounded-lg hover:bg-blue-600 p-3 md:p-5 transition-all duration-700 select-none cursor-pointer bg-other text-primary md:text-xl text-center flex flex-col items-center">
                                {option.icon}
                                {option.name}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminDashboard