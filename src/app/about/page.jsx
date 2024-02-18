import { info } from "@/lib/personalData/about"
import Card from "./Card"
const AboutPage = () => {
    return (
        info && info.map((person) => {
            const { id } = person
            return (
                <div key={id} className='font-manrope mt-4 sm:mt-0 flex flex-col p-2 sm:p-4 gap-3'>
                    <Card title={'about'} />
                    <Card title={'Familiar Technologies'} />
                    <Card title={'qualification'} />
                    <div className="">
                        <Card title={'skills'} />
                    </div>
                </div>
            )
        })
    )
}

export default AboutPage