export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-12 border-b border-b-minimal">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="space-y-4">
                <div className="w-16 h-px bg-primary" />
                <h2 className="text-5xl lg:text-6xl font-serif text-foreground">About</h2>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                I am currently a 2nd-year Master's student in Computer Engineering and Embedded Systems at Université
                Ibn Zohr, Agadir. My passion lies in the intersection of hardware and software, where I focus on
                creating intelligent, automated solutions for real-world problems.
              </p>

              <p>
                With hands-on experience in industrial automation, IoT device development, and distributed systems, I
                bring a unique blend of theoretical knowledge and practical expertise. I thrive on challenges that
                require innovative thinking and technical problem-solving.
              </p>

              <p>
                Beyond academics, I enjoy exploring new technologies, contributing to open-source projects, and staying
                updated with the latest developments in embedded systems and automation.
              </p>
            </div>

            <div className="pt-8 border-t border-foreground/10">
              <h3 className="text-sm uppercase tracking-widest text-foreground mb-6">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Embedded Systems</p>
                  <p className="text-sm text-foreground/60">Hardware & Firmware</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">IoT Solutions</p>
                  <p className="text-sm text-foreground/60">Connected Devices</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Automation</p>
                  <p className="text-sm text-foreground/60">Industrial Systems</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Data Engineering</p>
                  <p className="text-sm text-foreground/60">Distributed Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
