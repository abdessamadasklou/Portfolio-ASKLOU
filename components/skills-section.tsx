"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n/contexts"

const skillLogos: Record<string, string> = {
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "C/C++": "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Arduino: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  SQL: "https://icon2.cleanpng.com/20180611/ipg/aa8k6rg0g.webp",
  VHDL: "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/638a61921edcd6b61220a23a_XrbJ07KiqWOBrxBtkJGoAUdyjwynYp-eC0MPmL1RoQU.png",
  MQTT: "https://www.deos-ag.com/wp-content/uploads/logo-mqtt-ver.png",
  HTTP: "https://p7.hiclipart.com/preview/671/871/776/hypertext-transfer-protocol-logo-https-spring-framework-post-logo.jpg",
  COAP: "https://iotfactory.eu/wp-content/uploads/2021/06/coap-integration-iot-factory.png",
  Kafka: "https://kafka.apache.org/logos/kafka-logo-tall.png",
  Quartus: "https://www.pngfind.com/pngs/m/148-1482706_quartus-logo-png-transparent-quartus-logo-png-download.png",
  ModelSim: "https://spb-global.com/wp-content/uploads/2021/04/SPB_modelsim.jpg",
  Xilinx: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnJ-fK5sc43iPOQDuIpleL9RtVygHnxWbEQ&s",
  LabVIEW: "https://mlegimnpy7qi.i.optimole.com/w:712/h:473/q:mauto/g:sm/f:best/ig:avif/https://www.softwarekey.com/wp-content/uploads/2015/05/labview-logo.png",
  Raspberry_Pi: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kY92rnz3_YPO3rrKdiQoT5Dm0pcF5PswaQ&s",
  I2C: "https://www.alliancedunumerique.fr/wp-content/uploads/2022/01/logo-i2c.png",
  Talend: "https://upload.wikimedia.org/wikipedia/commons/7/70/TalendLogoCoral.png",
  Tia_Portal: "https://www.cncdesign.co.nz/application/files/cache/thumbnails/226636057b64724ea2c5641cb51c29b0.png",
  Step7: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSgpzNrraMq62XCwQO98-yKIK56lqmMqQ7Q&s",
  PLCSIM: "https://downloadly.ir/wp-content/uploads/2021/06/Siemens-Simatic-S7-PLCSIM-1.png",
  WINCC: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIDWWuQzxA45_FDMOYsily5K2Xq9VkfsJjw&s",
  Spring_Boot: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/960px-Spring_Boot.svg.png",
  Matlab: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/1200px-Matlab_Logo.png",
  Proteus: "https://i0.wp.com/arduinofactory.fr/wp-content/uploads/2021/07/proteus.png?fit=512%2C352&ssl=1",
  Hadoop: "https://p1.hiclipart.com/preview/758/901/237/google-logo-background-apache-hadoop-big-data-mapr-hadoop-distributed-filesystem-java-hortonworks-distributed-computing-png-clipart.jpg",
  Mosquitto: "https://repository-images.githubusercontent.com/53614190/b11dd480-90b3-11eb-903d-8c48f62e3172",
  SOFTOOLS: "/softools.png",
  PCWin: "/pcwin.png",
}

const skillCategories = [
  {
    category: "Programming",
    skills: [
      { name: "Java", logo: skillLogos["Java"] },
      { name: "C/C++", logo: skillLogos["C/C++"] },
      { name: "Python", logo: skillLogos["Python"] },
      { name: "SQL", logo: skillLogos["SQL"] },
      { name: "VHDL", logo: skillLogos["VHDL"] },
    ],
  },
  {
    category: "IoT & Communication",
    skills: [
      { name: "MQTT", logo: skillLogos["MQTT"] },
      { name: "HTTP/HTTPS", logo: skillLogos["HTTP"] },
      { name: "COAP", logo: skillLogos["COAP"] },
      { name: "Kafka", logo: skillLogos["Kafka"] },
      { name: "I2C", logo: skillLogos["I2C"] }],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", logo: skillLogos["MySQL"] },
      { name: "Talend", logo: skillLogos["Talend"] },
      { name: "Hadoop", logo: skillLogos["Hadoop"] }],
  },
  {
    category: "Development Tools",
    skills: [
      { name: "Git", logo: skillLogos["Git"] },
      { name: "Docker", logo: skillLogos["Docker"] },
      { name: "Arduino", logo: skillLogos["Arduino"] },
      { name: "Proteus", logo: skillLogos["Proteus"] },
      { name: "Matlab", logo: skillLogos["Matlab"] },
      { name: "Spring-Boot", logo: skillLogos["Spring_Boot"] },
    ],
  },
  {
    category: "Embedded Systems",
    skills: [
      { name: "Raspberry Pi", logo: skillLogos["Raspberry_Pi"] },
      { name: "Quartus", logo: skillLogos["Quartus"] },
      { name: "ModelSim", logo: skillLogos["ModelSim"] },
      { name: "Xilinx", logo: skillLogos["Xilinx"] },
      { name: "LabVIEW", logo: skillLogos["LabVIEW"] },
    ],
  },
  {
    category: "Automation",
    skills: [
      { name: "Tia-Portal", logo: skillLogos["Tia_Portal"] },
      { name: "Step7", logo: skillLogos["Step7"] },
      { name: "PLCSIM", logo: skillLogos["PLCSIM"] },
      { name: "WINCC", logo: skillLogos["WINCC"] },
      { name: "SOFTOOLS", logo: skillLogos["SOFTOOLS"] },
      { name: "PCWin", logo: skillLogos["PCWin"] },
    ],
  },
]

export function SkillsSection() {
  const { language } = useLanguage()

  const categoriesFr: Record<string, string> = {
    "Programming": "Programmation",
    "IoT & Communication": "IoT & Communication",
    "Databases": "Bases de Données",
    "Development Tools": "Outils de Développement",
    "Embedded Systems": "Systèmes Embarqués",
    "Automation": "Automatisation"
  }

  return (
    <section id="skills" className="relative py-32 px-6 lg:px-12 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20">
          <div className="flex items-baseline gap-4 mb-4">
            <div className="w-16 h-px bg-primary" />
            <p className="text-sm uppercase tracking-widest text-muted-foreground">{language === 'fr' ? 'Technique' : 'Technical'}</p>
          </div>
          <h2 className="text-6xl lg:text-7xl font-serif text-foreground">{language === 'fr' ? 'Compétences' : 'Skills'}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-serif text-foreground pb-3 border-b border-foreground/10">
                {language === 'fr' ? categoriesFr[category.category] || category.category : category.category}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {skill.logo && (
                      <Image
                        src={skill.logo || "/placeholder.svg"}
                        alt={skill.name}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    )}
                    <span className="text-sm">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
