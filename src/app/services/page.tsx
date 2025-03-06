"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import ServiceLayout from "@/components/service-layout"
import { ReactNode, useEffect } from "react"
import { DropletIcon, MapIcon, WavesIcon, UmbrellaIcon, DropletsIcon as DropIcon, GlassWaterIcon as WaterIcon } from 'lucide-react'
import { Title } from "@/components/title"
import Lenis from "lenis"

export default function ServicesOverview() {

  useEffect( () => {
      const lenis = new Lenis()

      function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
  }, [])
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title title="Nos Solutions pour une Gestion Durable de l'Eau" axAuto={true} />
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Notre expertise couvre un large éventail de services liés à l'eau, conçus pour répondre aux défis environnementaux actuels et futurs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Formations SIG & Renforcement des Capacités"
            description="Formations professionnelles en SIG et sur les pratiques durables pour la gestion des ressources en eau."
            icon={<MapIcon className="h-10 w-10" />}
            href="/services/FormationsSIG"
            delay={0.1}
          />
          
          <ServiceCard 
            title="Étude des Nappes & Cours d'Eau"
            description="Coordination des services d'eau pour des projets d'infrastructure et solutions innovantes pour les communautés."
            icon={<WavesIcon className="h-10 w-10" />}
            href="/services/EtudedesNappes"
            delay={0.2}
          />
          
          <ServiceCard 
            title="Réetulisation des eaux usées"
            description="Stratégies de gestion des déchets pour réduire l'empreinte carbone et promouvoir le recyclage des eaux usées."
            icon={<DropletIcon className="h-10 w-10" />}
            href="/services/Reetulisation"
            delay={0.3}
          />
          
            <ServiceCard 
              title="Services d'Assainissement"
              description="Solutions intelligentes pour l'optimisation du traitement des eaux usées conformes aux normes environnementales."
              icon={<DropIcon className="h-10 w-10" />}
              href="/services/Assainissement"
              delay={0.5}
            />
          <ServiceCard 
            title="Protection contre les inondations"
            description="Infrastructures innovantes pour atténuer les effets des inondations, systèmes de drainage et digues."
            icon={<UmbrellaIcon className="h-10 w-10" />}
            href="/services/Protection"
            delay={0.4}
          />
          
        </div>
        <motion.div
          className="mt-24 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            <div className="backdrop-blur-md  bg-gradient-to-r from-primary/90 via-primary/90 to-secondary rounded-xl p-8 md:p-10 shadow-xl ">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:mr-10">
                  <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/20 text-blue-100 text-sm font-medium mb-4">
                    Notre méthodologie
                  </div>

                  <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">Notre approche intégrée</h3>

                  <p className="text-blue-100/90 leading-relaxed mb-6">
                    Nous combinons expertise technique, compréhension locale et solutions innovantes pour créer des systèmes
                    de gestion d'eau durables et efficaces. Notre approche intégrée prend en compte tous les aspects du
                    cycle de l'eau pour garantir des solutions optimales.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-6">
                    {["Expertise", "Innovation", "Durabilité", "Efficacité"].map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-blue-700/50 text-blue-100 text-sm border border-blue-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:w-1/3 flex justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl opacity-70" />

                  <motion.div
                    className="relative z-10"
                    animate={{
                      rotateY: [0, 180, 360],
                    }}
                    transition={{
                      duration: 20,
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                  </motion.div>
                </div>
              </div>
            </div>
        </motion.div>
      </div>
    </ServiceLayout>
  )
}

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  href: string
  delay?: number
  className?: string
  isCallToAction?: boolean
}
export function ServiceCard({
  title,
  description,
  icon,
  href,
  delay = 0,
  className = "",
  isCallToAction = false,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative"
    >
      <Link href={href} className="block h-full">
        <div
          className={`
            relative h-full p-10 rounded-lg overflow-hidden
            backdrop-blur-sm bg-white/90 dark:bg-black/40
            border border-primary/10 dark:border-primary/20
            transition-all duration-500 ease-out
            ${isCallToAction ? "dark:bg-secondary/10 bg-secondary/5" : ""}
            ${className}
          `}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10 dark:to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Content container with z-index to stay above decorative elements */}
          <div className="relative z-10">
            <motion.div
              className={`
                mb-6 p-4 rounded-xl inline-flex items-center justify-center
                ${
                  isCallToAction
                    ? "bg-gradient-to-br from-primary to-secondary text-white"
                    : "bg-gradient-to-br from-secondary to-primary dark:from-primary/80 dark:to-secondary text-white dark:text-white"
                }
                shadow-sm group-hover:shadow-md transition-all duration-500
              `}
              whileHover={{
                scale: 1.05,
                rotate: 3,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
            >
              <span className="text-2xl">{icon}</span>
            </motion.div>

            <h3
              className={`
              text-2xl font-bold mb-4 tracking-tight
              ${isCallToAction ? "text-primary dark:text-primary" : "text-primary dark:text-white/80"}
              group-hover:translate-x-1 transition-transform duration-300
            `}
            >
              {title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">{description}</p>

            <div className="flex items-center">
              <motion.span
                className={`
                  inline-flex items-center font-medium text-sm
                  ${isCallToAction ? "text-primary dark:text-primary" : "text-earth dark:text-earthLight"}
                `}
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                <span className="mr-2 transition-all duration-300 group-hover:mr-3">
                  {isCallToAction ? "Prendre rendez-vous" : "En savoir plus"}
                </span>
                <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
                  →
                </motion.span>
              </motion.span>
            </div>
          </div>

          {/* Hover border effect */}
          <motion.div
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, transparent) padding-box, linear-gradient(90deg, var(--primary), var(--secondary), var(--earth)) border-box",
              border: "1px solid transparent",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </Link>
    </motion.div>
  )
}




function WaterDropAnimation() {
  return (
    <svg width="160" height="160" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        d="M100 20C100 20 130 60 130 100C130 140 100 180 100 180C100 180 70 140 70 100C70 60 100 20 100 20Z" 
        fill="rgba(255, 255, 255, 0.7)"
        initial={{ pathLength: 0, fill: "rgba(255, 255, 255, 0)" }}
        animate={{ 
          pathLength: 1,
          fill: "rgba(255, 255, 255, 0.7)"
        }}
        transition={{ 
          duration: 3,
          fill: { delay: 1, duration: 2 },
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.circle 
        cx="100" 
        cy="100" 
        r="40" 
        fill="rgba(255, 255, 255, 0.9)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          delay: 2,
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
    </svg>
  )
}
