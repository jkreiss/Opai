import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WorkGallery from "@/components/WorkGallery";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WorkGallery />
        <Services />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
