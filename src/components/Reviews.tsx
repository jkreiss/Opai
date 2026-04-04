"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    text: "Thanks so much to Opai Flooring for doing such a fantastic job on my old floors. Not only do they look beautiful but Duane was a pleasure to deal with and so passionate about his job. Would highly recommend putting your wooden floors in his hands.",
    author: "Cushla Dobson"
  },
  {
    text: "Duane is very polite, professional and amazing at his trade. I would HIGHLY recommend Duane from Opai Flooring to anyone who wants their floors to shine through with its natural beauty! He was very informative on the process and how things work. Make him your first point of contact for anything to do with floors! Thanks Duane for such superb mahi.",
    author: "Ruth Beazley"
  },
  {
    text: "Duane was my floor sander when he was located in Sydney Australia. I can't recommend him enough. His work is second to none. I highly recommend his services.",
    author: "Glenn Evans"
  },
  {
    text: "Duane did a great job resanding and finishing my kauri floorboards in an old villa. He has all the equipment, works hard and is knowledgeable about coatings. He’s also pragmatic and flexible around working hours to get the job finished. Would highly recommend.",
    author: "Charles Black"
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((current) => (current + 1) % reviews.length);
  const prev = () => setCurrentIndex((current) => (current - 1 + reviews.length) % reviews.length);

  // Auto advance
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 relative text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/reviews-bg.jpg"
          alt="Reviews background"
          className="w-full h-full object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto relative pt-16">
          <Quote className="w-16 h-16 mb-8 opacity-30 absolute top-0 left-0" />

          {/* Top Right Controls */}
          <div className="absolute top-0 right-0 flex items-center gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="h-[450px] md:h-[300px] flex flex-col justify-center text-left mt-12 md:mt-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed mb-8 transition-opacity duration-500">
              &quot;{reviews[currentIndex].text}&quot;
            </p>
            <div className="font-bold text-lg tracking-wide uppercase">
              — {reviews[currentIndex].author}
            </div>
          </div>

          <div className="flex justify-start items-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? "bg-white w-6" : "bg-white/30"
                  }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
