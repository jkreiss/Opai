"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    pre: "/images/gallery/closet_pre.jpg",
    post: "/images/gallery/closet_post.jpg",
    title: "Closet Restoration",
  },
  {
    id: 2,
    pre: "/images/gallery/deck_pre.jpg",
    post: "/images/gallery/deck_post.jpg",
    title: "Deck Restoration",
  },
  {
    id: 3,
    pre: "/images/gallery/timberhallway_pre.jpg",
    post: "/images/gallery/timberhallway_post.jpg",
    title: "Timber Hallway",
  },
  {
    id: 4,
    pre: "/images/gallery/warehousebefore.jpeg",
    post: "/images/gallery/warehouseafter.jpeg",
    title: "Timber Kitchen",
  },
  {
    id: 5,
    pre: "/images/gallery/timberliving_pre.jpg",
    post: "/images/gallery/timberliving_post.jpg",
    title: "Timber Living Room",
  },
    {
    id: 6,
    pre: "/images/gallery/closetbefore.jpg",
    post: "/images/gallery/closetafter.jpg",
    title: "Timber Living Room",
  },
    {
    id: 7,
    pre: "/images/gallery/stairsbefore.jpg",
    post: "/images/gallery/stairsafter.jpg",
    title: "Timber Living Room",
  },
];

export default function WorkGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((current) => (current + 1) % projects.length);
  const prev = () => setCurrentIndex((current) => (current - 1 + projects.length) % projects.length);

  // Auto advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recent Work</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Take a look at some of our recent transformations. We take pride in every board we touch.
          </p>
        </div>

        <div className="relative group max-w-5xl mx-auto">
          {/* Main Image Container */}
          <div className="relative overflow-hidden aspect-video bg-muted rounded-xl shadow-lg flex">
            <div className="w-1/2 relative h-full">
              <Image
                src={projects[currentIndex].pre}
                alt={`Pre Restoration ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
                fill
                sizes="(max-width: 1024px) 50vw, 640px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium tracking-wide">Before</div>
            </div>
            <div className="w-[2px] bg-white z-10 h-full"></div>
            <div className="w-1/2 relative h-full">
              <Image
                src={projects[currentIndex].post}
                alt={`Post Restoration ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
                fill
                sizes="(max-width: 1024px) 50vw, 640px"
              />
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-md text-sm font-medium tracking-wide shadow-md">After</div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between items-center px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm text-foreground shadow-md flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm text-foreground shadow-md flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all rounded-full ${idx === currentIndex ? "bg-primary w-8" : "bg-primary/30 w-2 hover:bg-primary/50"
                  }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          {/* <div className="text-center mt-4">
            <h3 className="text-xl font-semibold text-foreground">{projects[currentIndex].title}</h3>
          </div> */}
        </div>
      </div>
    </section>
  );
}
