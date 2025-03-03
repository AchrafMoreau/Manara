'use client'
import Contact from "@/components/contact";
import { TextAnimate } from "@/components/magicui/text-animate";
import Lenis from "lenis";
import { useEffect } from "react";

export default function ContactUs(){
    useEffect( () => {
        const lenis = new Lenis()

        function raf(time:any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
    return (
        <>
        
            <div className="flex text-white flex-col contactUs h-[60vh] justify-end pb-5 items-center rounded-b-[2vw]"
            >
                <TextAnimate className="mx-auto w-full text-center text-7xl text-wrap leading-none" animation="blurInUp" by="word" once as="h2">
                    Feel Free To Contact Us
                </TextAnimate>
            </div>
            <Contact />

        </>
    )
}