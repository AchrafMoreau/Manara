"use client";
import * as LucideIcons from "lucide-react";
import Image from "next/image";
import  { motion } from "framer-motion"
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import Link from "next/link";
import { Title } from "../title";
import { Button } from "./button";
import { ProjetType } from "@/lib/types";
import { Icon } from "lucide-react";


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
  }) => {
    const IconComponent = LucideIcons[card.category.icon as keyof typeof LucideIcons] || LucideIcons.HelpCircle;

    return(
    <Link href={`/projects/${card.id}`}>
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative text-white bg-gray-100 dark:bg-neutral-900 overflow-hidden h-full w-full transition-all duration-300 ease-out ",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
        
      <motion.div
        key={card.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        layout
        className="h-full"
      >
        <motion.div
          className="bg-card rounded-xl overflow-hidden border border-border hover-lift h-full flex flex-col"
          whileHover={{ y: -5 }}
        >
          <div className="relative h-[200px] overflow-hidden">
            <Image
              src={`/${card.thumbnail}`}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className={`absolute top-3 left-3 ${card.category.color} px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1`}
            >
              <IconComponent className="h-4 w-4"/>
              {card.category.name}
            </div>
          </div>
          <div className="flex  mt-2 mx-3 items-center justify-start gap-3 ">
            <FontAwesomeIcon icon={faLocationDot}  className="text-gray-600 dark:text-gray-400"/>
            <p className="text-gray-600 dark:text-gray-400  line-clamp-2">{card.location}</p>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-semibold mb-2  bg-clip-text text-transparent bg-gradient-to-b from-primary via-primary/80 to-earth dark:from-secondary dark:via-secondary/80 dark:to-earthLight">{card.title}</h3>
            <p className="text-muted-foreground mb-4 flex-grow line-clamp-2">{card.description}</p>
            <InteractiveHoverButton className="text-zinc-700 dark:text-white ">
              Voir le projet
            </InteractiveHoverButton>
          </div>
        </motion.div>
      </motion.div>
    </div>
    </Link>
  )}
);

Card.displayName = "Card";


export default function FocusCards({ cards }: { cards: ProjetType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
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
  );
}
