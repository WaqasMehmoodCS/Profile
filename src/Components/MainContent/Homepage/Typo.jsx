'use client'
import { Typewriter } from 'react-simple-typewriter'

const Typo = () => {
    const words = ['Frontend Developer', 'React JS Developer','Next JS Developer', 'Backend Developer', 'Full Stack Developer', 'MERN Stack Developer']
    return (
        <div className='text-other underline font-manrope tracking-widest'><Typewriter words={words} loop cursor cursorBlinking cursorColor='white' typeSpeed={100} deleteSpeed={70} /></div>
    )
}

export default Typo