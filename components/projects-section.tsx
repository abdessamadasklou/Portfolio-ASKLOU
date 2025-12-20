import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Rocket } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Smart Door Locking System",
    period: "February 2022 - June 2022",
    description: "Intelligent door lock system using ESP32-CAM and Blynk Cloud platform.",
    features: [
      "Presence detection with automatic image capture via Wi-Fi",
      "Remote lock/unlock control through mobile app",
      "Real-time notifications to smartphone",
    ],
    technologies: ["ESP32-CAM", "Blynk", "Wi-Fi", "IoT"],
  },
  {
    title: "Warehouse Temperature Monitoring System",
    period: "April 2025 - May 2025",
    description: "Distributed system for real-time temperature and humidity monitoring in warehouses.",
    features: [
      "DHT11 sensor simulation with Proteus connected to central server",
      "Web dashboard for data visualization and threshold configuration",
      "Real-time alerts and user management system",
    ],
    technologies: ["Java RMI", "Spring Boot", "Proteus", "DHT11"],
    link: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-4 bg-accent/10">
      <div className="absolute inset-0 mesh-gradient opacity-40" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-primary rounded-2xl shadow-lg shadow-primary/30 animate-pulse">
            <Rocket className="h-6 w-6 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/90 backdrop-blur-sm border-2 border-border hover:border-accent transition-all hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-2xl text-balance">{project.title}</CardTitle>
                    <CardDescription className="text-base text-foreground/60">{project.period}</CardDescription>
                  </div>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">View project</span>
                    </Link>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">{project.description}</p>

                <div className="bg-muted/50 rounded-xl p-4 border-l-4 border-secondary">
                  <h4 className="font-semibold text-secondary-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-secondary mt-1">●</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} className="bg-primary text-primary-foreground border-0 shadow-md">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
