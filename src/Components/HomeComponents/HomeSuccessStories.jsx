import React from "react";

export default function HomeSuccessStories() {
  const stories = [
    { id: 1, image: "Uploads/home/hero.avif" },
    { id: 2, image: "Uploads/home/four.jpeg" },
    { id: 3, image: "Uploads/home/hero2.png" },
    { id: 4, image: "Uploads/home/two.jpeg" },
    { id: 5, image: "Uploads/home/one.jpeg" },
    { id: 6, image: "Uploads/home/three.jpeg" },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3">
          Results that Speak Volume
        </h1>
        <h2 className="text-gray-400 text-2xl sm:text-3xl lg:text-4xl">
          Read Success Stories
        </h2>
      </div>

      {/* 3x2 Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
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

      {/* Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-primary text-white text-lg font-semibold rounded-full ">
          See More Stories
        </button>
      </div>
    </section>
  );
}
