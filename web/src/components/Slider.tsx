"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"


export function Slider(){

    const slider = [
        "url('/images/home-banner1.png')", 
        "url('/images/home-banner2.png')", 
        "url('/images/home-banner3.png')",
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const timerRef = useRef(null)

    function goToPreviousSlide(){
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    function goToNextSlide(){
        const isLastSlide = currentIndex === slider.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
        const timer = setTimeout(() => goToNextSlide(), 3000);     return () => clearTimeout(timer)
    }, [currentIndex])


    return(
        <div className="w-full h-[300px] relative">
            <ChevronLeft className="absolute top-1/2 translate-y-[-50%] bg-white-50 rounded-full opacity-60" size={32} onClick={goToPreviousSlide} />
            <ChevronRight className="absolute top-1/2 translate-y-[-50%] right-0 bg-white-50 rounded-full opacity-60" size={32} onClick={goToNextSlide}/>
            <div className={`bg-[${slider[currentIndex]}] w-full h-full bg-no-repeat bg-cover`}></div>
        </div>
    )
}