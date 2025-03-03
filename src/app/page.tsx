import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import FocusCards from "@/components/ui/focuse-card";
import Intro from "@/components/intro";
import Section from "@/components/sections";
import Contact from "@/components/contact";
import  OurClients  from "@/components/clinets";
import prisma from "@/server/db";


const getLastProject = async () => {
  return await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc', 
    },
    take: 3,
  });
}

export default async function Home() {
  const projects = await getLastProject();
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
          <InteractiveHoverButton className="shadow-xl text-black dark:text-white">Discover Our Solution</InteractiveHoverButton>
        </div>
        <div className="hidden shadow-xl w-[400px] p-10 md:flex flex-col note rounded-t-[2vw]">
          <p>Do you plan water?</p>
          <h4 className="leading-none py-3">
            Additional training as a building services planner specializing in sanitation
          </h4>
          <p>see more</p>
        </div>
    </div>
    <OurClients />
    <FocusCards cards={projects} />
    <div className="mt-[150px] py-10 flex justify-center items-center min-h-3/4 w-full ">
      <div className="mission mx-10 md:mx-20 shadow-xl h-[70vh] text-white border-l border-blue-300 px-10 flex flex-col justify-center items-center rounded-xl">
        <h3 className="font-bold leading-[1] mb-5">Notre mission</h3>
        <p className="text-center mx-5 md:w-[50%] font-bold mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vitae dolorum voluptate laudantium rerum quibusdam consequatur, reiciendis voluptatibus quis ullam, nemo ipsum cumque nesciunt explicabo magni corrupti dignissimos nobis. Incidunt.
        </p>
        <InteractiveHoverButton className="text-foreground ">See More</InteractiveHoverButton>
      </div>
    </div>
    

    <div className="">
      <Intro />
      <div className='h-screen'></div>
      <Section />
      <Contact />
    </div>
    </>
  );
}

