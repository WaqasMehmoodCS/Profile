import Image from 'next/image'

const Web = () => {
    return (
        <div className="border border-white bg-slate-500/70 rounded-lg text-primary flex-1 w-full flex p-4 flex-col flex-wrap md:flex-row items-center animate-scale-up-center h-[30%]">
            <div className="hidden lg:block flex-[2] text-justify p-2 ">
                <div>
                    <p className='text-sm'>
                        As a skilled React JS/Full Stack Developer with two years of experience, I specialize in crafting custom web solutions that elevate online presence and drive results. From startups to established enterprises, I create bespoke websites that reflect brand identity and resonate with target audiences. Leveraging my expertise in HTML5, CSS3, JavaScript, React.js, and Vue.js, I ensure optimal user experiences across all devices with responsive design and pixel-perfect interfaces. With proficiency in Node.js, Express.js, and MongoDB, I develop robust back-end infrastructures to power server-side applications and implement secure authentication systems. Beyond development, I provide ongoing maintenance and support services to keep websites secure, up-to-date, and optimized for performance, ensuring a seamless user experience and continuous functionality.</p>
                </div>
            </div>
            <div className="flex-1">
                <div className="relative float-start overflow-hidden h-[90%] w-full flex justify-center items-center">

                    <div className="w-full h-[70%] absolute">
                        <Image src={'/web.png'} alt="web development vector logo" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>

                    <div className="mt-52 flex p-1 justify-center items-center font-bold text-xl tracking-wider">
                        <div>Web Development</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Web