"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Droplet, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function AnimatedFooter() {
  return (
    <footer className="text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FadeIn>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <Image
                  src="/logo_sm.png"
                  alt="Manara Water Consulting"
                  height={100}
                  width={100}
                />
              </div>
              <p className="text-secondary-foreground/70 mb-6">
                Expert en gestion des ressources en eau et solutions environnementales durables.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">LinkedIn</span>
                  <FontAwesomeIcon icon={faLinkedin} />
                </motion.a>
                <motion.a
                  href="#"
                  className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">Twitter</span>
                  <FontAwesomeIcon icon={faTwitter} />
                </motion.a>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-4 col-span-2 hidden md:block ">
            <div className="grid grid-cols-2 gap-3">
            <h3 className="text-xl col-span-2 font-semibold mb-6 border-b w-fit">Nos Services</h3>
              <div className="space-y-4">
                <StaggerItem>
                  <Link
                    href="/services"
                    className="flex items-center text-secondary-foreground/70 hover:text-primary transition-colors group"
                  >
                    <span>Overview</span>
                    <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </StaggerItem>
                <StaggerItem>
                  <Link
                    href="/services/FormationsSIG"
                    className="flex items-center text-secondary-foreground/70 hover:text-primary transition-colors group"
                  >
                    <span>Formations SIG & Renforcement des Capacités</span>
                    <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </StaggerItem>
                <StaggerItem>
                  <Link
                    href="/services/EtudedesNappes"
                    className="flex items-center text-secondary-foreground/70 hover:text-primary transition-colors group"
                  >
                    <span>Étude des Nappes & Cours d'Eau</span>
                    <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </StaggerItem>
              </div>
              <div className="space-y-4">
                <StaggerItem>
                  <Link
                    href="/services/Protection"
                    className="flex items-center text-secondary-foreground/70 hover:text-primary transition-colors group"
                  >
                    <span>Protection contre les inondations</span>
                    <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </StaggerItem>
                <StaggerItem>
                  <Link
                    href="/services/Assainissement"
                    className="flex items-center text-secondary-foreground/70 hover:text-primary transition-colors group"
                  >
                    <span>Services d'Assainissement</span>
                    <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </StaggerItem>
                <StaggerItem>
                  <Link
                    href="/services/Reetulisation"
                    className="flex items-center text-secondary-foreground/70 hover:text-primary transition-colors group"
                  >
                    <span>Réetulisation des eaux usées</span>
                    <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </StaggerItem>
              </div>
            </div>
          </StaggerContainer>


          <FadeIn direction="left">
            <div>
              <h3 className="text-xl border-b w-fit font-semibold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 ">
                  <FontAwesomeIcon icon={faMapLocationDot} />
                  <span className="text-secondary-foreground/70">Centre Affaires Nour 1, Bloc B, Imm. 5, Appt N°3 - Tamesna, Maroc</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faPhone} />
                  <div className="flex flex-col gap-2">
                    <span className="text-secondary-foreground/70">+212-613131063</span>
                    <span>+212 0537401128</span>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="text-secondary-foreground/70">Benmoussa.asma.2023@gmail.com</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Manara Water Consulting. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

