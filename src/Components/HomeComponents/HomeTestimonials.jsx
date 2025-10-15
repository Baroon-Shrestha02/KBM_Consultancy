import { ArrowUpRight } from "lucide-react";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomeTestimonials() {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 my-12">
        <div className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10">
          <h1 className="mb-3 text-text">Results that speaks </h1>
          <h2 className="text-text/80 text-2xl sm:text-3xl lg:text-4xl">
            Read What Our Students Says About Us
          </h2>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] gap-3">
            <div className="bg-[#F4E9DC] text-[#7A542F] rounded-3xl p-4 sm:p-6 flex flex-col items-start justify-between min-h-[250px] sm:min-h-[300px]">
              <div className="text-sm sm:text-base">
                <span className="block pr-2 mb-2">
                  <FaQuoteLeft />
                </span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                distinctio minus mollitia iste nobis nam, voluptas molestiae
                quos, temporibus eveniet illum adipisci exercitationem,
                excepturi vitae quasi nemo aliquid qui. Alias accusamus corrupti
                quo! Exercitationem excepturi sapiente dolore! Fugit, et nam?
              </div>
              <div className="flex gap-3 mt-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                  <img
                    src="Uploads/home/hero.avif"
                    alt=""
                    className="overflow-hidden rounded-full h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-sm sm:text-base">
                  <div className="font-semibold">Baroon Shrestha</div>
                  <div className="text-[#7A542F]/70">Developer</div>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-1 lg:grid-rows-2 gap-3">
              <div className="shadow-2xl rounded-3xl p-4 sm:p-6 flex flex-col items-start justify-between min-h-[250px] sm:min-h-[300px]">
                <div className="text-sm sm:text-base">
                  <span className="block pr-2 mb-2">
                    <FaQuoteLeft />
                  </span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis distinctio minus mollitia iste nobis nam, voluptas
                  molestiae quos, temporibus eveniet illum adipisci
                  exercitationem, excepturi vitae quasi nemo aliquid qui. Alias
                  accusamus corrupti quo! Exercitationem excepturi sapiente
                  dolore! Fugit, et nam?
                </div>
                <div className="flex gap-3 mt-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                    <img
                      src="Uploads/home/hero.avif"
                      alt=""
                      className="overflow-hidden rounded-full h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-sm sm:text-base">
                    <div className="font-semibold">Baroon Shrestha</div>
                    <div className="text-gray-600">Developer</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#F4E9DC] text-[#7A542F] rounded-3xl shadow-xl p-4 sm:p-6 flex flex-col items-start justify-between min-h-[250px]">
                  <div className="text-sm sm:text-base">
                    <span className="block pr-2 mb-2">
                      <FaQuoteLeft />
                    </span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis distinctio minus mollitia iste nobis nam, voluptas
                    molestiae quos, temporibus eveniet illum adipisci
                  </div>
                  <div className="flex gap-3 mt-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                      <img
                        src="Uploads/home/hero.avif"
                        alt=""
                        className="overflow-hidden rounded-full h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col text-sm sm:text-base">
                      <div className="font-semibold">Baroon Shrestha</div>
                      <div className="text-[#7A542F]/80">Developer</div>
                    </div>
                  </div>
                </div>
                <div className="bg-black text-white p-4 sm:p-6 flex flex-col items-start justify-between rounded-3xl min-h-[250px]">
                  <div className="text-sm sm:text-base">
                    <span className="block pr-2 mb-2">
                      <FaQuoteLeft />
                    </span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis distinctio minus mollitia iste nobis nam, voluptas
                    molestiae quos, temporibus eveniet illum adipisci
                  </div>
                  <div className="flex gap-3 mt-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                      <img
                        src="Uploads/home/hero.avif"
                        alt=""
                        className="overflow-hidden rounded-full h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col text-sm sm:text-base">
                      <div className="font-semibold">Baroon Shrestha</div>
                      <div className="">Developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-4 sm:gap-0 mt-6 mb-16">
          <div className="text-sm sm:text-base text-center sm:text-left">
            1000+ Satisfied Students from KBM
          </div>
          <div>
            <Link to="/about/testimonials">
              <button className="px-4 sm:px-6 py-2 bg-gray-100 text-base sm:text-lg font-extrabold rounded-xl flex items-center gap-2 hover:bg-gray-200 transition-colors">
                <div>View All Reviews</div>
                <div className="border rounded-full p-1">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
