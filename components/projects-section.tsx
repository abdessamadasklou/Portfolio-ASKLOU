"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/contexts"

const projects = {
  en: [
    {
      title: "Sofrel S550",
      subtitle: "Pumping Station Automation",
      year: "2026",
      image: "/plcme.png",
      description: "Complete hydraulic remote management system combining the SOFREL S550 PLC and PCWin SCADA supervision for automated pumping station control via GSM network.",
      technologies: ["RTU", "SCADA", "IoT"],
      githubUrl: "https://github.com/abdessamadasklou/Systeme-de-telegestion-avec-lautomate-SOFREL-S550.git",
    },
    {
      title: "TrackSecure",
      subtitle: "IoT Package Tracking",
      year: "2025",
      image: "/Tracksecure.png",
      description: "Complete IoT system for package tracking combining GPS and ESP82 gateway with MQTT/CoAP over TLS.",
      technologies: ["IoT", "Kafka", "Apache Spark", "ML"],
      githubUrl: "https://github.com/abdessamadasklou/parcel-tracking-iot-based",
    },
    {
      title: "Warehouse Monitor",
      subtitle: "Temperature System",
      year: "2025",
      image: "/Warehouse.png",
      description: "Distributed system for real-time temperature and humidity monitoring using Java RMI and Spring Boot.",
      technologies: ["Java RMI", "Spring Boot", "IoT"],
      githubUrl: "https://github.com/abdessamadasklou/SDR-Project",
    },
    {
      title: "Motion Detection",
      subtitle: "Smart Security",
      year: "2025",
      image: "/Motion.png",
      description: "Intelligent motion detection combining Arduino UNO and OpenCV for real-time identification.",
      technologies: ["Arduino", "OpenCV", "Python"],
      githubUrl: "https://github.com/abdessamadasklou/Projet-Detection-de-mouvement",
    },
    {
      title: "Smart Lock",
      subtitle: "Door Security",
      year: "2022",
      image: "/LOCK.png",
      description: "Automatic door lock system based on ESP32-CAM and BLYNK Cloud application.",
      technologies: ["ESP32-CAM", "Blynk", "IoT"],
      githubUrl: "https://drive.google.com/drive/u/1/folders/1vF1R62h7uunyehtfrWAlfpydPO90LuaY",
    },
  ],
  fr: [
    {
      title: "Sofrel S550",
      subtitle: "Automatisation d'une station de pompage",
      year: "2026",
      image: "/plcme.png",
      description: "Système complet de télégestion hydraulique combinant l'automate SOFREL S550 et la supervision SCADA PCWin pour le pilotage automatisé d'une station de pompage via réseau GSM.",
      technologies: ["RTU", "SCADA", "IoT"],
      githubUrl: "https://github.com/abdessamadasklou/Systeme-de-telegestion-avec-lautomate-SOFREL-S550.git",
    },
    {
      title: "TrackSecure",
      subtitle: "Suivi de Colis IoT",
      year: "2025",
      image: "/Tracksecure.png",
      description: "Système IoT complet pour le suivi de colis combinant GPS et passerelle ESP82 avec MQTT/CoAP sur TLS.",
      technologies: ["IoT", "Kafka", "Apache Spark", "ML"],
      githubUrl: "https://github.com/abdessamadasklou/parcel-tracking-iot-based",
    },
    {
      title: "Warehouse Monitor",
      subtitle: "Système de Température",
      year: "2025",
      image: "/Warehouse.png",
      description: "Système distribué pour la surveillance de température et d'humidité en temps réel avec Java RMI et Spring Boot.",
      technologies: ["Java RMI", "Spring Boot", "IoT"],
      githubUrl: "https://github.com/abdessamadasklou/SDR-Project",
    },
    {
      title: "Motion Detection",
      subtitle: "Sécurité Intelligente",
      year: "2025",
      image: "/Motion.png",
      description: "Détection de mouvement intelligente combinant Arduino UNO et OpenCV pour une identification en temps réel.",
      technologies: ["Arduino", "OpenCV", "Python"],
      githubUrl: "https://github.com/abdessamadasklou/Projet-Detection-de-mouvement",
    },
    {
      title: "Smart Lock",
      subtitle: "Sécurité de Porte",
      year: "2022",
      image: "/LOCK.png",
      description: "Système de verrouillage automatique de porte basé sur l'ESP32-CAM et l'application Cloud BLYNK.",
      technologies: ["ESP32-CAM", "Blynk", "IoT"],
      githubUrl: "https://drive.google.com/drive/u/1/folders/1vF1R62h7uunyehtfrWAlfpydPO90LuaY",
    },
  ]
}

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { language } = useLanguage()
  const currentProjects = projects[language]

  return (
    <section id="projects" className="relative py-32 px-6 lg:px-12 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20">
          <div className="flex items-baseline gap-4 mb-4">
            <div className="w-16 h-px bg-primary" />
            <p className="text-sm uppercase tracking-widest text-muted-foreground">{language === 'fr' ? 'Mes' : 'My'}</p>
          </div>
          <h2 className="text-6xl lg:text-7xl font-serif text-foreground">{language === 'fr' ? 'Projets' : 'Works'}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <Link
              href={project.githubUrl}
              target="_blank"
              key={index}
              className="group cursor-pointer block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/3] bg-muted overflow-hidden mb-6">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={`object-cover transition-all duration-700 ${hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                />
                <div
                  className={`absolute inset-0 bg-primary/20 transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{project.year}</p>
                    <h3 className="text-3xl font-serif text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/60">{project.subtitle}</p>
                  </div>
                  <div
                    className={`w-12 h-12 border border-foreground/20 flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? "bg-primary border-primary rotate-45" : "bg-transparent rotate-0"
                      }`}
                  >
                    <ArrowUpRight
                      className={`h-5 w-5 transition-all duration-300 ${hoveredIndex === index ? "text-white -rotate-45" : "text-foreground"
                        }`}
                    />
                  </div>
                </div>

                <p className="text-foreground/60 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 border border-foreground/10 text-foreground/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
