import React, { useState } from 'react'
import Image from 'next/image';
import Background from '../../public/images/2.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { LineSvg } from './svg-line';
import GridOne from './grid-contents/grid-one';
import GridTwo from './grid-contents/grid-two';
import GridThree from './grid-contents/grid-three';

export default function Intro() {
    const container = useRef();
    const [activeItem, setActiveItem] = useState<string>("gridOne")
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']

    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "130vh"])
  
    return (
    <motion.div style={{y}} className='relative h-full mt-0'>
        <div className="pl-20 flex flex-col justify-center items-center w-full">
            <div className="self-end">
                <LineSvg />
            </div>
            <div className="flex flex-col self-start max-w-[500px]">
                <h1 className="leading-none mb-4">Working with Manara Water Consulting</h1>
                <p>Manara Water Consulting is committed to creating and sustaining a global, inclusive culture, where differences are embraced for the benefit of our people, our clients and the communities around us.</p>
            </div>
            <div className="flex self-start gap-1 mt-10 flex-col md:flex-row ">
                <Sidebar setActiveItem={setActiveItem} active={activeItem} />

                {/* Right Content */}
                <div className="flex-1 mr-20">
                {activeItem == "gridOne" && <GridOne />}
                {activeItem == "gridTwo" && <GridTwo />}
                {activeItem == "gridThree" && <GridThree />}
                </div>
            </div>
        </div>
    </motion.div>
    )
}

const Sidebar = ({ setActiveItem, active } : { setActiveItem :  Dispatch<SetStateAction<string>>, active : string}) => {
  return (

    <aside className="mr-20 md:mr-0 p-6 flex flex-col gap-6 pr-20 ">
      <nav className="flex flex-col gap-4">
        <p 
          onClick={() => setActiveItem("gridOne")}
          className={`cursor-pointer flex items-center gap-2 text-lg transition-all group ${active == "gridOne" ? "text-blue-400" : "text-gray-500"}`}>
          <span className="group-hover:translate-x-1 transition-transform">↗</span>
          <span className={active == "gridOne" ? "border-l-2 border-blue-400 pl-2" : "pl-2"}>Team</span>
        </p>
        <p 
          onClick={() => setActiveItem("gridTwo")}
          className={`cursor-pointer flex items-center gap-2 text-lg transition-all group ${active == "gridTwo" ? "text-blue-400" : "text-gray-500"}`}>
          <span className="group-hover:translate-x-1 transition-transform">↗</span>
          <span className={active == "gridTwo" ? "border-l-2 border-blue-400 pl-2" : "pl-2"}>Clients</span>
        </p>
        <p 
          onClick={() => setActiveItem("gridThree")}
          className={`cursor-pointer flex items-center gap-2 text-lg transition-all group ${active == "gridThree" ? "text-blue-400" : "text-gray-500"}`}>
          <span className="group-hover:translate-x-1 transition-transform">↗</span>
          <span className={active == "gridThree" ? "border-l-2 border-blue-400 pl-2" : "pl-2"}>Our Goal</span>
        </p>
      </nav>
    </aside>
  );
};