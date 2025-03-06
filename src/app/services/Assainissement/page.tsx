"use client"
import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Droplet, Filter, FlaskRoundIcon as Flask } from "lucide-react"
import Link from "next/link"
import ServiceLayout from "@/components/service-layout"
import { CTASection } from "@/components/cta-section"
import Image from "next/image"
import Lenis from "lenis"

export default function ServicesPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useEffect( () => {
      const lenis = new Lenis()

      function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
  }, [])
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  const serviceRefs = [useRef(null), useRef(null), useRef(null)]
  const [servicesInView, setServicesInView] = useState([false, false, false])

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  }

  const handleIntersection = useCallback(
    (index: number) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setServicesInView((prevState) => {
            const newState = [...prevState]
            newState[index] = true
            return newState
          })
        }
      })
    },
    [],
  )

  useEffect(() => {
    const observers = serviceRefs.map((ref, index) => {
      return new IntersectionObserver(handleIntersection(index), observerOptions)
    })

    serviceRefs.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [handleIntersection, serviceRefs])

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.8, 0])

  return (
    <ServiceLayout>
    <div className="container mx-auto px-4 py-20">
        {/* Services */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid gap-16 md:gap-24">
            {/* Service 1 */}
            <motion.div
              ref={serviceRefs[0]}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView[0] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="order-2 md:order-1 ">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Droplet className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600 font-medium">01</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Needs Assessment</h2>
                <p className="text-lg text-gray-600 mb-6 dark:text-gray-400">
                  We precisely respond to local water management needs with comprehensive analysis and tailored
                  solutions.
                </p>
                <ul className="space-y-3 mb-8 ">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3 ">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="dark:text-gray-400 text-gray-700">In-depth analysis of local water systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-400">Identification of improvement opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-400">Customized assessment reports</span>
                  </li>
                </ul>
                
              </div>
              <div className="order-1 md:order-2 relative ">
                <Image
                    src="/team.jpg"
                    alt="Needs Assessment"
                    width={500}
                    className="rounded-xl"
                    height={600}
                />
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              ref={serviceRefs[1]}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView[1] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative ">
                <Image
                    src="/team.jpg"
                    alt="Needs Assessment"
                    width={500}
                    className="rounded-xl"
                    height={600}
                />

              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Filter className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600 font-medium">02</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Network Design</h2>
                <p className="text-lg text-gray-600 mb-6 dark:text-gray-400">
                  Design of sanitation systems for local public health and hygiene, ensuring efficient and sustainable
                  water management.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-400">Comprehensive system planning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-400">Integration with existing infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-400">Future-proof solutions</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              ref={serviceRefs[2]}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView[2] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Flask className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600 font-medium">03</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Treatment Optimization</h2>
                <p className="text-lg text-gray-600 mb-6 dark:text-gray-400">
                  Advanced optimization of wastewater treatment, compliant with environmental standards and focused on
                  sustainability.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-400">Smart treatment solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-400">Environmental compliance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-400">Efficiency improvements</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative">

                <Image
                    src="/team.jpg"
                    alt="Needs Assessment"
                    width={500}
                    className="rounded-xl"
                    height={600}
                />
               
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <CTASection 
            title="Ready to transform your water management ?"
            description="Our team of experts is ready to help you implement sustainable and efficient water solutions."
            button="Get in touch"
        />

    </div>
    </ServiceLayout>
  )
}