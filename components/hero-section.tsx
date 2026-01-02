import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 bg-background overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-primary/10 rounded-full animate-pulse-slow pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Iot | Embedded Systems | Automation</p>
              <h1 className="text-huge font-serif text-foreground">IoT</h1>
            </div>

            <div className="space-y-2">
              <h1 className="text-huge font-serif text-foreground">Developer</h1>
            </div>

            <div className="space-y-6 pt-8 max-w-xl">
              <p className="text-foreground/60 text-lg leading-relaxed">
                Hello, I'm <span className="font-medium text-foreground">Abdessamad ASKLOU</span>.
              </p>
              <p className="text-foreground/60 text-base leading-relaxed">
                I work with businesses to develop ideas into practical and enjoyable embedded solutions. Building IoT
                systems, firmware, and connected devices are the major things I'm concentrating on when it comes to
                hardware and software integration.
              </p>
              <div className="pt-2">
                <p className="text-sm font-medium text-foreground mb-3">My fields of expertise</p>
                <p className="text-foreground/60 text-base leading-relaxed">
                  Embedded Systems / IoT Development / Automation
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:justify-self-end w-full max-w-sm">
            <div className="relative w-full aspect-[4/5] group">
              <Image
                src="/pic.png.bak"
                alt="Abdessamad ASKLOU"
                fill
                className="object-cover transition-all duration-700 ease-in-out hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="mt-8">
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-between group border-foreground/20 hover:bg-foreground hover:text-background bg-transparent"
                asChild
              >
                <a href="/Abdessamad ASKLOU CV.pdf" download>
                  <span className="text-sm uppercase tracking-wider">Download CV</span>
                  <Download className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
