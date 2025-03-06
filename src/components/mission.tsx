'use client'
import { useRef } from "react";
import { Title } from "./title";
import { LinkPreview } from "./ui/link-preview";
import { motion, useScroll, useTransform } from "motion/react";

function Mission() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
    return(
        <div ref={ref} className="mt-[150px] py-10 flex justify-center items-center min-h-3/4 w-full " >
            <motion.div style={{ opacity, y, scale }}>
                <div className="mission mx-10 md:mx-20 shadow-xl h-full md:h-[70vh] text-white border-l border-blue-300 py-10 md:py-0 md:px-10 flex flex-col justify-center items-center rounded-xl">
                    <Title title="Our Mission" axAuto={true} titleClass="from-secondary via-secondary/80 to-earthLight" borderClass="bg-earthLight"/>
                    <p className="text-center text-xl mx-5 md:w-[80%] mb-10">
                    Chez {" "}
                    <LinkPreview
                        url="/"
                        isStatic
                        imageSrc="/logo.png"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-earth to-secondary"
                    >
                        Manara Water Consulting,
                    </LinkPreview>{" "}
                    nous nous engageons à fournir des solutions durables et innovantes pour relever les défis liés à la gestion de l’eau. Notre mission est d’assurer une utilisation responsable et efficace des 
                    ressources hydriques en proposant des services spécialisés en, {" "} 
                    <LinkPreview
                        url="https://fr.wikipedia.org/wiki/Gestion_de_l%27eau#:~:text=La%20gestion%20de%20l'eau,de%20vue%20qualitatif%20et%20quantitatif"
                        isStatic
                        imageSrc="/gestion_eau.jpg"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-earth to-secondary"
                    >
                        gestion des eaux 
                    </LinkPreview>{", "}
                    <LinkPreview
                        url="https://fr.wikipedia.org/wiki/Protection_de_l%27eau"
                        isStatic
                        imageSrc="/conservation.jpg"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-earth to-secondary"
                    >
                        conservation 
                    </LinkPreview>{", "}
                    <LinkPreview
                        url="https://fr.wikipedia.org/wiki/Assainissement"
                        imageSrc="/assainissement.jpg"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-earth to-secondary"
                        isStatic
                    >
                        assainissement 
                    </LinkPreview>{" "}
                    et {" "}
                    <LinkPreview
                        url="https://en.wikipedia.org/wiki/Urban_resilience"
                        isStatic
                        imageSrc="/résilience_urbaine.jpg"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-earth to-secondary"
                    >
                        résilience urbaine.
                    </LinkPreview>{" "}
                    Grâce à notre expertise en hydraulique, géophysique et modélisation avancée, nous accompagnons les collectivités, entreprises et organisations dans la mise en place de stratégies adaptées aux enjeux environnementaux actuels. Nous croyons en une approche collaborative et performante pour assurer un avenir durable, où l’eau reste une ressource accessible, préservée et sécurisée pour tous.
                    </p>
                </div>
            </motion.div>
    
        </div>
    
    )
}

export default Mission;