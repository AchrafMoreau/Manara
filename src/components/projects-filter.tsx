"use client"
import * as LucideIcons from "lucide-react";
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Droplet, Leaf, PackageIcon, Waves, Lightbulb, GraduationCap, ArrowRight, ThumbsDown } from "lucide-react"
import { FadeIn } from "@/components/ui/motion"
import FocusCards from "./ui/focuse-card"
import { CategoryType, ProjetType } from "@/lib/types"



export default function ProjectsFilter({ projects, categories }: {projects : ProjetType[], categories: CategoryType[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [visibleProjects, setVisibleProjects] = useState<typeof projects>([])
  const [displayedCount, setDisplayedCount] = useState(6)
  const [filteredProjects, setFilteredProjects] = useState<typeof projects>([])

  // Initialize with first 6 projects
  useEffect(() => {
    filterProjects(activeCategory)
  }, [activeCategory])

  // Filter projects based on selected category
  const filterProjects = (category: string | null) => {
    console.log(projects)
    const filtered = category ? projects.filter((project) => project.category.id === category) : projects

    setFilteredProjects(filtered)
    setVisibleProjects(filtered.slice(0, displayedCount))
  }

  const handleCategoryChange = (categoryId: string) => {
    const newCategory = activeCategory === categoryId ? null : categoryId
    setActiveCategory(newCategory)
    setDisplayedCount(6) 
  }

  const loadMore = () => {
    const newCount = displayedCount + 6
    setDisplayedCount(newCount)
    setVisibleProjects(filteredProjects.slice(0, newCount))
  }



  return (
    <div>
      {/* Filter buttons */}
      <div className="mb-10">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button
            onClick={() => handleCategoryChange("")}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === null
                ? "bg-primary text-white border-primary"
                : "bg-muted/50 text-muted-foreground border-border hover:bg-muted"
            }`}
          >
            Tous les projets
          </button>

          {categories.map((category) => {

            const Icon = LucideIcons[category.icon as keyof typeof LucideIcons] || LucideIcons.HelpCircle;
            return(
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors flex items-center gap-2 ${
                  activeCategory === category.id ? `${category.activeColor}` : `${category.color} hover:opacity-80`
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </button>
            )
          }

          )}
        </div>
      </div>

      {/* Projects grid */}
      <div className="">
        <AnimatePresence mode="wait">
          {visibleProjects.length > 0 ? (
            <FocusCards cards={visibleProjects} />
           
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-muted-foreground text-lg">Aucun projet ne correspond à cette catégorie.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Load more button */}
      {visibleProjects.length < filteredProjects.length && (
        <FadeIn className="text-center mt-12">
          <Button onClick={loadMore} variant="outline" size="lg" className="group">
            Voir plus de projets
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: 0 }}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="ml-2"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Button>
        </FadeIn>
      )}
    </div>
  )
}

