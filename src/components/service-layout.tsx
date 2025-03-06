"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import Contact from "./contact"
import { TextAnimate } from "./magicui/text-animate"

interface ServiceLayoutProps {
  children: ReactNode
}

export default function ServiceLayout({ children }: ServiceLayoutProps) {
  const pathname = usePathname()
  
  return (
   <div className="min-h-screen">
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
                {getPageTitle(pathname)}
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
                {getPageDescription(pathname)}
              </motion.p>
            </div>
          </motion.div>
        </div>
        {children}

        {/* Footer with water droplet animation */}
        <Contact />
      </motion.div>
    </div>
  )
}

function getPageTitle(pathname: string) {
  switch(pathname) {
    case "/services":
      return "Nos Services"
    case "/services/FormationsSIG":
      return "Formations SIG & Renforcement des Capacités"
    case "/services/EtudedesNappes":
      return "Étude des Nappes & Cours d'Eau"
    case "/services/Reetulisation":
      return "Reetulisation des eaux usées"
    case "/services/Protection":
      return "Protection contre les inondations"
    case "/services/Assainissement":
      return "Services d'Assainissement"
    default:
      return "Services"
  }
}

function getPageDescription(pathname: string) {
  switch(pathname) {
    case "/services":
      return "Expertise & Innovation Pour Relever Les Defis Lies Au Developpement Durable. 💧🌍"
    case "/services/FormationsSIG":
      return "Formations professionnelles en SIG et pratiques durables pour la gestion des ressources en eau."
    case "/services/EtudedesNappes":
      return "Solutions innovantes pour l'étude et la gestion des nappes phréatiques et cours d'eau."
    case "/services/Reetulisation":
      return "Stratégies avancées pour le recyclage et la réutilisation des eaux usées."
    case "/services/Protection":
      return "Infrastructure innovante pour la protection contre les inondations et la gestion des risques."
    case "/services/Assainissement":
      return "Services d'assainissement adaptés aux contextes locaux pour améliorer l'hygiène et la santé publique."
    default:
      return "Solutions durables pour la gestion de l'eau"
  }
}

function WaterDroplets() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-400 rounded-full opacity-40"
          style={{
            width: Math.random() * 40 + 10,
            height: Math.random() * 40 + 10,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ 
            scale: 0,
            opacity: 0.2,
          }}
          animate={{ 
            scale: 1,
            opacity: [0.2, 0.4, 0.2],
            y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          }}
          transition={{
            duration: Math.random() * 5 + 5, 
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}
