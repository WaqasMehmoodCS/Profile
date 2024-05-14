'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import path from 'path'
const Resume = () => {
    const [resume, setResume] = useState()

    const handleFile = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        try {
            formData.append("resume", resume);
            
            console.log(path.parse(`/public/documents/${resume.name}`))
            const res = await axios.post(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/upload`, formData)
            if (res.status === 201) {
                alert(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getResume = async () => {
        const storedResume = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/upload`)
        // console.log(storedResume.data.lastResume)

    }
    useEffect(() => {
        getResume()
    }, [])

    return (
        <div className="border h-full overflow-auto scroll-hide scroll-btn text-primary flex justify-center items-center">
            <form onSubmit={handleFile} className="bg-black/80 p-5 rounded-lg w-full h-full">
                <embed src={"/documents/cs_resume.pdf"} className="w-full h-4/5" />
                <input type="file" onChange={(e) => setResume(e.target.files?.[0])} />
                <button type="submit">Upolad</button>
            </form>
        </div>

    )
}

export default Resume
