"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function MissionVision() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <section ref={ref} className="py-24 px-10 md:px-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <motion.div className="flex flex-col justify-center items-center container mx-auto px-4" style={{ opacity, y, scale }}>
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4 dark:text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Mission And Vision
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">Our Mission</h3>
            <p className="text-slate-700 leading-relaxed">
              To empower businesses and individuals with innovative technology solutions that drive growth, efficiency,
              and positive change in the world. We strive to deliver exceptional value through our expertise,
              creativity, and unwavering commitment to excellence.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h3>
            <p className="text-slate-700 leading-relaxed">
              To be a global leader in technology innovation, recognized for our transformative solutions and positive
              impact on society. We envision a future where our technologies enhance human potential, foster sustainable
              practices, and create a more connected and inclusive world.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

