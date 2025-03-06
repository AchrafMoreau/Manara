"use client"
import { motion } from "framer-motion"
import { Recycle, DropletsIcon as Drop, CheckCircle, ArrowRightIcon, Filter, FlowerIcon as PlantIcon } from 'lucide-react'
import Image from "next/image"
import ServiceLayout from "@/components/service-layout"
import { Title } from "@/components/title"
import { CTASection } from "@/components/cta-section"
import { useEffect } from "react"
import Lenis from "lenis"

export default function Reetulisation() {

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

        {/* Benefits Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title title="Avantages de la Réutilisation des Eaux Usées" axAuto={true} titleClass="mx-auto"/>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Environnementaux",
                benefits: [
                  "Réduction de la pression sur les ressources en eau",
                  "Diminution des rejets polluants dans les milieux naturels",
                  "Préservation des écosystèmes aquatiques",
                  "Réduction de l'empreinte carbone"
                ],
                icon: <PlantIcon className="h-10 w-10" />,
                delay: 0.1
              },
              {
                title: "Économiques",
                benefits: [
                  "Économies significatives sur la consommation d'eau",
                  "Réduction des coûts de traitement des rejets",
                  "Valorisation d'une ressource inexploitée",
                  "Conformité aux normes environnementales"
                ],
                icon: <Drop className="h-10 w-10" />,
                delay: 0.3
              },
              {
                title: "Sociaux",
                benefits: [
                  "Renforcement de l'indépendance hydrique",
                  "Amélioration de l'image de marque",
                  "Engagement concret pour le développement durable",
                  "Adaptation aux changements climatiques"
                ],
                icon: <CheckCircle className="h-10 w-10" />,
                delay: 0.5
              },
            ].map((category, index) => (
              <motion.div 
                key={index}
                className="bg-earth/30 p-6 rounded-lg shadow-sm dark:bg-secondary/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: category.delay, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="p-3 bg-background rounded-full inline-flex mb-4 text-blue-500">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-primary dark:text-secondary">{category.title}</h4>
                <ul className="space-y-2">
                  {category.benefits.map((benefit, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + category.delay, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <ArrowRightIcon className="mr-2 h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-400">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>


        <motion.div 
          className="my-20 p-10 rounded-xl bg-gradient-to-r from-blue-50 to-green-50  border border-blue-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-12 text-center text-primary">Notre Processus de Traitement</h3>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="flex flex-col md:flex-row items-start justify-between mb-8 relative z-10">
              {[
                { 
                  title: "Collecte", 
                  description: "Récupération et stockage des eaux usées",
                  icon: <Drop className="h-8 w-8" />,
                  delay: 0.1
                },
                { 
                  title: "Pré-traitement", 
                  description: "Élimination des solides et impuretés grossières",
                  icon: <Filter className="h-8 w-8" />,
                  delay: 0.3
                },
                { 
                  title: "Traitement", 
                  description: "Processus biologiques et chimiques adaptés",
                  icon: <Recycle className="h-8 w-8" />,
                  delay: 0.5
                },
                { 
                  title: "Contrôle", 
                  description: "Vérification de la qualité selon l'usage prévu",
                  icon: <CheckCircle className="h-8 w-8" />,
                  delay: 0.7
                },
                { 
                  title: "Distribution", 
                  description: "Acheminement vers les points d'utilisation",
                  icon: <ArrowRightIcon className="h-8 w-8" />,
                  delay: 0.9
                },
              ].map((step, index, array) => (
                <motion.div 
                  key={index}
                  className="text-center px-4 w-full md:w-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: step.delay, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <motion.div 
                      className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md border border-blue-100"
                      whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="text-blue-500">
                        {step.icon}
                      </div>
                    </motion.div>
                    {index < array.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-blue-200" />
                    )}
                  </div>
                  <h4 className="text-lg font-bold mt-4 mb-2 text-primary">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Applications Section */}
        <motion.div 
          className="my-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title title="Applications de la Réutilisation des Eaux Usées" axAuto={true} titleClass="mx-auto" borderClass="mb-5"/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h4 className="text-xl font-bold text-earth mb-4">Irrigation Agricole et Espaces Verts</h4>
              <p className="dark:text-gray-400 text-gray-600 mb-4">
                L'eau traitée peut être utilisée pour l'irrigation des cultures non alimentaires, 
                des espaces verts, des terrains de golf et des parcs, réduisant considérablement 
                la consommation d'eau potable pour ces usages.
              </p>
              <motion.div 
                className="h-1 w-20 bg-earth mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
              <p className="text-gray-600 dark:text-gray-400">
                Nos systèmes de traitement garantissent une qualité d'eau adaptée aux besoins 
                spécifiques des végétaux tout en assurant la sécurité sanitaire.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/team.jpg"
                  alt="Irrigation avec des eaux usées traitées"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="order-4 md:order-3"
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/team.jpg"
                  alt="Applications industrielles des eaux usées traitées"
                  width={600}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="order-3 md:order-4"
            >
              <h4 className="text-xl font-bold text-primary mb-4">Applications Industrielles</h4>
              <p className="text-gray-600 mb-4 dark:text-gray-400">
                L'eau recyclée peut être utilisée pour divers procédés industriels: refroidissement, 
                nettoyage, et processus ne nécessitant pas d'eau potable, permettant de réduire 
                significativement les coûts opérationnels.
              </p>
              <motion.div 
                className="h-1 w-20 bg-primary mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <p className="text-gray-600 dark:text-gray-400">
                Nos solutions sur mesure s'adaptent aux exigences spécifiques de chaque industrie 
                et type de procédé, optimisant l'utilisation de cette ressource précieuse.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Process Section */}


        {/* CTA Section */}
        <CTASection
          title="Réduisez Votre Consommation d'Eau"
          description="Contactez-nous pour étudier les possibilités de réutilisation des eaux usées dans votre organisation et contribuer à un avenir plus durable."
          button="Étudier une Solution Sur-Mesure"
        />
      </div>
    </ServiceLayout>
  )
}

