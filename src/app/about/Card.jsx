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
        <div className="rounded-lg p-2 bg-secondary/60 shadow-lg shadow-other/30">
            {title === 'about' &&
                <>
                    <div className="uppercase font-quick tracking-wider font-bold text-xl text-primary">{title}</div>
                    <div className="normal-case font-manrope tracking-wider text-primary text-justify text-sm">{summary}</div>
                </>
            }
            {title === 'Familiar Technologies' &&
                <>
                    <div className="uppercase font-quick tracking-wider font-bold text-xl text-primary">{title}</div>
                    <div className="normal-case font-manrope tracking-wider text-primary text-justify text-sm">{familierTechnologies}</div>
                </>
            }
            {title === 'qualification' &&
                <>
                    <div className="uppercase font-quick tracking-wider font-bold text-xl text-primary">{title}</div>
                    <div className="normal-case font-manrope tracking-wider text-primary text-justify text-sm">{degree} in {subjects}</div>
                    <div className="normal-case font-manrope tracking-wider text-primary text-justify text-sm">{university}</div>
                    <div className="normal-case font-manrope tracking-wider text-primary text-justify text-sm">{year}</div>
                    <div className="normal-case font-manrope tracking-wider text-primary text-justify text-sm">{cgpa} CGPA</div>
                </>
            }
            {title === 'skills' &&
                <>
                    <div className="uppercase font-quick tracking-wider font-bold text-xl text-primary">{title}</div>
                    <Skills skills={skills} />
                </>
            }
        </div>
    )
}

export default Card