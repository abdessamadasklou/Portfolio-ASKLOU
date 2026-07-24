"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/contexts"

export function ContactSection() {
  const { language } = useLanguage()
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-px bg-primary" />
              <h2 className="text-6xl lg:text-7xl font-serif text-foreground">
                {language === 'fr' ? 'Contactez-moi' : 'Let\'s get in touch'}
              </h2>
            </div>

            <p className="text-lg text-foreground/60 leading-relaxed max-w-xl">
              {language === 'fr'
                ? "Vous avez un projet ? N'hésitez pas à me contacter si vous souhaitez collaborer sur quelque chose d'intéressant. Petit ou grand. Mobile ou embarqué."
                : "Got a project? Drop me a line if you want to work together on something exciting. Big or small. Mobile or embedded."}
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-foreground/20 hover:bg-foreground hover:text-background text-base px-8 bg-transparent"
              >
                <a href="mailto:abdessamad.asklou@uit.ac.ma">
                  {language === 'fr' ? 'Discutons de votre projet ☕' : 'Let\'s discuss your project ☕'}
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Link
              href="mailto:abdessamad.asklou@uit.ac.ma"
              className="flex items-center justify-between p-6 border-b border-foreground/10 hover:bg-secondary/20 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-foreground/60 group-hover:text-primary transition-colors" />
                <span className="text-foreground/80">abdessamad.asklou@uit.ac.ma</span>
              </div>
            </Link>

            <Link
              href="tel:+212639607455"
              className="flex items-center justify-between p-6 border-b border-foreground/10 hover:bg-secondary/20 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-foreground/60 group-hover:text-primary transition-colors" />
                <span className="text-foreground/80">(+212) 639 60 74 55</span>
              </div>
            </Link>

            <div className="pt-8">
              <p className="text-sm text-foreground/60 mb-4">{language === 'fr' ? 'Retrouvez-moi sur' : 'Find me on'}</p>
              <div className="flex gap-6">
                <Link
                  href="https://github.com/abdessamadasklou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors group"
                >
                  <Github className="h-5 w-5" />
                  <span className="text-sm">GitHub</span>
                  <span className="text-xs group-hover:translate-x-1 transition-transform">@abdessamadasklou</span>
                </Link>
              </div>
              <div className="flex gap-6 mt-4">
                <Link
                  href="https://www.linkedin.com/in/abdessamad-asklou-023a15181/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors group"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm">LinkedIn</span>
                  <span className="text-xs group-hover:translate-x-1 transition-transform">@abdessamad-asklou</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-foreground/10 text-center">
          <p className="text-sm text-foreground/50">
            {language === 'fr' ? '© 2025 Abdessamad ASKLOU. Tous droits réservés.' : '© 2025 Abdessamad ASKLOU. All rights reserved.'}
          </p>
        </footer>
      </div>
    </section>
  )
}
