import { MdOutlineAdminPanelSettings, MdOutlineCloudUpload } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsProjector } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { middleware } from "../../../../middleware";
const AdminDashboard = () => {
    const options = [
        {
            id: 1,
            name: 'Register New Admin',
            icon: <MdOutlineAdminPanelSettings size={50} />
        },

        {
            id: 2,
            name: 'Upload New Resume',
            icon: <MdOutlineCloudUpload size={50} />
        },
        {
            id: 3,
            name: 'Change About',
            icon: <IoIosInformationCircleOutline size={50} />
        },
        {
            id: 4,
            name: 'Add Portfolio',
            icon: <BsProjector size={50} />
        },
        {
            id: 5,
            name: 'Add Services',
            icon: <GrUserWorker size={50} />
        },
    ]
    return (
        <div className="h-full flex justify-center items-center">
            <div className="p-3 grid grid-cols-2 gap-6 lg:gap-16">
                {options.map((option) => {
                    return (
                        <div key={option.id} className="rounded-lg hover:bg-blue-600 p-3 md:p-5 transition-all duration-700 select-none cursor-pointer bg-other text-primary md:text-xl text-center flex flex-col items-center">
                            {option.icon}
                            {option.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminDashboard