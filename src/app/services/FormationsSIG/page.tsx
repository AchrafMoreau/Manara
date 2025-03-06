"use client"
import { motion } from "framer-motion"
import { Check, MapPin, MapIcon, PenLine, Users, Award } from 'lucide-react'
import Image from "next/image"
import ServiceLayout from "@/components/service-layout"
import { CTASection } from "@/components/cta-section"
import { Title } from "@/components/title"
import { useEffect } from "react"
import Lenis from "lenis"

export default function FormationsSIG() {

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
          <Title title="Formations SIG & Renforcement des Capacités" axAuto={true} />
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Nos formations professionnelles sont conçues pour renforcer les compétences des cadres et personnels techniques 
            dans les domaines des Systèmes d'Information Géographique (SIG) et de la gestion durable des ressources en eau.
          </p>
        </motion.div>

        {/* Interactive GIS Map Animation */}
        <div className="mb-20 relative h-[500px]  rounded-xl overflow-hidden shadow-lg">
          <motion.div 
            className="absolute inset-0 bg-blue-900 bg-opacity-80 z-10 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <MapIcon size={100} className="text-white" />
              <motion.div 
                className="h-1 bg-white mt-4"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          </motion.div>
          
          <div className="absolute inset-0 bg-gray-200">
            <Image
              src="/gis-map.jpg"
              alt="GIS Map Visualization"
              fill
              className="object-cover"
            />
            
            {/* Animated map pins */}
            <MapPinAnimations />
          </div>
        </div>

        {/* Our Training Programs */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title title="Nos Programmes de Formation" axAuto={true} titleClass="mx-auto"/>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SIG pour la Gestion des Ressources en Eau",
                description: "Maîtrisez les outils SIG pour cartographier et analyser les ressources hydriques.",
                icon: <MapIcon className="h-8 w-8" />,
                delay: 0.1
              },
              {
                title: "Collecte et Analyse de Données",
                description: "Techniques de collecte et méthodes d'analyse pour une gestion efficace de l'eau.",
                icon: <PenLine className="h-8 w-8" />,
                delay: 0.2
              },
              {
                title: "Formation des Formateurs",
                description: "Développez des compétences pédagogiques pour transmettre votre expertise.",
                icon: <Users className="h-8 w-8" />,
                delay: 0.3
              },
            ].map((program, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-lg shadow-sm  bg-secondary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: program.delay, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="p-3 bg-background rounded-full inline-flex mb-4 text-blue-500">
                  {program.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-primary dark:text-secondary/80">{program.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div 
          className="my-20 p-8 rounded-xl "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title title="Avantages de Nos Formations" axAuto={true} titleClass="mx-auto" borderClass="mb-5"/>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
            {[
              "Programmes personnalisés selon vos besoins spécifiques",
              "Formateurs experts avec expérience de terrain",
              "Approche pratique avec études de cas réels",
              "Certification reconnue dans le secteur",
              "Suivi post-formation et assistance continue",
              "Accès à notre réseau de professionnels",
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-start text-xl"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mr-3 mt-1 text-earth">
                  <Check size={20} />
                </div>
                <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <CTASection
            title="Prêt à Renforcer les Compétences de Votre Équipe?"
            description="Nos formations sont adaptées aux besoins spécifiques de votre organisation. Contactez-nous pour discuter de vos objectifs et créer un programme sur mesure."
            button="Demander un Programme Personnalisé"
        />
      </div>
    </ServiceLayout>
  )
}

function MapPinAnimations() {
  // Create several animated map pins at different positions
  const pins = [
    { x: "20%", y: "30%", delay: 1.2 },
    { x: "50%", y: "60%", delay: 1.5 },
    { x: "80%", y: "40%", delay: 1.8 },
    { x: "70%", y: "20%", delay: 2.1 },
    { x: "30%", y: "70%", delay: 2.4 },
  ]
  
  return (
    <>
      {pins.map((pin, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: pin.x, top: pin.y }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            y: [0, -10, 0]
          }}
          transition={{ 
            delay: pin.delay, 
            duration: 0.5,
            y: {
              delay: pin.delay + 0.5,
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
          <MapPin className="h-8 w-8 text-blue-600" />
        </motion.div>
      ))}
    </>
  )
}
