import { info } from "@/lib/personalData/about"
import Card from "./Card"
export const metadata = {
    title: "About",
    description: "Familiar Technologies, about, qualification, skills, experience",
};
const AboutPage = () => {
    return (
        <div className="h-full px-2 pb-14 md:pb-5 md:pt-5">
            {info && info.map((person) => {
                const { id } = person
                return (
                    <div key={id} className='font-manrope flex flex-col justify-around h-full gap-5 p-4 overflow-auto scroll-hide scroll-btn'>
                        <Card title={'about'} />
                        <Card title={'Familiar Technologies'} />
                        <Card title={'qualification'} />
                        <div className="">
                            <Card title={'skills'} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AboutPage