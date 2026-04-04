import { Sparkles, Droplets, Hammer, Home, CircleHelp, ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Sparkles className="w-8 h-8 mb-4 text-primary" />,
    title: "Floor Sanding & Restoration",
    description: "We strip away old coatings, scratches, and years of damage and use to reveal the pristine timber underneath."
  },
  {
    icon: <Droplets className="w-8 h-8 mb-4 text-primary" />,
    title: "Floor Polishing & Finishing",
    description: "Protect your timber from daily wear and tear. We apply high quality, durable polyurethanes, oils, or water-based finishes that seal the wood and provide lasting shine."
  },
  {
    icon: <Hammer className="w-8 h-8 mb-4 text-primary" />,
    title: "Timber & Floating Floor Installation",
    description: "Supply and installation of timber and floating floors. We ensure a clean, level finish with attention to detail from preparation through to final installation."
  },
  {
    icon: <Layers className="w-8 h-8 mb-4 text-primary" />,
    title: "Carpet Tile Installation",
    description: "We supply and install carpet tiles ensuring a practical and durable solution with attention to detail from preparation through to final installation."
  },
  {
    icon: <Home className="w-8 h-8 mb-4 text-primary" />,
    title: "Deck Sanding & Refinishing",
    description: "Bring your outdoor entertainment areas back to life. We strip grey, weathered timber and apply premium decking oils to protect against harsh weather and bring the spark of a new deck."
  },
  {
    icon: <CircleHelp className="w-8 h-8 mb-4 text-green-500" />,
    title: "Need something else?",
    description: "We handle custom requests and specialized work. Get in touch with us today."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Specialists in sanding, polishing and restoring timber floors and decks.
            Whether its a commercial or residential, new floor or old floor, there is no job too big or too small.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            return (
              <div
                key={index}
                className={`p-8 border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full ${isLast
                  ? 'bg-primary border-primary text-primary-foreground cursor-pointer group'
                  : 'bg-white border-border text-foreground'
                  }`}
              >
                {isLast ? (
                  <Link href="/#contact" className="flex h-full flex-col">
                    <div className="[&>svg]:text-primary-foreground">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="leading-relaxed mb-6 text-primary-foreground">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 font-bold text-lg mt-auto pt-2 border-t border-primary-foreground/20">
                      Ask us here
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ) : (
                  <>
                    <div>{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="leading-relaxed mb-6 text-muted-foreground">
                      {service.description}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
