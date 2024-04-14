import { ImSpinner8 } from "react-icons/im";

const Loading = () => {
    return (
        <div className="absolute z-[100] bg-secondary/70 text-other w-[100dvw] left-0 h-[100dvh] top-0 flex justify-center items-center">
            <ImSpinner8 className="rotate-animation" size={70} />
        </div>
    )
}

export default Loading