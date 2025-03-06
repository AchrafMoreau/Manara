'use client'
import Contact from "@/components/contact";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "motion/react";
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
        
            <section className="min-h-screen">
            <motion.div
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >

                <div className="flex text-white flex-col bg-gradient-to-r from-secondary to-primary h-[80vh] justify-end pb-5 items-center rounded-b-[2vw]"
                >
                <motion.div
                    className="relative z-10 flex items-center justify-center mb-10 md:mb-20"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <div className="container px-4 mx-auto text-center">
                    <motion.h1
                        className="text-4xl font-bold text-white mb-4 md:text-6xl lg:text-7xl"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Feel Free To Contact Us
                    </motion.h1>
                    <motion.div
                        className="w-20 h-1 bg-blue-400 mx-auto mb-6"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    />
                    <motion.p
                        className="text-lg text-blue-100 max-w-2xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Une question ? Un projet en tête ? Contactez-nous dès aujourd’hui et discutons ensemble de solutions adaptées à vos besoins en gestion de l’eau et en environnement.
                    </motion.p>
                    </div>
                </motion.div>
                </div>
            </motion.div>
            </section>
            <Contact />

        </>
    )
}