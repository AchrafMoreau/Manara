'use client'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Section() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

    return (
        <div
            ref={container} 
            className='relative flex items-center justify-center h-[80vh] overflow-hidden'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='fixed top-[-10vh] left-0 h-[130vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
                <video  
                    className="absolute inset-0 w-full h-full object-cover"
                    preload="none"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/global.mp4" type="video/mp4" />
                    <track
                        src="/global.mp4"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 bg-black/70">
                    <div className="flex flex-col justify-center items-start">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary via-primary/80 to-earth  mb-4 dark:from-secondary dark:via-secondary/80 dark:to-earthLight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Welcome to Our Global Mission
                        </motion.h2>
                        <motion.div
                            className="w-24 h-1 bg-earth dark:bg-earthLight rounded-full mx-auto"
                            initial={{ width: 0 }}
                            animate={{ width: 96 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </div>
                    <p className="mt-2 text-lg max-w-2xl">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id sed doloribus consequuntur doloremque sapiente, error expedita, vero suscipit eligendi, magni quasi. Animi quia fugit nemo architecto perferendis aliquam, id ea.
                    </p>
                </div>
            </motion.div>
        </div>
        </div>
    )
}
//<Image src="/water_consulting.jpg" fill alt="image" style={{objectFit: "cover"}}/>