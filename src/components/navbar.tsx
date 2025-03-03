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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tunnels",
    href: "/Tunnels",
    description: "Our tunnelling and underground infrastructure services span all stages of the project, from the initial planning stage, through to design, construction and operation. Our capability combines all aspects of underground works, from tunnels and shafts, through to underground caverns and structures.",
  },
  {
    title: "Water Sensitive Urban Design",
    href: "/WaterSensitiveUrbanDesign",
    description: "With over 6 years’ experience in urban development, our stormwater and integrated water management solutions provide practical and innovative outcomes for all projects from residential lots to community master planning at regional levels.",
  },
  {
    title: "Water Services Coordination",
    href: "/WaterServicesCoordination",
    description:
      "Our Water Services Coordination capabilities are integral to projects ranging from urban developments and transport infrastructure to large-scale industrial and commercial ventures. By delivering innovative and future-ready water solutions, we contribute to smarter, greener, and more connected communities.",
  },
  {
    title: "Planning",
    href: "/Planning",
    description: "Manara has an extensive range of planning expertise including masterplanning, economic and environmental planning, feasibility studies, emerging policy development, community and stakeholder management, and metropolitan and regional planning.",
  },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme() // Get current theme (light/dark)

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
      <Link href="/">
        <p>Logo</p>
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
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Manara Water Consulting</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Sustainable Water Solutions for a Thriving Future. 💧🌍
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/Planning" title="Planning">
                    Manara has an extensive range of planning expertise including masterplanning, economic and environmental planning, feasibility studies, emerging policy development, community and stakeholder management, and metropolitan and regional planning.
                  </ListItem>
                  <ListItem href="/WaterServicesCoordination" title="Water Services Coordination">
                    Our Water Services Coordination capabilities are integral to projects ranging from urban developments and transport infrastructure to large-scale industrial and commercial ventures. By delivering innovative and future-ready water solutions, we contribute to smarter, greener, and more connected communities.
                  </ListItem>
                  <ListItem href="/WaterSensitiveUrbanDesign" title="Water Sensitive Urban Design">
                    With over 6 years’ experience in urban development, our stormwater and integrated water management solutions provide practical and innovative outcomes for all projects from residential lots to community master planning at regional levels.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/About-Us" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/Contact-Us" legacyBehavior passHref>
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
                <h3 className="mb-2 font-medium">Our Solutions</h3>
                <div className="pl-4 flex flex-col gap-2">
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Manara Water Consulting
                  </Link>
                  <Link
                    href="/docs"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Introduction
                  </Link>
                  <Link
                    href="/docs/installation"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Installation
                  </Link>
                  <Link
                    href="/docs/primitives/typography"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Typography
                  </Link>
                </div>
              </div>

              <div className="px-2 py-4">
                <h3 className="mb-2 font-medium">News</h3>
                <div className="pl-4 flex flex-col gap-2">
                  {components.slice(0, 4).map((component) => (
                    <Link
                      key={component.title}
                      href={component.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {component.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-2 py-4 flex flex-col gap-2">
                <Link
                  href="/About-Us"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/Contact-Us"
                  className="font-medium hover:text-primary transition-colors"
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

// Change this line from default export to named export
export default Navbar;

