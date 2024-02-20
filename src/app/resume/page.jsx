import Link from 'next/link';

const ResumePage = () => {
    return (
        <div className="p-4 sm:mt-8 lg:mt-10 h-full flex font-manrope overflow-auto flex-col">
            <div className="hidden md:flex w-full h-full justify-center items-center">
                <iframe
                    src="/documents/cs_resume.pdf"
                    title="Resume"
                    className="w-full h-full"
                ></iframe>
            </div>
            <div className="block my-auto md:hidden text-center md:mt-4 right-1 bg-other p-2 w-[50%] mx-auto rounded-lg text-primary">
                <a href="/documents/cs_resume.pdf" download className=" text-primary hover:underline text-sm md:text-base">Download Resume</a>
            </div>
        </div>
    );
};

export default ResumePage;
