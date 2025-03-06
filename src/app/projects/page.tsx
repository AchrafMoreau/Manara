import ProjectsFilter from "@/components/projects-filter"
import prisma from "@/server/db"
import { FadeIn } from "@/components/ui/motion";
import ThreeSections from "@/components/project-three-section";
import { Title } from "@/components/title";

const getProject = async () => {
  return await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc', 
    },
    include:{
      category: true
    },
  });
}

const getCategories = async () => {
  return await prisma.category.findMany();
}

export default async function Home() {
  const categories = await getCategories();
  const projects = await getProject();


  return (
    <>
      <ThreeSections />

      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-muted/50 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <Title title="Nos Projets Récents" axAuto={true} titleClass="mx-auto text-center"/>
            <p className="text-muted-foreground text-lg">
              Découvrez quelques-unes de nos réalisations récentes dans le domaine de la gestion de l'eau.
            </p>
          </FadeIn>

            <ProjectsFilter categories={categories} projects={projects} />
        </div>
      </section>

    </>
  )
}

