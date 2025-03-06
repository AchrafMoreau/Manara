"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"


const Title = ({ title, axAuto=false, titleClass, borderClass } : { title: string, axAuto?: boolean, titleClass?: string, borderClass?: string}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3, // Trigger when 30% of the element is in view
    margin: "0px 0px -100px 0px", // Negative bottom margin to trigger earlier
  })

  return (
    <div ref={ref} className="flex flex-col justify-center items-start mb-5">
      <motion.h2
        className={`text-4xl capitalize md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary via-primary/80 to-earth mb-4 dark:from-secondary dark:via-secondary/80 dark:to-earthLight  pb-2 ${titleClass}`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      {/* Border with top-to-bottom animation */}
      <motion.div
        className={`relative w-24 h-1 bg-earth dark:bg-earthLight rounded-full ${axAuto ? 'mx-auto' : '' } ${borderClass}`}
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0.25, 1, 0.5, 1], // Custom easing for a smooth, slightly bouncy finish
        }}
        style={{
          // Add a subtle transform to create a slight angle effect during animation
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      />
    </div>
  )
}

export { Title }



