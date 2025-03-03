"use client";
import Image from "next/image";
import  { motion } from "framer-motion"
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import Link from "next/link";


export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: ProjetType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <Link href={`/projects/${card.id}`}>
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative text-white bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
        
      <Image
        src={`/${card.thumbnail}`}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />


      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex flex-col justify-between py-8 px-4 transition-opacity duration-300 ",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="location self-end">
            <p className="font-medium bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-200">
                <FontAwesomeIcon icon={faLocation} className="mr-3"/>
                {card.location}
            </p>
        </div>

        <div className="info mb-3">
            <div className="border-y border-gray-400 flex  justify-between w-full mb-3 p-1">
                <p className=" font-medium bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-200">
                {card.client}
                </p>
            </div>
            <h3 className="leading-[1.2] font-medium bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-200">
                {card.title}
            </h3>
        </div>
      </div>
    </div>
    </Link>
  )
);

Card.displayName = "Card";


export default function FocusCards({ cards }: { cards: ProjetType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="projects mt-12 mx-10 md:mx-20 ">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5 text-foreground">
        <div className="flex flex-col justify-center items-start mb-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4 dark:text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Last Projects
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
        <InteractiveHoverButton className="shadow-xl">See More Projects</InteractiveHoverButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-10xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}
