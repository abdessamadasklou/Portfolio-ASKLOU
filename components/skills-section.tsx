import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Cpu, Database, Wrench } from "lucide-react"

const skillLogos: Record<string, string> = {
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Embedded C/C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Arduino IDE": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
}

const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code2,
    color: "primary",
    skills: ["Java", "Embedded C/C++", "Python", "SQL", "VHDL", "Ladder", "Grafcet"],
  },
  {
    category: "IoT & Communication",
    icon: Cpu,
    color: "secondary",
    skills: ["MQTT", "HTTP/HTTPS", "COAP", "Kafka", "RabbitMQ"],
  },
  {
    category: "Databases",
    icon: Database,
    color: "accent",
    skills: ["MySQL", "Talend", "MapReduce"],
  },
  {
    category: "Development Tools",
    icon: Wrench,
    color: "primary",
    skills: ["Git", "GitHub", "Arduino IDE", "Proteus", "Node-RED", "Docker"],
  },
  {
    category: "Embedded Systems",
    icon: Cpu,
    color: "secondary",
    skills: ["Quartus", "ModelSim", "Xilinx", "LabVIEW", "Micro C Pro", "Raspberry Pi"],
  },
  {
    category: "Industrial Automation",
    icon: Wrench,
    color: "accent",
    skills: ["Tia-Portal", "Step7", "PLCSIM", "WINCC"],
  },
  {
    category: "Machine Learning",
    icon: Code2,
    color: "primary",
    skills: ["scikit-learn", "pandas", "numpy", "Data Preprocessing"],
  },
  {
    category: "Cloud & Platforms",
    icon: Database,
    color: "secondary",
    skills: ["ThingSpeak", "Blynk", "GitHub Codespaces", "Hadoop"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="absolute inset-0 circuit-pattern opacity-50" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-primary">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit built through academic projects and hands-on experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="bg-card/90 backdrop-blur-sm border border-border hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 bg-${category.color}/20 rounded-lg border border-${category.color}/30`}>
                      <Icon className={`h-5 w-5 text-${category.color}`} />
                    </div>
                    <CardTitle className="text-lg font-mono">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border border-border hover:bg-muted hover:border-primary/50 transition-all flex items-center gap-1.5"
                      >
                        {skillLogos[skill] && (
                          <img src={skillLogos[skill] || "/placeholder.svg"} alt={skill} className="h-4 w-4" />
                        )}
                        <span className="font-mono text-xs">{skill}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
