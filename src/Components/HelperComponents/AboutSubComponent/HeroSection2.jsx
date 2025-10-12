import React from "react";
import { Home } from "lucide-react";

export default function HeroSection2() {
  return (
    <section className=" bg-gra00 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Text content */}
        <div className="space-y-6 flex items-end flex-col">
          {/* Main heading with color swatches */}
          <div className="relative">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              About Our Team.
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-lg max-w-md text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            eveniet, facilis a aspernatur debitis, suscipit ratione delectus
            consequuntur molestiae cum expedita cupiditate non autem explicabo
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
              Get started
            </button>
          </div>
        </div>

        {/* Right side - Image with floating elements */}
        <div className="relative h-[400px] lg:h-[500px]">
          {/* Main image container */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
            {/* Image wrapper */}
            <div className="w-full h-full relative">
              <img
                src="/Uploads/home/hero.avif"
                alt="Hero"
                className="w-full h-full object-cover opacity-90"
              />
              {/* Optional overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
