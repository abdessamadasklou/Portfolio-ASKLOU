"use client"

import { Download, Github, Linkedin, Mail, Moon, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const logoSrc = mounted && resolvedTheme === "dark" ? "/a.png" : "/AS logo.png"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-b-minimal" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-3">
        <Link href="/" className="absolute -top-4 left-6 z-50 block">
          <Image
            src={logoSrc}
            alt="Logo"
            width={120}
            height={120}
            className="w-24 h-24 object-contain"
          />
        </Link>

        <div className="flex items-center justify-end w-full gap-12">
          <div className="hidden md:flex items-center gap-12">
            <Link href="#about" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Work
            </Link>
            <Link href="#contact" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Contact
            </Link>
          </div>


          <div className="flex items-center gap-6">
            <Button variant="outline" size="sm" className="hidden sm:flex gap-2 border-foreground/20" asChild>
              <a href="/Abdessamad ASKLOU CV.pdf" download>
                <span className="uppercase tracking-wider font-normal">CV</span>
                <Download className="h-4 w-4" />
              </a>
            </Button>
            <Link
              href="https://github.com/abdessamadasklou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdessamad-asklou-023a15181/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:abdessamad.asklou@uit.ac.ma"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="text-foreground/60 hover:text-primary"
              >
                {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
