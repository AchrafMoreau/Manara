"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Shield, Lightbulb, Users } from "lucide-react"

export default function CoreValues() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = containerRef.current?.querySelectorAll(".value-card")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="w-full py-20  overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4 dark:text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Integrity Card */}
          <motion.div
            className="value-card bg-white rounded-xl shadow-lg p-8 relative overflow-hidden opacity-0 transform translate-y-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 z-0" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-full -ml-12 -mb-12 z-0" />

            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all our operations, ensuring transparency, honesty, and
                accountability in every project we undertake.
              </p>
            </div>

            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left" />
          </motion.div>

          {/* Innovation Card */}
          <motion.div
            className="value-card bg-white rounded-xl shadow-lg p-8 relative overflow-hidden opacity-0 transform translate-y-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full -mr-16 -mt-16 z-0" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-50 rounded-full -ml-12 -mb-12 z-0" />

            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                <Lightbulb className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek cutting-edge solutions and technologies to address complex water challenges,
                driving progress in sustainable water management.
              </p>
            </div>

            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform origin-left" />
          </motion.div>

          {/* Customer-Centric Card */}
          <motion.div
            className="value-card bg-white rounded-xl shadow-lg p-8 relative overflow-hidden opacity-0 transform translate-y-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-full -mr-16 -mt-16 z-0" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-50 rounded-full -ml-12 -mb-12 z-0" />

            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-6">
                <Users className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Customer-Centric</h3>
              <p className="text-gray-600">
                We place our clients' needs at the heart of everything we do, delivering tailored solutions that exceed
                expectations and build lasting partnerships.
              </p>
            </div>

            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 transform origin-left" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

