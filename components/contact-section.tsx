import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-4 bg-primary/5">
      <div className="absolute inset-0 mesh-gradient opacity-60" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {
              "I'm currently seeking internship opportunities starting February 2026. Let's create something amazing together!"
            }
          </p>
        </div>

        <Card className="bg-card/90 backdrop-blur-sm border-2 border-primary/30 shadow-2xl shadow-primary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{"Let's Connect"}</CardTitle>
            <CardDescription className="text-base">
              {"Feel free to reach out through any of these channels"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="mailto:abdessamad.asklou@uit.ac.ma"
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-primary/30 bg-primary/5 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30 group"
              >
                <div className="p-3 bg-primary rounded-xl group-hover:bg-primary-foreground/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary-foreground group-hover:text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">Email</div>
                  <div className="text-sm opacity-80">abdessamad.asklou@uit.ac.ma</div>
                </div>
              </Link>

              <Link
                href="tel:+212639607455"
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-secondary/30 bg-secondary/5 hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-secondary/30 group"
              >
                <div className="p-3 bg-secondary rounded-xl group-hover:bg-secondary-foreground/20 transition-colors">
                  <Phone className="h-6 w-6 text-secondary-foreground group-hover:text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">Phone</div>
                  <div className="text-sm opacity-80">(+212) 639 60 74 55</div>
                </div>
              </Link>

              <Link
                href="https://linkedin.com/in/abdessamad-asklou"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-accent/30 bg-accent/5 hover:bg-accent hover:text-accent-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/30 group"
              >
                <div className="p-3 bg-accent rounded-xl group-hover:bg-accent-foreground/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-accent-foreground group-hover:text-accent-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">LinkedIn</div>
                  <div className="text-sm opacity-80">abdessamad-asklou</div>
                </div>
              </Link>

              <Link
                href="https://github.com/abdessamadasklou"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-foreground/20 bg-foreground/5 hover:bg-foreground hover:text-background transition-all hover:scale-105 hover:shadow-lg hover:shadow-foreground/20 group"
              >
                <div className="p-3 bg-foreground rounded-xl group-hover:bg-background/20 transition-colors">
                  <Github className="h-6 w-6 text-background group-hover:text-background" />
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">GitHub</div>
                  <div className="text-sm opacity-80">abdessamadasklou</div>
                </div>
              </Link>
            </div>

            <div className="pt-6 flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:-translate-y-1 text-lg px-8"
              >
                <Link href="mailto:abdessamad.asklou@uit.ac.ma">
                  <Send className="mr-2 h-5 w-5" />
                  Send a Message
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-12 pt-8 border-t-2 border-border text-center text-sm text-foreground/60">
          <p className="font-medium">© 2025 Abdessamad ASKLOU. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
