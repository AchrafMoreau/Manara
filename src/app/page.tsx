"use client"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import { TextAnimate } from "@/components/magicui/text-animate";
import {WaveSVG, LineSvg} from "@/components/svg-line";
import { FocusCards } from "@/components/ui/focuse-card";
import Image from "next/image";
import GridOne from "@/components/grid-contents/grid-one";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import GridThree from "@/components/grid-contents/grid-three";
import GridTwo from "@/components/grid-contents/grid-two";
import Lenis  from "lenis"
import Intro from "@/components/intro";
import Description from "@/components/description";
import Section from "@/components/sections";
import Contact from "@/components/contact";
import Clinets from "@/components/clinets";

export default function Home() {
  useEffect( () => {
    const lenis = new Lenis()
    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  }, [])
  const cards = [
    {
      title: "Forest Adventure",
      category: "water",
      company: "Anonymous",
      location: "Casablanaca",
      src: "/water_consulting.jpg",
    },
    {
      title: "Valley of life",
      company: "World Council on City Data",
      category: "Built Environment",
      location: "Agadir",
      src: "/water_consulting.jpg",
    },
    {
      title: "Sala behta hi jayega",
      category: "Power, Renewables & Energy",
      company: "London and other global financial centres",
      location: "Guelmim",
      src: "/water_consulting.jpg",
    },
  ];
  return (
    <>
    <div className="flex text-white flex-col hero h-[90vh] justify-center items-start rounded-b-[2vw] ">
        <TextAnimate className="text ml-10 text-7xl text-wrap leading-none" animation="blurInUp" by="character" once as="h1">
          Manara 
        </TextAnimate>
        <TextAnimate className="text ml-10 text-7xl text-wrap leading-none" animation="blurInUp" by="character" once as="h1">
          Water 
          Consulting
        </TextAnimate>
        <div className="mt-4 ml-10">
          <InteractiveHoverButton className="shadow-xl text-black dark:text-white">Discover Our Solution</InteractiveHoverButton>
        </div>
        <div className="hidden shadow-xl w-[400px] p-10 md:flex flex-col note rounded-t-[2vw]">
          <p>Do you plan water?</p>
          <h4 className="leading-none py-3">
            Additional training as a building services planner specializing in sanitation
          </h4>
          <p>see more</p>
        </div>
    </div>
    <div className="mx-10 md:mx-20 justify-center items-center flex flex-col my-20">
      <h1 className="my-5">Our Clinets</h1>
      <Clinets />
    </div>
    <div className="projects mt-12 mx-10 md:mx-20 ">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5 text-foreground">
        <h1 className="ml-4 text-center">Latest Projects</h1>
        <InteractiveHoverButton className="shadow-xl">See More Projects</InteractiveHoverButton>
      </div>
      <FocusCards cards={cards} />
    </div>
    <div className="mt-[150px] py-10 flex justify-center items-center min-h-3/4 w-full ">
      <div className="mission mx-10 md:mx-20 shadow-xl h-[70vh] text-white border-l border-blue-300 px-10 flex flex-col justify-center items-center rounded-xl">
        <h3 className="font-bold leading-[1] mb-5">Notre mission</h3>
        <p className="text-center mx-5 md:w-[50%] font-bold mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vitae dolorum voluptate laudantium rerum quibusdam consequatur, reiciendis voluptatibus quis ullam, nemo ipsum cumque nesciunt explicabo magni corrupti dignissimos nobis. Incidunt.
        </p>
        <InteractiveHoverButton className="text-foreground ">See More</InteractiveHoverButton>
      </div>
    </div>
    

    <div className="">
      <Intro />
      <div className='h-screen'></div>
      <Section />
      <Contact />
    </div>
    </>
  );
}

