import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const fetchCategory = await prisma.category.findMany();

  if (fetchCategory.length === 0) {
    throw new Error("No categories found. Please seed categories first.");
  }
  const projects = Array.from({ length: 20 }).map((_, index) => {
    const randomCategory = fetchCategory[Math.floor(Math.random() * fetchCategory.length)];

    return {
      title: "Water Infrastructure Upgrade",
      thumbnail: "water_consulting.jpg",
      image: ["infra1.jpg", "infra2.jpg"],
      client: "City of Agadir",
      location: "Agadir, Morocco",
      commenced: "2022-05-10",
      completion: "2023-09-15",
      categoryId: randomCategory.id,
      description: "The Water Infrastructure Upgrade project focused on modernizing the city's aging pipeline system to improve water quality, reduce waste, and enhance supply efficiency. By implementing advanced leak detection systems, upgrading outdated piping materials, and integrating smart monitoring technology, we ensured that water loss due to infrastructure failures was significantly minimized. The project also included comprehensive assessments of pressure points, identifying weak areas prone to bursts and corrosion, followed by targeted replacements and reinforcements.",
      solution: "Our solution involved deploying high-density polyethylene (HDPE) pipes, known for their durability and resistance to corrosion. Additionally, we introduced AI-driven predictive maintenance tools that analyze flow rates and pressure variations in real time, allowing for proactive issue resolution before critical failures occur. We also worked closely with the municipality to create an ongoing maintenance plan, ensuring sustainable infrastructure performance for years to come.",
      impact: "This upgrade drastically improved water accessibility and reduced wastage by 30%, benefiting over 500,000 residents. The city's response to seasonal droughts has significantly improved, with a notable decrease in emergency maintenance costs. Furthermore, the modernization efforts have led to a reduction in service disruptions, ensuring households and businesses have a reliable water supply throughout the year.",
    }
  })

  await prisma.project.createMany({
    data: projects
  })

  console.log("✅ Database seeded successfully with long-form data!");
  return 0;



  const categories = [
    {
      name: "Ressources en Eau",
      icon: "Droplet",
      color: "bg-blue-100 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/50",
      activeColor: "bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500",
    },
    {
      name: "Développement Durable",
      icon: "Leaf",
      color:
        "bg-green-100 text-green-600 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/50",
      activeColor: "bg-green-600 text-white border-green-600 dark:bg-green-500 dark:border-green-500",
    },
    {
      name: "Infrastructures",
      icon: "PackageIcon",
      color: "bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-700/50",
      activeColor: "bg-gray-600 text-white border-gray-600 dark:bg-gray-500 dark:border-gray-500",
    },
    {
      name: "Protection Inondations",
      icon: "Waves",
      color: "bg-blue-100 text-blue-500 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800/50",
      activeColor: "bg-blue-500 text-white border-blue-500 dark:bg-blue-400 dark:border-blue-400",
    },
    {
      name: "Innovation",
      icon: "Lightbulb",
      color:
        "bg-yellow-100 text-yellow-600 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800/50",
      activeColor: "bg-yellow-500 text-white border-yellow-500 dark:bg-yellow-400 dark:border-yellow-400",
    },
    {
      name: "Études & Formations",
      icon: "GraduationCap",
      color:
        "bg-purple-100 text-purple-600 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800/50",
      activeColor: "bg-purple-600 text-white border-purple-600 dark:bg-purple-500 dark:border-purple-500",
    },
  ]

  await prisma.category.createMany({
    data: categories
  })

}

// Execute seed function
main()
  .catch((error) => {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
