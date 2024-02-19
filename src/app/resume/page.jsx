import Link from 'next/link';

const ResumePage = () => {
    return (
        <div className="p-4 sm:mt-8 lg:mt-10 h-full flex font-manrope overflow-auto">
            <div className="w-full h-full flex justify-center items-center">
                <iframe
                    src="/documents/cs_resume.pdf"
                    title="Resume"
                    className="w-full h-full"
                ></iframe>
            </div>
            <div className="text-center mt-4">
                <Link href="/documents/cs_resume.pdf" download />
            </div>
        </div>
    );
};

export default ResumePage;
