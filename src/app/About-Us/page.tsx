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
                Built and launched Aceternity UI and Aceternity UI Pro from scratch
            </p>
            <div className="grid grid-cols-2 gap-4">
                <Image
                src="/water_consulting.jpg"
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
            <div className="flex text-white flex-col aboutUs h-[90vh] justify-center items-start rounded-b-[2vw]"
            
            >
                <TextAnimate className="text ml-10 text-7xl text-wrap leading-none" animation="blurInUp" by="word" once as="h2">
                    Who We Are
                </TextAnimate>
                <div className="mt-4 ml-10 w-full md:w-[50%]">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt eos sequi dignissimos, explicabo perferendis aut laudantium alias dolore voluptatum nam dolores blanditiis sapiente fugit eveniet exercitationem quia quis. Ipsam, deserunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae praesentium maiores consequatur facilis quidem et, unde rerum magni, nemo vero voluptates perferendis optio accusamus laboriosam error itaque debitis ipsam?!</p>
                </div>
            </div>

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
                <div className="text-center mb-16">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-primary mb-4 dark:text-secondary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Team
                </motion.h2>
                <motion.div
                    className="w-24 h-1 bg-blue-500 mx-auto rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />
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
