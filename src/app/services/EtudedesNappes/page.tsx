"use client"
import { motion } from "framer-motion"
import { WavesIcon, DropletIcon, BarChartIcon as ChartIcon, BarChart, LineChart, Scale } from 'lucide-react'
import Image from "next/image"
import ServiceLayout from "@/components/service-layout"
import { useEffect, useState } from "react"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { CTASection } from "@/components/cta-section"
import Lenis from "lenis"
import { Title } from "@/components/title"

export default function EtudeDesNappes() {
  const [activeTab, setActiveTab] = useState("aquifers")
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
      <div className="container mx-auto px-4 py-20 text-primary">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title title="Étude des Nappes & Cours d'Eau" axAuto={true}/>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Nos techniques de modélisations hydraulique et hydro-géopysique avancées permettent d'analyser et de prédire le comportement des nappes et des cours d'eau dans divers scénarios
          </p>
        </motion.div>


        {/* Methodology Section */}
        <motion.div 
          className="my-20 p-8 rounded-xl bg-primary text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Notre Méthodologie</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { 
                title: "Évaluation", 
                description: "Étude préliminaire et collecte de données existantes",
                icon: <Scale className="h-8 w-8" />
              },
              { 
                title: "Investigation", 
                description: "Mesures sur le terrain et analyses en laboratoire",
                icon: <DropletIcon className="h-8 w-8" />
              },
              { 
                title: "Analyse", 
                description: "Modélisation et interprétation des résultats",
                icon: <BarChart className="h-8 w-8" />
              },
              { 
                title: "Recommandations", 
                description: "Solutions personnalisées et plans d'action",
                icon: <LineChart className="h-8 w-8" />
              },
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="relative p-6 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              >
                <div className="absolute -top-4 -left-4 p-3 bg-blue-500 rounded-full">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 mt-2">{step.title}</h4>
                <p className="text-blue-100">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Tabs */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center mb-8 border-b">
            {[
              { id: "aquifers", label: "Nappes Phréatiques", icon: <DropletIcon className="mr-2 h-5 w-5" /> },
              { id: "rivers", label: "Cours d'Eau", icon: <WavesIcon className="mr-2 h-5 w-5" /> },
              { id: "monitoring", label: "Surveillance & Analyse", icon: <BarChart className="mr-2 h-5 w-5" /> },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                className={`flex items-center px-6 py-3 font-medium ${
                  activeTab === tab.id 
                    ? "text-primary dark:text-secondary border-b-2 dark:border-secondary border-primary" 
                    : "text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary"
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
          
          <div className="p-4">
            {activeTab === "aquifers" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <h4 className="text-2xl font-bold mb-4 dark:text-primary/1">Étude et Gestion des Nappes Phréatiques</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Nos experts évaluent la qualité et la quantité des ressources en eau souterraine, 
                    permettant une gestion durable des aquifères et la mise en place de stratégies de protection.
                  </p>
                  <ul className="space-y-2 ">
                    {[
                      "Cartographie hydrogéologique",
                      "Modélisation des aquifères",
                      "Études de vulnérabilité",
                      "Plans de gestion des nappes",
                      "Détermination des périmètres de protection",
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start dark:text-primary/1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <div className="mr-3 mt-1 text-blue-500 ">
                          <DropletIcon size={16} />
                        </div>
                        <p>{item}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src="/team.jpg"
                    alt="Nappes phréatiques"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </motion.div>
              </motion.div>
            )}

            {activeTab === "rivers" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <h4 className="text-2xl font-bold mb-4 ">Gestion des Cours d'Eau</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Nous réalisons des études hydrologiques complètes des cours d'eau pour optimiser 
                    leur gestion et développer des solutions de protection contre les inondations.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Études hydromorphologiques",
                      "Analyse des débits et des crues",
                      "Restauration des cours d'eau",
                      "Évaluation de la qualité écologique",
                      "Aménagement des berges",
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <div className="mr-3 mt-1 text-blue-500">
                          <WavesIcon size={16} />
                        </div>
                        <p>{item}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src="/team.jpg"
                    alt="Cours d'eau"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </motion.div>
              </motion.div>
            )}

            {activeTab === "monitoring" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <h4 className="text-2xl font-bold mb-4">Surveillance et Analyse des Ressources en Eau</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Nos systèmes de surveillance permettent le suivi en temps réel de la qualité et de la 
                    quantité des ressources en eau, facilitant une gestion proactive et durable.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Réseaux de surveillance piézométrique",
                      "Analyse physico-chimique des eaux",
                      "Suivi des niveaux et des débits",
                      "Interprétation des données et modélisation",
                      "Solutions d'alerte précoce",
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <div className="mr-3 mt-1 text-blue-500">
                          <LineChart size={16} />
                        </div>
                        <p>{item}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src="/team.jpg"
                    alt="Surveillance et analyse"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>



        {/* CTA Section */}
        <CTASection 
            title="Besoin d'Une Étude Pour Votre Projet ?"
            description="Contactez nos experts pour discuter de vos besoins spécifiques et obtenir une proposition adaptée à votre contexte."
            button="Demander une Consultation"
        />
      </div>
    </ServiceLayout>
  )
}
