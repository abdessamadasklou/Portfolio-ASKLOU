"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-b-minimal" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/AS logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="w-16 h-16 object-contain"
            />
          </Link>

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
              href="https://linkedin.com/in/abdessamad-asklou"
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
          </div>
        </div>
      </div>
    </nav>
  )
}
