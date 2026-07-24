"use client"

import { useLanguage } from "@/lib/i18n/contexts"

export function AboutSection() {
  const { language } = useLanguage()

  return (
    <section id="about" className="relative py-32 px-6 lg:px-12 border-b border-b-minimal">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="space-y-4">
                <div className="w-16 h-px bg-primary" />
                <h2 className="text-5xl lg:text-6xl font-serif text-foreground">
                  {language === 'fr' ? 'À propos' : 'About'}
                </h2>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                {language === 'fr'
                  ? "Titulaire d'un Master d'Excellence en Ingénierie Informatique et Systèmes Embarqués de l'Université Ibn Zohr, Agadir, je me passionne pour l'intersection entre le matériel et le logiciel. Je conçois des solutions intelligentes et automatisées pour répondre à des problématiques concrètes, avec une spécialisation en automatisme, télégestion et systèmes embarqués."
                  : "Holder of a Master's Degree with Excellence in Computer Engineering and Embedded Systems from Université Ibn Zohr, Agadir, I am passionate about the intersection of hardware and software. I design intelligent, automated solutions to solve real-world problems, with a specialization in automation, remote monitoring systems, and embedded systems."}
              </p>

              <p>
                {language === 'fr'
                  ? "Avec une expérience pratique en automatisation industrielle, développement d'appareils IoT et systèmes distribués, j'apporte un mélange unique de connaissances théoriques et d'expertise pratique. Je m'épanouis dans les défis qui exigent une réflexion innovante et une résolution technique de problèmes."
                  : "With hands-on experience in industrial automation, IoT device development, and distributed systems, I bring a unique blend of theoretical knowledge and practical expertise. I thrive on challenges that require innovative thinking and technical problem-solving."}
              </p>

              <p>
                {language === 'fr'
                  ? "Au-delà de mes études, j'aime explorer de nouvelles technologies, contribuer à des projets open-source et me tenir au courant des derniers développements en matière de systèmes embarqués et d'automatisation."
                  : "Beyond academics, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest developments in embedded systems and automation."}
              </p>
            </div>

            <div className="pt-8 border-t border-foreground/10">
              <h3 className="text-sm uppercase tracking-widest text-foreground mb-6">
                {language === 'fr' ? 'Compétences de Base' : 'Core Competencies'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{language === 'fr' ? 'Systèmes Embarqués' : 'Embedded Systems'}</p>
                  <p className="text-sm text-foreground/60">{language === 'fr' ? 'Matériel & Firmware' : 'Hardware & Firmware'}</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{language === 'fr' ? 'Solutions IoT' : 'IoT Solutions'}</p>
                  <p className="text-sm text-foreground/60">{language === 'fr' ? 'Appareils Connectés' : 'Connected Devices'}</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{language === 'fr' ? 'Automatisation' : 'Automation'}</p>
                  <p className="text-sm text-foreground/60">{language === 'fr' ? 'Systèmes Industriels' : 'Industrial Systems'}</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{language === 'fr' ? 'Ingénierie des Données' : 'Data Engineering'}</p>
                  <p className="text-sm text-foreground/60">{language === 'fr' ? 'Systèmes Distribués' : 'Distributed Systems'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
