import { motion } from "motion/react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const CTASection = ({title, description, button} : {title: string, description: string, button: string}) => {
  
  const handelClick = ()=>{
    console.log("heleo")
  }

    return(
        <motion.div 
          className="mt-20 p-8 rounded-xl bg-gradient-to-r from-secondary to-primary text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-secondary via-secondary/80 to-earthLight ">
                {title}
            </h3>
            <p className="text-white mb-8">
                {description}
            </p>
            <p className="text-foreground mb-8">
              <InteractiveHoverButton onClick={handelClick}>
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-3"/>
                  {button}
              </InteractiveHoverButton>
            </p>
          </div>
        </motion.div>
    )
}

export { CTASection };