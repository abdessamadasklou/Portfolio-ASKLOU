import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const universityLogos: Record<string, string> = {
  "Université Ibn Zohr, Agadir": "/logo tamayouz transparent.png",
  "Université IBN TOFAIL, Kenitra": "/images.png",
  "Groupe scolaire HANAA, Casablanca": "/hane.png",
}

const education = [
  {
    degree: "Master's in Computer Engineering and Embedded Systems",
    program: "Excellence Program",
    institution: "Université Ibn Zohr, Agadir",
    period: "2024 - 2026 (Expected)",
  },
  {
    degree: "Bachelor's in Computer Engineering and Embedded Systems",
    program: "Excellence Program",
    institution: "Université Ibn Zohr, Agadir",
    period: "2024 - 2025",
  },
  {
    degree: "Bachelor's in Physical Sciences",
    program: "3rd Year",
    institution: "Université IBN TOFAIL, Kenitra",
    period: "2022 - 2023",
  },
  {
    degree: "University Technology Diploma in Industrial Computing and Automated Systems",
    institution: "Université IBN TOFAIL, Kenitra",
    period: "2020 - 2022",
  },
  {
    degree: "Baccalaureate in Physical Sciences",
    institution: "Groupe scolaire HANAA, Casablanca",
    period: "2019 - 2020",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 px-4">
      <div className="absolute inset-0 circuit-pattern opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-lg blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-lg blur-3xl animate-float-delayed" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-accent/20 rounded-lg border border-accent/50 tech-glow">
            <GraduationCap className="h-6 w-6 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-accent">Education</h2>
        </div>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-card/90 backdrop-blur-sm border border-border hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/20 hover:-translate-x-2"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg border border-accent/30">
                    <img
                      src={universityLogos[edu.institution] || "/placeholder.svg"}
                      alt={edu.institution}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-balance leading-snug font-mono">{edu.degree}</CardTitle>
                    {edu.program && (
                      <CardDescription className="text-accent font-semibold font-mono">{edu.program}</CardDescription>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium text-right whitespace-nowrap font-mono">
                    {edu.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground pl-16 font-mono text-sm">{edu.institution}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
