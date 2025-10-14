import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const content = [
  {
    id: 1,
    name: "KWABS",
    fullName: "Kwabena Sarkodee Adjepong",
    tags: ["Soul", "R & B", "Electronica"],
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    description:
      "Born in London, Kwabena Adjepong was raised in Bermondsey, South London Borough of Southwark to Ghanaian parents. His school music teacher Xanthe Sarr, an ethnomusicologist and manager of the Southwark Youth Orchestra introduced him to the National Youth Jazz Orchestra. Accepted in the programme, Kwabs became the lead singer of the orchestra for three years. After his graduation, he studied jazz at the Royal Academy of Music.",
  },
  {
    id: 2,
    name: "ARTIST TWO",
    fullName: "Full Name Artist Two",
    tags: ["Jazz", "Blues", "Classical"],
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    description:
      "A talented musician who began their journey in the heart of New York City. Growing up surrounded by diverse musical influences, they developed a unique style that blends traditional jazz with contemporary elements. Their passion for music led them to study at Juilliard, where they honed their craft and emerged as a distinctive voice in modern jazz.",
  },
  {
    id: 3,
    name: "ARTIST THREE",
    fullName: "Full Name Artist Three",
    tags: ["Pop", "Rock", "Indie"],
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    description:
      "An innovative artist from Los Angeles who has been making waves in the indie music scene. Their eclectic approach to songwriting combines introspective lyrics with experimental soundscapes. After years of performing in local venues, they gained recognition for their unique ability to merge pop sensibilities with rock energy, creating a sound that resonates with audiences worldwide.",
  },
];

export default function HomeServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const imageVariants = {
    enter: {
      scale: 1.2,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.8,
      opacity: 0,
    },
  };

  const currentContent = content[currentIndex];

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % content.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + content.length) % content.length);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-12 flex items-center flex-col gap-4">
        <h1 className="text-4xl lg:text-5xl text-center font-bold text-gray-900 leading-tight ">
          Explore Your Needs.
        </h1>
        <p className="max-w-3xl text-center text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum sed
          repellendus velit quia ipsam in blanditiis pariatur voluptas obcaecati
          commodi.
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-12 min-h-[500px] rounded-4xl shadow-2xl relative">
        {/* Navigation Arrow - Left */}
        <button
          onClick={goToPrev}
          className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-amber-50 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg z-20 border border-gray-200"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-amber-500" />
        </button>

        {/* Left Image Section - 40% */}
        <div className="col-span-5 relative overflow-hidden ">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src={currentContent.image}
                alt={currentContent.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-transparent"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Content Section - 60% */}
        <div className="col-span-7 bg-white overflow-hidden relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="p-8 lg:p-12 relative z-10"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-5xl lg:text-6xl font-bold text-amber-500 mb-2">
                    {currentContent.name}
                  </h2>
                  <p className="text-xl text-gray-700 font-medium">
                    {currentContent.fullName}
                  </p>
                </div>

                <div className="flex gap-3 flex-wrap">
                  {currentContent.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-6 py-2 bg-amber-400 text-white rounded-full font-medium text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed text-justify">
                  {currentContent.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Large Background Number */}
          <div className="absolute bottom-0 right-6 text-[250px] font-bold text-amber-500/20 leading-none pointer-events-none">
            0{currentContent.id}
          </div>

          {/* Dots Navigation */}
          <div className="absolute top-8 right-8 flex flex-col gap-3 z-20">
            {content.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-amber-500 scale-125"
                    : "bg-amber-300 hover:bg-amber-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrow - Right */}
        <button
          onClick={goToNext}
          className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-amber-50 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg z-20 border border-gray-200"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-amber-500" />
        </button>
      </div>

      {/* Mobile Layout - Horizontal Carousel */}
      <div className="md:hidden relative">
        {/* Navigation Arrow - Left Mobile */}
        <button
          onClick={goToPrev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white hover:bg-amber-50 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg z-20 border border-gray-200"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-amber-500" />
        </button>

        <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-6"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={currentContent.image}
                  alt={currentContent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-500/20"></div>

                {/* Navigation Arrows on Mobile */}
                {/* <button
                  onClick={goToPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5 text-amber-500" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5 text-amber-500" />
                </button> */}
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-4xl font-bold text-amber-500 mb-1">
                      {currentContent.name}
                    </h2>
                    <p className="text-lg text-gray-700 font-medium">
                      {currentContent.fullName}
                    </p>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {currentContent.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 bg-amber-400 text-white rounded-full font-medium text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm">
                    {currentContent.description}
                  </p>
                </div>

                {/* Large Background Number */}
                <div className="absolute bottom-0 right-0 text-[120px] font-bold text-amber-500/10 leading-none pointer-events-none">
                  0{currentContent.id}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 pb-6">
            {content.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-amber-500 scale-125"
                    : "bg-amber-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrow - Right Mobile */}
        <button
          onClick={goToNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white hover:bg-amber-50 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg z-20 border border-gray-200"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-amber-500" />
        </button>
      </div>
    </section>
  );
}
