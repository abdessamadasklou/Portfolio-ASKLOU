import { Lightbulb, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-primary rounded-2xl shadow-lg shadow-primary/30">
            <Lightbulb className="h-6 w-6 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </div>

        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <div className="relative pl-6 border-l-4 border-primary">
            <p>
              I am currently a 2nd-year Master's student in Computer Engineering and Embedded Systems at Université Ibn
              Zohr, Agadir. My passion lies in the intersection of hardware and software, where I focus on creating
              intelligent, automated solutions for real-world problems.
            </p>
          </div>

          <div className="bg-accent/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-accent">
            <div className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-accent-foreground flex-shrink-0 mt-1" />
              <p className="text-accent-foreground">
                With hands-on experience in industrial automation, IoT device development, and distributed systems, I
                bring a unique blend of theoretical knowledge and practical expertise. I thrive on challenges that
                require innovative thinking and technical problem-solving.
              </p>
            </div>
          </div>

          <p>
            Beyond academics, I enjoy exploring new technologies, contributing to open-source projects, and staying
            updated with the latest developments in embedded systems and automation.
          </p>
        </div>
      </div>
    </section>
  )
}
