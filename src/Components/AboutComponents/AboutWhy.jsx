import React from "react";

export default function AboutWhy() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
          What Makes KBM Stand Out?
        </h2>
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          accusamus ullam modi autem pariatur hic aspernatur minus dolores
          obcaecati nihil totam animi aliquid quas ducimus.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-4 max-w-6xl mx-auto">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-[40vh] bg-red-100 rounded-3xl flex items-center justify-center text-2xl font-semibold">
            1
          </div>
          <div className="h-[40vh] bg-green-100 rounded-3xl flex items-center justify-center text-2xl font-semibold">
            2
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4">
          {/* Left large box (30%) */}
          <div className="bg-red-100 rounded-3xl md:h-[60vh] h-[30vh] flex items-center justify-center text-2xl font-semibold">
            3
          </div>

          {/* Right stacked boxes (70%) */}
          <div className="grid grid-rows-2 gap-4 md:h-[60vh]">
            <div className="bg-red-100 rounded-3xl flex items-center justify-center text-2xl font-semibold h-[30vh] md:h-auto">
              4
            </div>
            <div className="bg-green-100 rounded-3xl flex items-center justify-center text-2xl font-semibold h-[30vh] md:h-auto">
              5
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
