"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/BrandLogo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 py-3 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center gap-2 cursor-pointer" href="/">
          <BrandLogo className={`w-auto object-contain transition-all duration-200 ${isScrolled ? 'h-10' : 'h-15'}`} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className={`text-sm font-medium transition-colors cursor-pointer ${isScrolled ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-primary'}`}>Home</Link>
          <Link href="/#services" className={`text-sm font-medium transition-colors cursor-pointer ${isScrolled ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-primary'}`}>Services</Link>
          <Link href="/#work" className={`text-sm font-medium transition-colors cursor-pointer ${isScrolled ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-primary'}`}>Our Work</Link>
          <Link href="/#reviews" className={`text-sm font-medium transition-colors cursor-pointer ${isScrolled ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-primary'}`}>Reviews</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:1234567890" className={`flex items-center gap-2 text-sm font-bold hover:scale-105 transition-all ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'}`}>
            <Phone size={18} />
            <span>Call Now</span>
          </a>
          <a href="mailto:opaiflooring@gmail.com" className={`flex items-center gap-2 text-sm font-bold hover:scale-105 transition-all ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'}`}>
            <Mail size={18} />
            <span>Email Us</span>
          </a>
          <Button asChild className={`rounded-none font-semibold px-6 cursor-pointer border-none hover:scale-105 transition-all ${isScrolled ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-foreground hover:bg-primary hover:text-white'}`}>
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg p-4 flex flex-col gap-4">
          <Link onClick={() => setMobileMenuOpen(false)} href="/" className="text-left py-2 font-medium border-b border-border/50 cursor-pointer">Home</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="/#services" className="text-left py-2 font-medium border-b border-border/50 cursor-pointer">Services</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="/#work" className="text-left py-2 font-medium border-b border-border/50 cursor-pointer">Our Work</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="/#reviews" className="text-left py-2 font-medium border-b border-border/50 cursor-pointer">Reviews</Link>
          <div className="flex flex-col gap-3 pt-2">
            <a href="tel:1234567890" className={`flex items-center justify-center gap-2 py-3 font-bold rounded-sm transition-colors ${isScrolled ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
              <Phone size={18} />
              <span>Call Us</span>
            </a>
            <a href="mailto:opaiflooring@gmail.com" className={`flex items-center justify-center gap-2 py-3 font-bold rounded-sm transition-colors ${isScrolled ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
              <Mail size={18} />
              <span>Email Us</span>
            </a>
            <Button asChild className="w-full rounded-sm py-6 text-lg cursor-pointer">
              <Link onClick={() => setMobileMenuOpen(false)} href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
