import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-25 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Beautiful polished timber floor"
          className="w-full h-full object-cover"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            Northlands premier flooring specialists
          </h1>

          <p className="text-2xl md:text-3xl text-white/90 leading-relaxed mb-10 max-w-2xl font-medium">
            Half Pai isn&apos;t Ka Pai!
          </p>
          <p className="text-xl md:text-xl text-white/90 leading-relaxed mb-4 max-w-2xl font-medium">
            Serving the Far North to Tauranga
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 rounded-sm w-full sm:w-auto bg-white text-black hover:brightness-110 hover:scale-105 transition-all cursor-pointer"
            >
              <Link href="/#contact">Get a Quote</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-sm w-full sm:w-auto bg-black/40 text-white hover:scale-105 hover:text-white transition-all cursor-pointer"
            >
              <Link href="tel:0210320182">Call Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
