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
    function raf(time) {
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
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row h-[80vh] justify-between items-center">
      <div className="flex ml-10 flex-col w-[50%] items-start justify-between h-full pt-12">
          <h1 className="ml-10 text-8xl text-wrap leading-none">
            <TextAnimate animation="blurInUp" by="word" once>
              Manara Water Consulting
            </TextAnimate>
          </h1>
          <div className="mt-4 ml-10">
            <InteractiveHoverButton>Discover Our Solution</InteractiveHoverButton>
          </div>
          <WaveSVG  />
      </div>

      <div className="flex w-[50%] h-full edge">
        <img className=" object-fill w-full h-full" src='/water_consulting.jpg'
          alt="Water Consulting"
        />
      </div>
    </div>
    <div className="mx-20 justify-center items-center flex flex-col my-20">
      <h1 className="my-5">Our Clinets</h1>
      <Clinets />
    </div>
    <div className="projects mt-12 mx-20">
      <h1 className="ml-4 mb-8">Latest Projects</h1>
      <FocusCards cards={cards} />
      <div className="button ml-4 mt-5">
        <InteractiveHoverButton>See More Projects</InteractiveHoverButton>
      </div>
    </div>
    <div className="mt-12 py-10 flex justify-center items-center bg-gray-200 dark:bg-gray-800 min-h-3/4 w-full whythis">
      <div className="flex gap-5 mx-20">
        <div className="imagesEdge w-full h-full">
          <Image
            width={500}
            height={300}
            src="/water_consulting.jpg"
            alt="Water Consulting"
          />
        </div>
        <div className="info border-l border-blue-300 px-10 flex flex-col justify-center items-center">
          <h4 className="font-bold leading-[1] mb-5 self-start">Notre mission</h4>
          <p>Nous concevons et exploitons des infrastructures et bâtiments intelligents qui répondent aux défis liés à l'urgence climatique et améliorent le cadre de vie des populations dans le monde entier.</p>
        </div>
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

