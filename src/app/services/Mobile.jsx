import Image from 'next/image'
const Mobile = () => {
    return (

        <div className="border border-white bg-slate-500/70 rounded-lg text-primary flex-1 w-full flex p-4 flex-col flex-wrap md:flex-row items-center animate-scale-up-center">
            <div className="hidden lg:block flex-[2]  text-justify p-2 ">
                <div>
                    <p>As a seasoned mobile app developer, I specialize in creating customized and user-centric mobile applications that cater to diverse needs. With a focus on native and cross-platform development, I leverage technologies like React Native to build high-performance apps for both iOS and Android platforms. Whether you&apos;re a startup, small business, or enterprise, I provide end-to-end mobile development services, including UI/UX design, front-end and back-end development, testing, and deployment. Additionally, I offer comprehensive maintenance and support to ensure your app remains secure, up-to-date, and optimized for performance. Let&apos;s collaborate to turn your mobile app ideas into reality and enhance your digital presence.</p>
                </div>
            </div>
            <div className="flex-1  p-3">
                <div className="relative float-start overflow-hidden h-full w-full flex justify-center items-center">
                    <div className="w-56 h-56 md:h-56 md:w-56 absolute">
                        <Image src={'/mobile.png'} alt="web development vector logo" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                    <div className="mt-60 flex p-1 justify-center items-center font-bold text-xl tracking-wider">
                        <div>Mobile Development</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile