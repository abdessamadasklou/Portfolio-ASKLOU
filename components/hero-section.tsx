import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
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

          <div className="relative lg:justify-self-end">
            <div className="relative w-full max-w-xl aspect-[3/4] bg-muted">
              <Image
                src="/pic.png"
                alt="Abdessamad ASKLOU"
                fill
                className="object-cover grayscale"
                priority
              />
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
