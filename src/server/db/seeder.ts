import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const projects = [
    {
      title: "Water Infrastructure Upgrade",
      thumbnail: "water_consulting.jpg",
      image: ["infra1.jpg", "infra2.jpg"],
      client: "City of Agadir",
      location: "Agadir, Morocco",
      commenced: "2022-05-10",
      completion: "2023-09-15",
      category: "Infrastructure",
      description: "The Water Infrastructure Upgrade project focused on modernizing the city's aging pipeline system to improve water quality, reduce waste, and enhance supply efficiency. By implementing advanced leak detection systems, upgrading outdated piping materials, and integrating smart monitoring technology, we ensured that water loss due to infrastructure failures was significantly minimized. The project also included comprehensive assessments of pressure points, identifying weak areas prone to bursts and corrosion, followed by targeted replacements and reinforcements.",
      solution: "Our solution involved deploying high-density polyethylene (HDPE) pipes, known for their durability and resistance to corrosion. Additionally, we introduced AI-driven predictive maintenance tools that analyze flow rates and pressure variations in real time, allowing for proactive issue resolution before critical failures occur. We also worked closely with the municipality to create an ongoing maintenance plan, ensuring sustainable infrastructure performance for years to come.",
      impact: "This upgrade drastically improved water accessibility and reduced wastage by 30%, benefiting over 500,000 residents. The city's response to seasonal droughts has significantly improved, with a notable decrease in emergency maintenance costs. Furthermore, the modernization efforts have led to a reduction in service disruptions, ensuring households and businesses have a reliable water supply throughout the year.",
    },
    {
      title: "Desalination Plant Project",
      thumbnail: "water_consulting.jpg",
      image: ["desal1.jpg", "desal2.jpg"],
      client: "Government of Morocco",
      location: "Casablanca, Morocco",
      commenced: "2021-07-01",
      completion: "2024-02-20",
      category: "Water Treatment",
      description: "This ambitious project aimed to address the growing freshwater scarcity in Casablanca by developing a large-scale desalination plant. The increasing demand for clean drinking water, coupled with depleting groundwater sources, necessitated the adoption of alternative solutions. By utilizing state-of-the-art desalination technologies, we ensured that seawater could be efficiently processed into potable water, meeting stringent health and safety standards.",
      solution: "We implemented a reverse osmosis system, known for its high efficiency in filtering out salt and impurities while maintaining cost-effective operations. The plant was also equipped with renewable energy sources, such as solar and wind power, to reduce its carbon footprint. Additionally, we designed an integrated waste management system to handle brine discharge in an environmentally friendly manner, mitigating the impact on marine ecosystems.",
      impact: "This project now provides safe drinking water to over 1 million residents. The introduction of desalination has eased the strain on groundwater reserves, ensuring long-term water sustainability. Moreover, the plant's reliance on renewable energy has significantly lowered operational costs while reducing its environmental impact, setting a precedent for future desalination initiatives across the region.",
    },
    {
      title: "Rural Water Supply Project",
      thumbnail: "water_consulting.jpg",
      image: ["rural1.jpg", "rural2.jpg"],
      client: "World Bank",
      location: "Rural Areas, Morocco",
      commenced: "2020-09-15",
      completion: "2023-08-30",
      category: "Public Utility",
      description: "Access to clean water remains a challenge for many rural communities. This project was launched to install sustainable water supply systems in remote areas where residents previously relied on unprotected sources such as rivers and wells. A comprehensive needs assessment was conducted to identify the most underserved locations, and the project was tailored to each community's specific requirements.",
      solution: "We developed solar-powered water pumping stations capable of drawing water from deep aquifers while minimizing reliance on nonrenewable energy sources. Additionally, we constructed small-scale water treatment units to remove contaminants and ensure safe drinking water. Extensive community training programs were conducted to educate residents on water conservation and system maintenance, fostering local ownership of the infrastructure.",
      impact: "Over 50,000 rural residents now have access to safe, reliable water sources. The project has drastically improved hygiene standards, reducing waterborne diseases by 60%. Additionally, by eliminating the need for long-distance water collection, women and children now have more time to pursue education and economic activities, enhancing overall community development.",
    },
     {
      title: "Underground Water Reservoir Project",
      thumbnail: "water_consulting.jpg",
      image: ["reservoir1.jpg", "reservoir2.jpg"],
      client: "National Water Authority",
      location: "Rabat, Morocco",
      commenced: "2020-04-05",
      completion: "2023-01-15",
      category: "Infrastructure",
      description: "Built underground reservoirs to store excess rainwater.",
      solution: "Developed advanced rainwater harvesting and filtration units.",
      impact: "Increased water reserves by 50% for future droughts.",
    },
    {
      title: "Agricultural Irrigation Optimization",
      thumbnail: "water_consulting.jpg",
      image: ["irrigation1.jpg", "irrigation2.jpg"],
      client: "Farmers Association",
      location: "Beni Mellal, Morocco",
      commenced: "2021-10-22",
      completion: "2023-06-30",
      category: "Agriculture",
      description: "Optimized irrigation systems to improve water efficiency.",
      solution: "Installed drip irrigation and automated water scheduling.",
      impact: "Increased crop yields by 35% and reduced water usage.",
    },
    {
      title: "Water Recycling and Reuse Program",
      thumbnail: "water_consulting.jpg",
      image: ["recycle1.jpg", "recycle2.jpg"],
      client: "Municipality",
      location: "Oujda, Morocco",
      commenced: "2019-12-10",
      completion: "2023-05-25",
      category: "Sustainability",
      description: "Created a city-wide initiative for water recycling.",
      solution: "Implemented greywater recycling for public buildings.",
      impact: "Reused 60% of wastewater for landscaping and agriculture.",
    },
    {
      title: "Hydropower Generation Project",
      thumbnail: "water_consulting.jpg",
      image: ["hydropower1.jpg", "hydropower2.jpg"],
      client: "Energy Ministry",
      location: "Atlas Mountains, Morocco",
      commenced: "2022-08-01",
      completion: "2025-12-15",
      category: "Renewable Energy",
      description: "Built a small-scale hydropower plant to generate electricity.",
      solution: "Used micro-hydro technology for efficient power generation.",
      impact: "Provided renewable energy for 100,000 homes.",
    }
  ];

  // Insert data into the database
  await prisma.project.createMany({
    data: projects,
  });

  console.log("✅ Database seeded successfully with long-form data!");
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
