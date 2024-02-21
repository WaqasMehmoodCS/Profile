'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ImageArray = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const timer = setTimeout(nextImage, 3000);
        return () => clearTimeout(timer);
    }, [nextImage]);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className="w-full p-4 flex justify-center items-center relative h-52 md:h-64 lg:h-72">
                <div className="w-full h-full absolute top-0 left-0 rounded-lg overflow-hidden shadow-lg border">
                    <Image src={images[currentImageIndex].path} alt='portfolio home page image of full stack developer for project' fill priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                </div>
            </div>

            <div className='text-primary text-2xl flex justify-between items-center absolute left-10 top-10 md:top-1/4 right-10 opacity-0 hover:opacity-100 duration-1000 py-16 px-4'>
                <div className='bg-other rounded-full p-1 hover:cursor-pointer' onClick={prevImage}>
                    <FaAngleLeft size={25} />
                </div>
                <div className='bg-other rounded-full p-1 hover:cursor-pointer' onClick={nextImage}>
                    <FaAngleRight size={25} />
                </div>
            </div>
        </>
    )
}

export default ImageArray;