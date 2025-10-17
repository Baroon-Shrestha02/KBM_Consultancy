import { ArrowUpRight } from "lucide-react";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomeTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Sharma",
      role: "Software Engineer",
      image: "Uploads/home/prof.jpg",
      quote:
        "KBM Education Consultancy guided me at every step—from understanding the visa process to preparing for academic life in Japan. Their support gave me the confidence to pursue my goals abroad.",
      bg: "bg-[#F4E9DC] text-[#7A542F]",
    },
    {
      id: 2,
      name: "Priya Karki",
      role: "Student",
      image: "Uploads/home/prof.jpg",
      quote:
        "The team at KBM made what seemed complicated very simple. Their mentorship helped me focus on my studies and achieve my dreams with clarity and confidence.",
      bg: "bg-white text-gray-900 shadow-2xl",
    },
    {
      id: 3,
      name: "Rohit Thapa",
      role: "Intern",
      image: "Uploads/home/prof.jpg",
      quote:
        "Thanks to KBM, I not only understood the application process but also received practical advice that helped me settle into my new environment smoothly.",
      bg: "bg-[#F4E9DC] text-[#7A542F] shadow-xl",
    },
    {
      id: 4,
      name: "Sanjana Rai",
      role: "Research Scholar",
      image: "Uploads/home/prof.jpg",
      quote:
        "From documentation to pre-departure guidance, KBM Education Consultancy was there for me at every stage. Their expertise made my transition seamless.",
      bg: "bg-black text-white",
    },
  ];

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 my-12 mx-6">
        <div className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10">
          <h1 className="mb-3 text-text">Transforming Futures</h1>
          <h2 className="text-text/80 text-2xl sm:text-3xl lg:text-4xl">
            Hear What Our Students Say About KBM
          </h2>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] gap-3">
            <div
              className={`${testimonials[0].bg} rounded-3xl p-4 sm:p-6 flex flex-col items-start justify-between min-h-[250px] sm:min-h-[300px]`}
            >
              <div className="text-sm sm:text-base">
                <p className="text-4xl md:text-6xl font-extrabold mb-7 md:mb-9">
                  Visa Granted to{" "}
                  <span className="inline-block">Australia 🇦🇺</span>
                </p>

                <span className="block pr-2 mb-2">
                  <FaQuoteLeft />
                </span>
                {testimonials[0].quote}
              </div>
              <div className="flex gap-3 mt-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                  <img
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="overflow-hidden rounded-full h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-sm sm:text-base">
                  <div className="font-semibold">{testimonials[0].name}</div>
                  <div className="text-[#7A542F]/70">
                    {testimonials[0].role}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-rows-1 lg:grid-rows-2 gap-3">
              <div
                className={`${testimonials[1].bg} rounded-3xl p-4 sm:p-6 flex flex-col items-start justify-between min-h-[250px] sm:min-h-[300px]`}
              >
                <div className="text-sm sm:text-base">
                  <span className="block pr-2 mb-2">
                    <FaQuoteLeft />
                  </span>
                  {testimonials[1].quote}
                </div>
                <div className="flex gap-3 mt-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                    <img
                      src={testimonials[1].image}
                      alt={testimonials[1].name}
                      className="overflow-hidden rounded-full h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-sm sm:text-base">
                    <div className="font-semibold">{testimonials[1].name}</div>
                    <div className="text-gray-600">{testimonials[1].role}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  className={`${testimonials[2].bg} rounded-3xl p-4 sm:p-6 flex flex-col items-start justify-between min-h-[250px]`}
                >
                  <div className="text-sm sm:text-base">
                    <span className="block pr-2 mb-2">
                      <FaQuoteLeft />
                    </span>
                    {testimonials[2].quote}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                      <img
                        src={testimonials[2].image}
                        alt={testimonials[2].name}
                        className="overflow-hidden rounded-full h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col text-sm sm:text-base">
                      <div className="font-semibold">
                        {testimonials[2].name}
                      </div>
                      <div className="text-[#7A542F]/80">
                        {testimonials[2].role}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${testimonials[3].bg} rounded-3xl p-4 sm:p-6 flex flex-col items-start justify-between min-h-[250px]`}
                >
                  <div className="text-sm sm:text-base">
                    <span className="block pr-2 mb-2">
                      <FaQuoteLeft />
                    </span>
                    {testimonials[3].quote}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                      <img
                        src={testimonials[3].image}
                        alt={testimonials[3].name}
                        className="overflow-hidden rounded-full h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col text-sm sm:text-base">
                      <div className="font-semibold">
                        {testimonials[3].name}
                      </div>
                      <div className="">{testimonials[3].role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-4 sm:gap-0 mt-6 mb-16">
          <div className="text-base sm:text-lg text-center sm:text-left">
            1000+ Satisfied Students from KBM
          </div>
          <div>
            <Link to="/about/testimonials">
              <button className="px-4 sm:px-6 py-2 bg-background shadow-xl text-text text-base sm:text-lg font-extrabold rounded-xl flex items-center gap-2 hover:bg-gray-200 transition-colors">
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
