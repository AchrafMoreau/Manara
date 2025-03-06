import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import FocusCards from "@/components/ui/focuse-card";
import Intro from "@/components/intro";
import Section from "@/components/sections";
import Contact from "@/components/contact";
import  OurClients  from "@/components/clinets";
import prisma from "@/server/db";
import { Title } from "@/components/title";
import { LinkPreview } from "@/components/ui/link-preview";
import Mission from "@/components/mission";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const getLastProject = async () => {
  return await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc', 
    },
    include:{
      category: true
    },
    take: 3,
  });
}


export default async function Home() {
  const projects = await getLastProject();
  console.log(projects)
  return (
    <>
    <div className="flex text-white flex-col hero h-[90vh] justify-center items-start rounded-b-[2vw] ">
        <TextAnimate className="text ml-10 text-7xl text-wrap leading-none" animation="blurInUp" by="character" once as="h1">
          Manara 
        </TextAnimate>
        <TextAnimate className="text ml-10 text-7xl text-wrap leading-none" animation="blurInUp" by="word" once as="h1">
          Water 
          Consulting
        </TextAnimate>
        <div className="mt-4 ml-10">
          <Link href="/services">
            <InteractiveHoverButton className="shadow-xl text-black dark:text-white">Discover Our Solution</InteractiveHoverButton>
          </Link>
        </div>
        <div className="hidden shadow-xl w-[400px] p-10 md:flex flex-col note rounded-t-[2vw]">
          <p>Besoin d’une Expertise ?</p>
          <h5 className="leading-none py-3 ">
            Nos experts vous accompagnent dans vos projets de gestion de l’eau et d’assainissement. Contactez-nous pour une étude personnalisée.
          </h5>
          <Link href="/contact-us">
            <Button variant="link" className="text-white self-start text-md">See More</Button>
          </Link>
        </div>
    </div>
    <OurClients />

    <div className="projects mt-12 mx-10 md:mx-20 ">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5 text-foreground">
        <Title title="Last projects" />
        <Link href="/projects">
          <InteractiveHoverButton className="shadow-xl">See More Projects</InteractiveHoverButton>
        </Link>
      </div>
      <FocusCards cards={projects} />
    </div>
      
    <Mission />
    <div className="">
      <Intro />
      <div className='h-screen'></div>
      <Section />
      <Contact />
    </div>
    </>
  );
}

