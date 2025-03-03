"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion"
import Link from "next/link"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "@radix-ui/react-dropdown-menu"
import { InteractiveHoverButton } from "./magicui/interactive-hover-button"
import { Button } from "./ui/button"


const AnimatedSection = ({ children, progress }: { children: React.ReactNode; progress: MotionValue<number> }) => {
  const opacity = useTransform(progress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(progress, [0, 0.5, 1], [0.8, 1, 0.8])
  const y = useTransform(progress, [0, 0.5, 1], [50, 0, -50])

  return (
    <motion.div style={{ opacity, scale, y }} className="mb-16">
      {children}
    </motion.div>
  )
}

export default function AnimatedFooter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <footer ref={containerRef} className="overflow-hidden">
      <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold">
                Our Vision
              </h4>
              <p className="text-gray-400">
                Pushing the boundaries of digital experiences, one pixel at a time. We blend creativity with technology
                to craft unforgettable online journeys.
              </p>
            </div>
            <div className="hidden md:block">
              <h4 className="font-bold">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Portfolio", "Contact"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold">
                Stay Connected
              </h4>
              <div className="flex space-x-4 mb-4">
                {["Twitter", "Facebook", "Instagram", "LinkedIn"].map((social, index) => (
                  <motion.a
                    key={social}
                    href={`https://${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="sr-only">{social}</span>
                    <i className={`fab fa-${social.toLowerCase()} text-2xl`}></i>
                  </motion.a>
                ))}
              </div>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4"
              >
                <Textarea className="mb-5" placeholder="Send Your Messege"></Textarea>
                <div className="flex gap-4">
                    <Input 
                        type="email"
                        id="email"
                        name="email"
                        className=""
                        placeholder="Enter your email"
                  />
                  <Button className="bg-gradient-to-r from-secondary to-primary" type="submit">Send</Button>
                </div>
              </motion.form>
            </div>
          </div>
      </div>
    </footer>
  )
}

