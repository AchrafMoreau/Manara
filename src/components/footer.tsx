"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import AnimatedFooter from "./animated-footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <div 
      className='relative  h-[700px] md:h-[75vh] mt-10'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[700px] md:h-[75vh] w-full'>
        <Content />
      </div>
    </div>
  )
}

function Content() {
  return (
    <div className="bg-gradient-to-br from-secondary to-primary py-8 px-10 md:px-12 h-full w-full flex flex-col justify-between text-white">
      <Section1 />
    </div>
  )
}

const Section1 = () => {
  return (
    <div className="flex flex-wrap translate-y shrink-0 gap-20">
      <AnimatedFooter />
    </div>
  )
}


