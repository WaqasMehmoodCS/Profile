'use client'
import React, { createContext, useState } from 'react'
import { ImSpinner8 } from "react-icons/im";

export const LoadingContext = createContext()
const LoadingContextWrapper = ({ children }) => {

    const [loading, setLoading] = useState(false)
    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {loading &&
                <div className="absolute z-[100] bg-secondary/70 text-other w-[100dvw] left-0 h-[100dvh] top-0 flex justify-center items-center">
                    <ImSpinner8 className="rotate-animation" size={70} />
                </div>}
            {children}

        </LoadingContext.Provider>
    )

}

export default LoadingContextWrapper