
const Skills = ({ skills }) => {
    // console.log(skills)
    return (
        <div className='p-1 text-xs' >
            <div className='flex text-primary flex-wrap'>
                {skills.map((skill) => {
                    return (

                        <div key={skill.id} className=' flex items-center gap-1 ring-1 w-1/2 md:w-1/4 lg:w-1/6 p-1 sm:p-2 flex-wrap'>
                            <div>{skill.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills