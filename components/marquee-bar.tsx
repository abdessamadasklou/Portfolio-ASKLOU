export function MarqueeBar() {
  const services = ["IoT Systems", "Embedded Software", "Circuit Design", "Automation", "PCB Layout", "Smart Solutions"]

  return (
    <div className="bg-primary overflow-hidden py-4 border-y border-primary/20">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-6">
                <span className="text-white text-lg font-bold uppercase tracking-wider">{service}</span>
                <span className="text-white/50 text-2xl font-light">+</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
