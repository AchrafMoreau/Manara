"use client"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TextAnimate } from "@/components/magicui/text-animate";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TeamCard from "@/components/ui/team-card";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import MissionVision from "@/components/mission-vision";
import Lenis from "lenis";
import CoreValues from "@/components/core-value";
import { Title } from "@/components/title";

export default function AboutUs(){
    useEffect( () => {
        const lenis = new Lenis()

        function raf(time:any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const team = [
        {
            id: 1,
            name: "Achraf Moreau",
            position: "Web Developer",
            image: "/achraf.jpg",
            linkedin: "https://www.linkedin.com/in/achraf-moreau-8684811a1/",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita eligendi quo illo quibusdam veniam similique nemo accusamus laboriosam molestias in quod."
        },
        {
            id: 2,
            name: "Anass Absa",
            position: "Hydraulic Engineer",
            image: "/anass.jpg",
            linkedin: "https://www.linkedin.com/in/achraf-moreau-8684811a1/",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita eligendi quo illo quibusdam veniam similique nemo accusamus laboriosam molestias in quod."
        },
        {
            id: 3,
            name: "Jamila Idk",
            position: "Hydraulic Engineer",
            linkedin: "https://www.linkedin.com/in/achraf-moreau-8684811a1/",
            image: "/jamila.jpg",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita eligendi quo illo quibusdam veniam similique nemo accusamus laboriosam molestias in quod."
        },
        {
            id: 4,
            name: "Achraf Moreau",
            position: "Web Developer",
            linkedin: "https://www.linkedin.com/in/achraf-moreau-8684811a1/",
            image: "/achraf.jpg",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita eligendi quo illo quibusdam veniam similique nemo accusamus laboriosam molestias in quod."
        },
        {
            id: 5,
            name: "Anass Absa",
            position: "Hydraulic Engineer",
            image: "/anass.jpg",
            linkedin: "https://www.linkedin.com/in/achraf-moreau-8684811a1/",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita eligendi quo illo quibusdam veniam similique nemo accusamus laboriosam molestias in quod."
        },
        {
            id: 6,
            name: "Jamila Idk",
            position: "Hydraulic Engineer",
            linkedin: "https://www.linkedin.com/in/achraf-moreau-8684811a1/",
            image: "/jamila.jpg",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita eligendi quo illo quibusdam veniam similique nemo accusamus laboriosam molestias in quod."
        },
    ]
    const data = [
        {
        title: "2024",
        content: (
            <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Dr. Asma Ben Moussa fonde Manara Water Consulting, une société spécialisée dans la gestion durable de l’eau, l’assainissement, et les solutions environnementales innovantes
            </p>
            <div className="grid grid-cols-2 gap-4">
                <Image
                src="/directrice.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                src="/team.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
            </div>
            </div>
        ),
        },
        {
        title: "Early 2023",
        content: (
            <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                I usually run out of copy, but when I see content this big, I try to
                integrate lorem ipsum.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Lorem ipsum is for people who are too lazy to write copy. But we are
                not. Here are some more example of beautiful designs I built.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <Image
                src="/team1.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                src="/consulting.webp"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
            </div>
            </div>
        ),
        },
        {
        title: "Changelog",
        content: (
            <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                Deployed 5 new components on Aceternity today
            </p>
            <div className="mb-8">
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Card grid component
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Startup template Aceternity
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Random file upload lol
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Himesh Reshammiya Music CD
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Salman Bhai Fan Club registrations open
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Image
                src="/team1.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                src="/consulting.webp"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
            </div>
            </div>
        ),
        },
    ];
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
                        Who We Are
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
                        Manara Water Consulting est un bureau d’expertise spécialisé dans la gestion durable de l’eau. Avec plus de 15 ans d’expérience, nous accompagnons nos partenaires dans l’optimisation des ressources hydriques et la protection environnementale.
                    </motion.p>
                    </div>
                </motion.div>
                </div>
            </motion.div>
            </section>
           

            <div className="w-full px-10 md:px-20">
                <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                    <Timeline data={data} />
                </motion.div>
            </div>

            <div ref={ref} className="w-full mt-20 flex flex-col  justify-center items-center px-20">
                <div className="flex flex-col justify-center items-center mb-5">
                    <Title title="Our Team" axAuto={true} />
                    <p className="w-[90%] md:w-[60%] text-center">Notre équipe est composée d'experts chevronnés issus de divers domaines des ressources en eau, géophysique, hydraulique urbaine, assainissement et du developpement durable</p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent >
                        {team.map((elm) => (
                        <CarouselItem key={elm.id} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <TeamCard member={elm} />
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <div className="mt-10 w-full"
            >
                <MissionVision />
            </div>
            <div className="mt-10 w-full"
            >
                <CoreValues />
            </div>

        </>
    )
}
