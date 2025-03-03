import { TextAnimate } from "@/components/magicui/text-animate";
import { ProjectDetails } from "@/components/project-details";
import prisma from "@/server/db";

async function getProjectById(id: string) {
  const project = await prisma.project.findUnique({
    where: { id: id },
  });
  return project;
}

export default async function Project({params} : {params: {id: string}}){
    const project = await getProjectById(params.id);

    if(!project){
        return <h1>Project Not Found !</h1>
    }

    return(
        <>
            <div className="flex text-white flex-col project h-[70vh] justify-end pb-10 items-start rounded-b-[2vw] " 
                style={{background: `linear-gradient(0deg, rgb(var(--secondary-rgb)), rgba(var(--primary-rgb), 0.7) 87.65%), url('/${project.thumbnail}')`,
                    backgroundPosition:"center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <TextAnimate className="text ml-10 text-wrap leading-none" animation="blurInUp" by="character" once as="p">
                    {project.location}
                </TextAnimate>
                <TextAnimate className="text ml-10 text-7xl text-wrap leading-none" animation="blurInUp" by="word" once as="h1">
                    {project.title}
                </TextAnimate>
            </div>
            <ProjectDetails project={project} />
        </>
    )
}