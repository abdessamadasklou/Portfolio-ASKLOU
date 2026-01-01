import Image from "next/image"

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
    period: "2024 - 2026",
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
    degree: "University Technology Diploma",
    program: "Industrial Computing and Automated Systems",
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
    <section id="education" className="relative py-32 px-6 lg:px-12 border-b border-b-minimal">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="space-y-4">
                <div className="w-16 h-px bg-primary" />
                <h2 className="text-5xl lg:text-6xl font-serif text-foreground">Education</h2>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-10">
            {education.map((edu, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-start gap-4">
                  <Image
                    src={universityLogos[edu.institution] || "/placeholder.svg"}
                    alt={edu.institution}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-serif text-foreground leading-tight">{edu.degree}</h3>
                        {edu.program && <p className="text-sm text-primary mt-1">{edu.program}</p>}
                      </div>
                      <p className="text-sm text-foreground/50 whitespace-nowrap">{edu.period}</p>
                    </div>
                    <p className="text-foreground/60 text-sm">{edu.institution}</p>
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
