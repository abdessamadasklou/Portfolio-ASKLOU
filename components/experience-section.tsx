"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n/contexts"

const companyLogos: Record<string, string> = {
  "POWER INTEGRATION": "/2Q.png",
  "PLASTIC OMNIUM": "/Plastic_Omnium.svg.png",
  "ORDIKAZION INFORMATIQUE": "/ordika.jpg",
  "ONEE-Water Branch": "/onep.png",
}

const experiences = {
  en: [
    {
      title: "Graduation Internship (PFE)",
      company: "ONEE-Water Branch",
      location: "Aït Baha, Maroc",
      period: "February 2026 - June 2026",
      description: "Designed and implemented a remote management and supervision system for a pumping station using the SOFREL S550 PLC.",
      achievements: [
        "Configured and wired the SOFREL S550 industrial programmable logic controller (PLC) and S50 input/output rack.",
        "Programmed control logic and automatic pump switching rules under SOFTOOLS.",
        "Developed real-time SCADA graphical pages and SMS alerts using PCWin to monitor alarms (dry running, motor overload) and sensor status.",
      ],
      skills: ["SOFREL S550", "SOFTOOLS", "PCWin", "SCADA", "Industrial Automation", "RTU / PLC"],
    },
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
  ],
  fr: [
    {
      title: "Stage de Fin d'Études (PFE)",
      company: "ONEE-Branche Eau",
      location: "Aït Baha, Maroc",
      period: "Février 2026 - Juin 2026",
      description: "Conception et mise en œuvre d'un système de télégestion et de supervision d'une station de pompage avec l'automate SOFREL S550.",
      achievements: [
        "Configuration et câblage de l'automate SOFREL S550 et du rack S50.",
        "Programmation de la logique de contrôle et automatisation sous SOFTOOLS.",
        "Développement de pages graphiques SCADA et alertes SMS avec PCWin pour le suivi (marche à sec, etc.).",
      ],
      skills: ["SOFREL S550", "SOFTOOLS", "PCWin", "SCADA", "Automatisation Industrielle", "RTU / PLC"],
    },
    {
      title: "Stage de Fin d'Année",
      company: "POWER INTEGRATION",
      location: "Casablanca, Maroc",
      period: "Avril 2022 - Juin 2022",
      description: "Automatisation d'une station de pompage par une analyse détaillée du système et une simulation.",
      achievements: [
        "Réalisation d'une étude détaillée pour identifier les besoins en automatisation.",
        "Vérification et simulation des résultats avec le logiciel ISPsoft.",
      ],
      skills: ["Grafcet", "LADDER", "ISPsoft", "Automatisation Industrielle"],
    },
    {
      title: "Stage d'Observation",
      company: "PLASTIC OMNIUM",
      location: "Kénitra, Maroc",
      period: "Juillet 2021 - Août 2021",
      description: "Gestion des stocks et recherche de nouveaux projets pour l'usine.",
      achievements: [
        "Inventaire complet des imprimantes et scanners dans l'ensemble des unités de l'usine.",
        "Recherche et documentation sur de nouvelles opportunités de projet.",
      ],
      skills: ["Observation des Processus", "Travail en Équipe", "Documentation"],
    },
    {
      title: "Opérateur Assistant",
      company: "ORDIKAZION INFORMATIQUE",
      location: "Casablanca, Maroc",
      period: "Été 2018, 2019, 2020",
      description: "Soutien technique pour l'installation et la réparation de matériel informatique.",
      achievements: [
        "Installation et réparation d'ordinateurs de bureau et portables.",
        "Diagnostic des pannes matérielles et solutions apportées.",
      ],
      skills: ["Maintenance Matérielle", "Support Technique", "Réparation de PC"],
    },
  ]
}

export function ExperienceSection() {
  const { language } = useLanguage();
  const currentExperiences = experiences[language];

  return (
    <section id="experience" className="relative py-32 px-6 lg:px-12 border-b border-b-minimal">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="space-y-4">
                <div className="w-16 h-px bg-primary" />
                <h2 className="text-5xl lg:text-6xl font-sans text-foreground">
                  {language === 'fr' ? 'Expérience' : 'Experience'}
                </h2>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {currentExperiences.map((exp, index) => (
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