function WaterRecyclingAnimation() {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="relative w-80 h-80">
        {/* Water drops animation */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 100, opacity: [0, 1, 0] }}
          transition={{ 
            delay: 0.3,
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <Drop className="h-16 w-16 text-blue-300" />
        </motion.div>
        
        {/* Recycling circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M80 20C51.6608 20 28.3923 39.5557 22.5184 65.1543C22.5061 65.2363 22.5 65.3191 22.5 65.4V94.6C22.5 94.6809 22.5061 94.7637 22.5184 94.8457C28.3923 120.444 51.6608 140 80 140C108.339 140 131.608 120.444 137.482 94.8457C137.494 94.7637 137.5 94.6809 137.5 94.6V65.4C137.5 65.3191 137.494 65.2363 137.482 65.1543C131.608 39.5557 108.339 20 80 20Z"
                stroke="rgba(255, 255, 255, 0.7)"
                strokeWidth="5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.path
                d="M40 80C40 95.6878 55.5832 108.751 75.858 109.939C76.0251 109.951 76.1937 109.936 76.3558 109.895L103.644 102.105C103.806 102.064 103.975 102.049 104.142 102.061C124.417 103.249 140 116.312 140 132"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 3 }}
              />
              <motion.path
                d="M140 80C140 64.3122 124.417 51.2488 104.142 50.0612C103.975 50.0492 103.806 50.0638 103.644 50.1046L76.3558 57.8954C76.1937 57.9362 76.0251 57.9508 75.858 57.9388C55.5832 56.7512 40 43.6878 40 28"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 4.5 }}
              />
            </svg>
          </motion.div>
        </motion.div>
        
        {/* Cleaned water drops */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: -100, opacity: [0, 1, 0] }}
          transition={{ 
            delay: 6,
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <Drop className="h-16 w-16 text-blue-100" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
