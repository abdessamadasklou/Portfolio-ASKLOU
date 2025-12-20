import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const companyLogos: Record<string, string> = {
  "POWER INTEGRATION": "/2Q.png",
  "PLASTIC OMNIUM": "/Plastic_Omnium.svg.png",
  "ORDIKAZION INFORMATIQUE": "/ordika.jpg",
}

const experiences = [
  {
    title: "Automatisation Engineer Intern",
    company: "POWER INTEGRATION",
    location: "Casablanca, Maroc",
    period: "April 2022 - June 2022",
    description: "Automated a pumping station through detailed system analysis and simulation.",
    achievements: [
      "Conducted comprehensive study to identify automation requirements",
      "Verified and simulated results using ISPsoft software",
    ],
    skills: ["Grafcet", "LADDER", "ISPsoft", "Industrial Automation"],
  },
  {
    title: "Observation Intern",
    company: "PLASTIC OMNIUM",
    location: "Kenitra, Maroc",
    period: "July 2021 - August 2021",
    description: "Conducted inventory management and research on new factory projects.",
    achievements: [
      "Completed inventory of printers and scanners across all factory units",
      "Researched and documented new project opportunities",
    ],
    skills: ["Process Observation", "Team Collaboration", "Documentation"],
  },
  {
    title: "Assistant Operator",
    company: "ORDIKAZION INFORMATIQUE",
    location: "Casablanca, Maroc",
    period: "Summers 2018, 2019, 2020",
    description: "Provided technical support for computer hardware installation and repair.",
    achievements: [
      "Installed and repaired desktop and laptop computers",
      "Diagnosed hardware issues and provided solutions",
    ],
    skills: ["Hardware Maintenance", "Technical Support", "PC Repair"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-4 bg-muted/30">
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-secondary/20 rounded-lg border border-secondary/50 tech-glow">
            <Briefcase className="h-6 w-6 text-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-secondary">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-card/90 backdrop-blur-sm border border-border hover:border-secondary transition-all hover:shadow-xl hover:shadow-secondary/20 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-balance font-mono">{exp.title}</CardTitle>
                    <div className="flex items-center gap-3 mt-2">
                      <img
                        src={companyLogos[exp.company] || "/placeholder.svg"}
                        alt={exp.company}
                        className="h-8 object-contain"
                      />
                      <CardDescription className="text-base text-secondary font-medium font-mono">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-mono">
                    <div className="font-medium">{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30 font-mono text-xs"
                    >
                      {skill}
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
