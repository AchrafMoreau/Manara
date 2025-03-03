/** 
interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "/logo.png",
    alt: "",
    title: "Logo",
    url: "https://www.shadcnblocks.com",
  },
  tagline = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id nostrum cupiditate voluptatibus esse? Eum eos tempore eligendi numquam libero totam, quae distinctio. Optio sint ducimus tempora sunt iusto impedit.",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Overview", url: "#" },
        { text: "Pricing", url: "#" },
        { text: "Marketplace", url: "#" },
        { text: "Features", url: "#" },
        { text: "Integrations", url: "#" },
        { text: "Pricing", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "#" },
        { text: "Team", url: "#" },
        { text: "Blog", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Contact", url: "#" },
        { text: "Privacy", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Help", url: "#" },
        { text: "Sales", url: "#" },
        { text: "Advertise", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],
  copyright = "© 2024 Copyright. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) => {

    return (
      <section className='bg-[#4E4E5A] py-20 px-12 h-full w-full flex flex-col justify-between'>
        <div className="">
          <footer className="">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              <div className="col-span-2 mb-8 lg:mb-0">
                <div className="flex items-center gap-2 lg:justify-start">
                  <a href="https://shadcnblocks.com">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      title={logo.title}
                      className="h-10"
                    />
                  </a>
                  <p className="text-xl font-semibold">{logo.title}</p>
                </div>
                <p className="mt-4">{tagline}</p>
              </div>
              {menuItems.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.url}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
              <p>{copyright}</p>
              <ul className="flex gap-4">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx} className="underline hover:text-primary">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </footer>
        </div>
      </section>
  );
};

export { Footer };
**/

"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import AnimatedFooter from "./animated-footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <div 
      className='relative h-[700px] md:h-[400px] mt-20'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[700px] md:h-[400px] w-full'>
        <Content />
      </div>
    </div>
  )
}

function Content() {
  return (
    <div className="bg-gradient-to-br from-secondary to-primary py-8 px-10 md:px-12 h-full w-full flex flex-col justify-between text-white">
      <Section1 />
      <Section2 />
    </div>
  )
}

const Section1 = () => {
  return (
    <div >
      <Nav />
    </div>
  )
}

const Section2 = () => {
    const socialLinks = [
    { name: "Facebook", icon: faFacebook, url: "https://facebook.com" },
    { name: "Twitter", icon: faTwitter, url: "https://twitter.com" },
    { name: "Instagram", icon: faInstagram, url: "https://instagram.com" },
    { name: "LinkedIn", icon: faLinkedin, url: "https://linkedin.com" },
  ]

  return (
    <div className="flex flex-col md:flex-row justify-between items-end ">
      <motion.h1
        className="text-6xl pb-5 leading-[0.8] bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Manara Water Consulting
      </motion.h1>
      <div className="flex flex-col items-end gap-4">
        <div className="flex gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-purple-300 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={social.icon} />
            <span className="sr-only">{social.name}</span>
          </motion.a>
        ))}

        </div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}>
          ©2025 Manara Water Consulting. All rights reserved.
        </motion.p>
      </div>
    </div>
  )
}

const Nav = () => {
  return (
    <div className="flex flex-wrap translate-y shrink-0 gap-20">
      <AnimatedFooter />
    </div>
  )
}

