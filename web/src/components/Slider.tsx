"use client"

import { useEffect, useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"


export function Slider(){

    const slidesImages = [
        "url('/images/home-slider1.png')", 
        "url('/images/home-slider2.png')", 
        "url('/images/home-slider3.png')",
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    function goToPreviousSlide(){
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slidesImages.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    function goToNextSlide(){
        const isLastSlide = currentIndex === slidesImages.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
        const timer = setTimeout(() => goToNextSlide(), 3000); return () => clearTimeout(timer)
    }, [currentIndex])


    return(
        <section className="mb-14">
            <h2 className="font-title font-bold text-xl w-[80vw] mx-auto mb-8">
                SEJA VOCÊ MESMO
            </h2>
            <div className="w-full h-[300px] relative">
                <ChevronLeft className="slider-btn" size={32} onClick={goToPreviousSlide} />
                <ChevronRight className=" slider-btn right-0 " size={32} onClick={goToNextSlide}/>
                <div className={"w-full h-full bg-no-repeat bg-cover"} style={{backgroundImage: slidesImages[currentIndex]}}></div>
            </div>
        </section>
    )
}