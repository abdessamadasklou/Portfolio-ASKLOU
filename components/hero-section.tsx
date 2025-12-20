import { ArrowRight, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      <div className="absolute inset-0 circuit-pattern animate-circuit" />

      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-lg blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-lg blur-3xl animate-float-delayed" />

      {/* Circuit nodes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse-slow tech-glow" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary rounded-full animate-pulse-slow tech-glow" />
      <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-accent rounded-full animate-pulse-slow tech-glow" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Section */}
          <div className="space-y-6 flex-1">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/50 tech-glow">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="text-sm font-mono font-medium text-primary">IoT & Embedded Systems Engineer</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-balance leading-tight text-foreground font-mono">
              Abdessamad ASKLOU
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary font-mono">
              Building the Future of Connected Devices
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Master's student passionate about embedded systems, automation, and IoT application development. Seeking
              internship opportunities starting February 2026.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 tech-glow hover:shadow-2xl transition-all hover:-translate-y-1 font-mono"
              >
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border border-secondary text-secondary hover:bg-secondary/20 hover:text-secondary-foreground bg-transparent font-mono"
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>

          {/* Profile Photo Section */}
          <div className="relative flex-shrink-0">
            <div className="relative w-72 h-96 lg:w-80 lg:h-[450px]">
              {/* Circuit decoration around photo */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-lg" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-secondary/30 rounded-lg" />
              <div className="absolute top-1/2 -right-6 w-3 h-3 bg-accent rounded-full tech-glow animate-pulse-slow" />
              <div className="absolute bottom-1/4 -left-6 w-3 h-3 bg-primary rounded-full tech-glow animate-pulse-slow" />

              {/* Photo with gradient mask */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/50 tech-glow">
                <img
                  src="/profile-photo.jpeg"
                  alt="Abdessamad ASKLOU"
                  className="w-full h-full object-cover"
                  style={{
                    maskImage: "linear-gradient(to top, transparent 0%, black 30%)",
                    WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 30%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
