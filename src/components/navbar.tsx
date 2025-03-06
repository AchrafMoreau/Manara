"use client"

import type React from "react"

import { forwardRef, useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./ui/toggel-mode"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme() // Get current theme (light/dark)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // Change color after 50px scroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 py-3 px-6 flex justify-between items-center ${
        isScrolled
          ? theme === "dark"
            ? "bg-black shadow-md" 
            : "bg-white shadow-md" 
          : "bg-transparent text-white" 
      } `}
    >
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/logo_sm.png"
          alt="Manara Water Consulting"
          height={50}
          width={50}
        />
        <p className="font-medium text-primary">Manara Water <span className="text-gray-700 dark:text-gray-300">Consulting</span></p>
      </Link>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md text-white service p-6 no-underline outline-none focus:shadow-md"
                        href="/services"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Overview</div>
                        <p className="text-sm leading-tight text-gray-100 capitalize">
                          Expertise & Innovation Pour Relever Les Defis Lies Au Developpement Durable.  💧🌍
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/services/FormationsSIG" title="Formations SIG & Renforcement des Capacités">
                    Nous offrons des formations professionnelles en SIG et sur les pratiques durables et la gestion des ressources en eau pour les cadres et personnels techniques. Nos formations sont personnalisées pour répondre aux besoins de chaque volet.
                  </ListItem>
                  <ListItem href="/services/EtudedesNappes" title="Étude des Nappes & Cours d'Eau">
                    Our Water Services Coordination capabilities are integral to projects ranging from urban developments and transport infrastructure to large-scale industrial and commercial ventures. By delivering innovative and future-ready water solutions, we contribute to smarter, greener, and more connected communities.
                  </ListItem>
                  <ListItem href="/services/Reetulisation" title="Réetulisation des eaux usées">
                    Nous proposons des stratégies de gestion des déchets pour réduire l'empreinte carbone et promouvoir le recyclage des eaux usées.
                  </ListItem>
                  <ListItem href="/services/Protection" title="Protection contre les inondations">
                    Concevons des infrastructures innovantes pour atténuer les effets des inondations, telles que les systèmes de drainage et les digues. 
                  </ListItem>
                  <ListItem href="/services/Assainissement" title="Services d'Assainissement">
                    Etudes approfondies des besoins locaux en matière d'assainissement et y répondre de manière ciblée. Concevoir des systèmes d'assainissement adaptés aux contextes locaux, visant à améliorer l'hygiène et la santé publique & Offres  de smart solutions  pour l’optimisation du traitement des eaux usées en conformité aux  normes environnementales.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent `}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact-us" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-2">
        <ModeToggle />

        {/* Mobile Menu Button - Only visible on mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] pr-0">
            <div className="mt-8 flex flex-col gap-4">
              <div className="px-2 py-4">
                <h3 
                  className={`font-medium mb-2 text-2xl text-primary hover:text-primary/80"
                    ${pathname === "/services/**" ? "text-secondary " : ""}
                  `}>
                    Our Solutions
                </h3>
                <div className="pl-4 flex flex-col gap-2">
                  <Link
                    href="/services"
                    className={`text-muted-foreground hover:text-foreground transition-colors"
                      ${pathname === "/services" ? "text-secondary font-bold" : ""}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/services/FormationsSIG"
                    className={`text-muted-foreground hover:text-foreground transition-colors"
                      ${pathname === "/services/FormationsSIG" ? "text-secondary font-bold" : ""}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    Formations SIG & Renforcement des Capacités
                  </Link>
                  <Link
                    href="/services/EtudedesNappes"
                    className={`text-muted-foreground hover:text-foreground transition-colors"
                      ${pathname === "/services/EtudedesNappes" ? "text-secondary font-bold" : ""}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    Étude des Nappes & Cours d'Eau
                  </Link>
                  <Link
                    href="/services/Reetulisation"
                    className={`text-muted-foreground hover:text-foreground transition-colors"
                      ${pathname === "/services/Reetulisation" ? "text-secondary font-bold" : ""}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    Réetulisation des eaux usées
                  </Link>
                  <Link
                    href="/services/Assainissement"
                    className={`text-muted-foreground hover:text-foreground transition-colors"
                      ${pathname === "/services/Assainissement" ? "text-secondary font-bold" : ""}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    Services d'Assainissement
                  </Link>
                  <Link
                    href="/services/Protection"
                    className={`text-muted-foreground hover:text-foreground transition-colors"
                      ${pathname === "/services/Protection" ? "text-secondary font-bold" : ""}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    Protection contre les inondations
                  </Link>
                </div>
              </div>


              <div className="px-2 py-4 flex flex-col gap-2">
                <Link
                  href="/projects"
                  className={`text-2xl font-medium text-primary hover:text-primary/80 transition-colors"
                    ${pathname === "/projects" ? "text-secondary font-bold" : ""}
                  `}

                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/about-us"
                  className={`text-2xl font-medium text-primary hover:text-primary/80 transition-colors"
                    ${pathname === "/about-us" ? "text-secondary font-bold" : ""}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact-us"
                  className={`text-2xl font-medium text-primary hover:text-primary/80 transition-colors"
                    ${pathname === "/contact-us" ? "text-secondary font-bold" : ""}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

const ListItem = forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export default Navbar;

