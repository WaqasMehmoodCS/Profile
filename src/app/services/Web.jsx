import Image from 'next/image'

const Web = () => {
    return (
        <div className='font-quick bg-slate-500/70 rounded-xl text-primary flex-1 flex p-4 flex-col md:flex-row animate-scale-up-center lg:items-center'>
            <p className='hidden lg:block text-sm text-justify lg:flex-1 pr-5'> As a skilled React JS/Full Stack Developer with two years of experience, I specialize in crafting custom web solutions that elevate online presence and drive results. From startups to established enterprises, I create bespoke websites that reflect brand identity and resonate with target audiences. Leveraging my expertise in HTML5, CSS3, JavaScript and React.js, I ensure optimal user experiences across all devices with responsive design and pixel-perfect interfaces. With proficiency in Node.js, Express.js, and MongoDB, I develop robust back-end infrastructures to power server-side applications and implement secure authentication systems. Beyond development, I provide ongoing maintenance and support services to keep websites secure, up-to-date, and optimized for performance, ensuring a seamless user experience and continuous functionality.</p>
            <div className='flex flex-col w-full h-full items-center lg:flex-1'>
                <div className='relative w-full h-full'>
                    <Image src={'/web.webp'} alt='webImage' fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='absolute object-cover' />
                </div>
                <h1 className='font-[500] text-2xl tracking-widest'>Web Development</h1>
            </div>
        </div>
    )
}

export default Web