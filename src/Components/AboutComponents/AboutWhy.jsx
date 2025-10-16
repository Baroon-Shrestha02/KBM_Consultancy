import React from "react";
import { Link } from "react-router-dom";

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
      <div className="grid gap-4 max-w-6xl mx-auto ">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="relative h-[40vh] bg-red-100 rounded-3xl  flex items-center justify-center text-2xl font-semibold">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-left rounded-3xl"
              style={{
                backgroundImage: "url('/Uploads/home/hero3.jpg')",
                zIndex: 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute bottom-2 p-4">
              <div className="text-lg text-background">
                Personalized Counselling
              </div>
              <p className="text-base max-w-4xl text-background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                temporibus, quo, sunt suscipit odit nulla non doloribus autem
                placeat provident perspiciatis consequatur quaerat impedit
                distinctio.
              </p>
            </div>
          </div>
          <div className=" relative h-[40vh] bg-green-100 rounded-3xl flex items-center justify-center text-2xl font-semibold">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-left rounded-3xl"
              style={{
                backgroundImage: "url('/Uploads/home/hero3.jpg')",
                zIndex: 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute bottom-2 p-4">
              <div className="text-lg text-background">
                Years of industry Experts
              </div>
              <p className="text-base max-w-4xl text-background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                temporibus, quo, sunt suscipit odit nulla non doloribus autem
                placeat provident perspiciatis consequatur quaerat impedit
                distinctio.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4">
          {/* Left large box (30%) */}
          <div className="relative bg-red-100 rounded-3xl md:h-[60vh] h-[30vh] flex items-center justify-center text-2xl font-semibold">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-left rounded-3xl"
              style={{
                backgroundImage: "url('/Uploads/home/hero3.jpg')",
                zIndex: 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute bottom-2 p-4">
              <div className="text-lg text-background">Transparent Process</div>
              <p className="text-base max-w-4xl text-background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                temporibus, quo, sunt suscipit odit nulla non doloribus autem
                placeat provident perspiciatis consequatur quaerat impedit
                distinctio.
              </p>
            </div>
          </div>

          {/* Right stacked boxes (70%) */}
          <div className="grid grid-rows-2 gap-4 md:h-[60vh]">
            <div className="relative rounded-3xl flex items-center justify-center text-2xl font-semibold h-[30vh] md:h-auto">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-left rounded-3xl"
                style={{
                  backgroundImage: "url('/Uploads/home/hero3.jpg')",
                  zIndex: 0,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute bottom-2 p-4">
                <div className="text-lg text-background">
                  End-to-End Support
                </div>
                <p className="text-base max-w-4xl text-background">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  temporibus, quo, sunt suscipit odit nulla non doloribus autem
                  placeat provident perspiciatis consequatur quaerat impedit
                  distinctio.
                </p>
              </div>
            </div>
            <div className="relative rounded-3xl flex items-center justify-center text-2xl font-semibold h-[30vh] md:h-auto">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-left rounded-3xl"
                style={{
                  backgroundImage: "url('/Uploads/home/hero3.jpg')",
                  zIndex: 0,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute bottom-2 p-4">
                <div className="text-lg text-background">
                  Wide network of partner univesities
                </div>
                <p className="text-base max-w-4xl text-background">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  temporibus, quo, sunt suscipit odit nulla non doloribus autem
                  placeat provident perspiciatis consequatur quaerat impedit
                  distinctio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8 flex-col text-base md:text-xl gap-3">
        <p>Learn more about the services of KBM</p>
        <Link to="/about/why-choose-us">
          <button className="px-4 py-1 text-lg md:text-2xl  bg-text text-white rounded-xl hover:scale-105 duration-500 ease-in-out">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
}
