import React from "react";
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2";

export default function SuccessStories() {
  return (
    <div>
      <HeroSection2 />
      <section className="container mx-auto my-12">
        <div className="mb-12 flex items-center flex-col gap-4">
          <h1 className="text-4xl lg:text-5xl text-center font-bold text-gray-900 leading-tight ">
            Explore Our Students Success Stories.
          </h1>
          <p className="max-w-3xl text-center text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            sed repellendus velit quia ipsam in blanditiis pariatur voluptas
            obcaecati commodi.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((story) => (
            <div
              key={story.id}
              className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={story.image}
                alt={`Success Story ${story.id}`}
                className="w-full h-64 object-cover "
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
