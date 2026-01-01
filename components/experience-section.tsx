import Image from "next/image"

const companyLogos: Record<string, string> = {
  "POWER INTEGRATION": "/2Q.png",
  "PLASTIC OMNIUM": "/Plastic_Omnium.svg.png",
  "ORDIKAZION INFORMATIQUE": "/ordika.jpg",
}

const experiences = [
  {
    title: "Final Year Internship",
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
    <section id="experience" className="relative py-32 px-6 lg:px-12 border-b border-b-minimal">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="space-y-4">
                <div className="w-16 h-px bg-primary" />
                <h2 className="text-5xl lg:text-6xl font-sans text-foreground">Experience</h2>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border-b border-foreground/10 pb-12 last:border-0 last:pb-0">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-2xl font-sans font-bold text-foreground">
                        {exp.title} <span className="text-primary/60 font-medium">@ {exp.company}</span>
                      </h3>
                      <div className="flex items-center gap-3">
                        <Image
                          src={companyLogos[exp.company] || "/placeholder.svg"}
                          alt={exp.company}
                          width={80}
                          height={32}
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                      <p className="text-foreground/60">{exp.location}</p>
                    </div>
                    <p className="text-sm text-foreground/50 whitespace-nowrap">{exp.period}</p>
                  </div>

                  <p className="text-foreground/70 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2 text-sm text-foreground/60">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="text-xs px-3 py-1 border border-foreground/10 text-foreground/60">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
