import Skills from "./Skills"
import { info } from "@/lib/personalData/about"
const Card = (props) => {
    const { title } = props
    let data;
    const extractData = async () => {
        info && info.map((user) => {
            data = user
        })
    }
    extractData()

    const { about, qualification, skills } = data
    const { degree, university, subjects, year, cgpa } = qualification
    const { familierTechnologies, summary } = about
    return (
        <div className="border border-white bg-slate-500/70 rounded-lg text-primary w-full p-4 animate-scale-up-center">
            {/* <div className="rounded-lg p-2 bg-secondary/60 text-primary shadow-lg shadow-other/30"> */}
            {title === 'about' &&
                <>
                    <div className="uppercase font-quick text-other tracking-widest font-bold text-xl underline">{title}</div>
                    <div className="normal-case font-manrope tracking-wider text-justify text-sm">{summary}</div>
                </>
            }
            {title === 'Familiar Technologies' &&
                <>
                    <div className="uppercase font-quick text-other tracking-widest font-bold text-xl underline">{title}</div>
                    <div className="normal-case font-manrope tracking-wider text-justify text-sm">{familierTechnologies}</div>
                </>
            }
            {title === 'qualification' &&
                <>
                    <div className="uppercase font-quick text-other tracking-widest font-bold text-xl underline">{title}</div>
                    <div className="normal-case font-manrope tracking-wider text-justify text-sm">{degree} in {subjects}</div>
                    <div className="normal-case font-manrope tracking-wider text-justify text-sm">{university}</div>
                    <div className="normal-case font-manrope tracking-wider text-justify text-sm">{year}</div>
                    <div className="normal-case font-manrope tracking-wider text-justify text-sm">{cgpa} CGPA</div>
                </>
            }
            {title === 'skills' &&
                <>
                    <div className="uppercase font-quick text-other tracking-widest font-bold text-xl underline">{title}</div>
                    <Skills skills={skills} />
                </>
            }
        </div>
    )
}

export default Card