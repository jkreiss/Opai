import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">

          <div className="space-y-4">
            <Link className="flex items-center gap-2 cursor-pointer" href="/">
              <BrandLogo className="h-16 w-auto object-contain" />
            </Link>
            <p className="text-white/60 max-w-xs text-sm leading-relaxed">
              Specialists in sanding, polishing and restoring timber floors and decks. Bringing out the natural beauty of your wood.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact Us</h4>
            <div className="space-y-2 text-white/70 text-sm">
              <p>Phone: <a href="tel:0210320182" className="hover:text-primary transition-colors">0210 320 182</a></p>
              <p>Email: <a href="mailto:opaiflooring@gmail.com" className="hover:text-primary transition-colors">opaiflooring@gmail.com</a></p>
              <p>Location: Northland, New Zealand</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm text-white/70">
              <Link href="/" className="text-left hover:text-primary transition-colors w-fit cursor-pointer">Home</Link>
              <Link href="/#services" className="text-left hover:text-primary transition-colors w-fit cursor-pointer">Services</Link>
              <Link href="/#work" className="text-left hover:text-primary transition-colors w-fit cursor-pointer">Our Work</Link>
              <Link href="/#reviews" className="text-left hover:text-primary transition-colors w-fit cursor-pointer">Reviews</Link>
            </div>
          </div>

        </div>

        {/* <div className="pt-8 text-center text-white/40 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Opai Flooring. All rights reserved.</p>
          <p>Designed for performance.</p>
        </div> */}
      </div>
    </footer>
  );
}
