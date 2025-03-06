"use client"

import { motion } from "framer-motion"
import { Umbrella, AlertTriangle, Shield, BarChart4, Map, Cloud } from 'lucide-react'
import Image from "next/image"
import ServiceLayout from "@/components/service-layout"
import { Title } from "@/components/title"
import { CTASection } from "@/components/cta-section"
import { Card } from "@/components/ui/focuse-card"
import { MagicCard } from "@/components/magicui/magic-card"
import { useTheme } from "next-themes"
import { useEffect } from "react"
import Lenis from "lenis"

export default function Protection() {

  const { theme } = useTheme();
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

        {/* Our Approach Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title title="Notre Approche" axAuto={true} titleClass="mx-auto"/>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Prévention",
                description: "Identification des zones à risque et mise en place de mesures préventives pour réduire l'exposition aux inondations.",
                icon: <AlertTriangle className="h-10 w-10" />,
                delay: 0.1
              },
              {
                title: "Protection",
                description: "Conception et mise en œuvre d'infrastructures de protection efficaces et respectueuses de l'environnement.",
                icon: <Shield className="h-10 w-10" />,
                delay: 0.3
              },
              {
                title: "Préparation",
                description: "Développement de systèmes d'alerte précoce et de plans d'intervention pour minimiser les impacts des inondations.",
                icon: <Umbrella className="h-10 w-10" />,
                delay: 0.5
              },
            ].map((pillar, index) => (
              <motion.div 
                key={index}
                className="bg-secondary/10 dark:bg-secondary/5 p-6 rounded-lg shadow-sm "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: pillar.delay, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="p-3 bg-background rounded-full inline-flex mb-4 text-blue-500">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-blue-500">{pillar.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div 
          className="my-20 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title title="Nos Solutions de Protection" axAuto={true} titleClass="mx-auto" borderClass="mb-5"/>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-10 md:mx-20">
            {[
              {
                title: "Systèmes de Drainage Urbain Durable",
                description: "Nos systèmes de drainage urbain durable (SUDS) intègrent des solutions basées sur la nature pour gérer efficacement les eaux pluviales tout en améliorant la biodiversité et la qualité de vie urbaine.",
                image: "/team.jpg",
                features: [
                  "Jardins de pluie et noues paysagères",
                  "Pavés perméables et surfaces poreuses",
                  "Bassins de rétention et zones humides artificielles",
                  "Toitures végétalisées"
                ],
                delay: 0.1
              },
              {
                title: "Ouvrages de Protection",
                description: "Nous concevons et réalisons des infrastructures de protection contre les inondations adaptées aux contextes locaux, en intégrant des considérations environnementales et paysagères.",
                image: "/team.jpg",
                features: [
                  "Digues et barrières anti-inondation",
                  "Bassins d'écrêtement des crues",
                  "Canaux de dérivation",
                  "Murs de protection intégrés au paysage"
                ],
                delay: 0.3
              },
              {
                title: "Cartographie des Risques et Planification",
                description: "Nos services d'analyse et de cartographie permettent d'identifier les zones à risque et de développer des stratégies d'aménagement du territoire intégrant la gestion des inondations.",
                image: "/team.jpg",
                features: [
                  "Modélisation hydraulique avancée",
                  "Cartographie des zones inondables",
                  "Plans de prévention des risques",
                  "Stratégies d'adaptation au changement climatique"
                ],
                delay: 0.5
              },
              {
                title: "Systèmes d'Alerte Précoce",
                description: "Nous développons des systèmes de surveillance et d'alerte intégrant les technologies les plus récentes pour anticiper les risques d'inondation et permettre une réaction rapide.",
                image: "/team.jpg",
                features: [
                  "Réseaux de capteurs intelligents",
                  "Prévision hydrométéorologique",
                  "Plateformes d'alerte multi-canaux",
                  "Applications mobiles de notification"
                ],
                delay: 0.7
              },
            ].map((solution, index) => (
              <motion.div 
                key={index}
                className="rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: solution.delay, duration: 0.5 }}
                viewport={{ once: true }}
              >
                  <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>

                    <div className="h-48 overflow-hidden">
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        width={600}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-3 text-zinc-600 dark:text-secondary">{solution.title}</h4>
                      <p className="text-gray-600 mb-4 dark:text-gray-400">{solution.description}</p>
                      <h5 className="font-semibold text-blue-600 mb-2 dark:text-zinc-200">Caractéristiques:</h5>
                      <ul className="space-y-1">
                        {solution.features.map((feature, i) => (
                          <motion.li 
                            key={i}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + solution.delay + 0.2, duration: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <div className="mr-2 mt-1 text-green-500 flex-shrink-0">
                              <Shield className="h-4 w-4" />
                            </div>
                            <span className="text-gray-700 text-sm dark:text-gray-400">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </MagicCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies Section */}
        <motion.div 
          className="my-20 p-10 rounded-xl "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title title="Études de Cas" axAuto={true} titleClass="mx-auto" borderClass="mb-5"/>
          
          
          <motion.div 
            className="bg-gradient-to-r from-primary/10 to-earth/5  p-6 rounded-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/team.jpg"
                    alt="Projet de protection contre les inondations"
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold mb-2 text-primary dark:text-secondary">Système de Protection Intégré - Ville Côtière</h4>
                <p className="text-gray-800 mb-4 dark:text-gray-400">
                  Mise en place d'un système complet de protection contre les inondations côtières, 
                  combinant infrastructures de défense, restauration d'écosystèmes naturels et 
                  système d'alerte précoce.
                </p>
                <div className="grid grid-cols-2 gap-4 text-gray-800 dark:text-gray-400">
                  <div>
                    <h5 className="font-semibold mb-1 text-earth">Défis:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Augmentation du niveau de la mer</li>
                      <li>• Érosion côtière accélérée</li>
                      <li>• Zone urbaine dense</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1 text-earth">Résultats:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Réduction de 85% des dommages</li>
                      <li>• Restauration écologique réussie</li>
                      <li>• Temps d'alerte triplé</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-b from-primary/10 to-earth/5  p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/team.jpg"
                    alt="Système de drainage urbain durable"
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold mb-2 text-primary dark:text-secondary">Renouvellement Urbain Résilient - Métropole</h4>
                <p className="text-gray-800 mb-4 dark:text-gray-400">
                  Réaménagement d'un quartier urbain avec intégration de solutions de drainage durable,
                  transformation d'espaces imperméables en zones perméables et création d'espaces 
                  multifonctionnels de gestion des eaux pluviales.
                </p>
                <div className="grid grid-cols-2 gap-4 text-gray-800 dark:text-gray-400">
                  <div>
                    <h5 className="font-semibold mb-1 text-earth">Défis:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Réseau d'assainissement saturé</li>
                      <li>• Inondations pluviales fréquentes</li>
                      <li>• Forte densité urbaine</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1 text-earth">Résultats:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• 60% de réduction du ruissellement</li>
                      <li>• Création d'espaces verts valorisés</li>
                      <li>• Amélioration de la qualité de l'eau</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <CTASection
          title="Protégez Votre Communauté Contre les Inondations"
          description="Contactez nos experts pour évaluer les risques d'inondation dans votre région et développer des solutions adaptées à vos besoins spécifiques."
          button="Demander une Évaluation des Risques"
        />
      </div>
    </ServiceLayout>
  )
}


