import { info } from "@/lib/personalData/about"
import Card from "./Card"
export const metadata = {
    title: "About",
    description: "Familiar Technologies, about, qualification, skills, experience",
};
const AboutPage = () => {
    return (
        <div className="h-full overflow-auto px-2 pb-14 md:pb-5 md:pt-5">
            {info && info.map((person) => {
                const { id } = person
                return (
                    <div key={id} className='font-manrope mt-4 sm:mt-0 flex flex-col p-2 sm:p-4 gap-3 lg:mt-8 lg:gap-8'>
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