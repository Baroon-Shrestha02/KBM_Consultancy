import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Sharma",
      image: "Main/student1.jpg",
      quote:
        "The instructors were incredibly supportive and made complex topics easy to understand. My experience here truly transformed my career path. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, molestias possimus. Corporis omnis aut commodi tenetur ea? Ducimus, laboriosam obcaecati necessitatibus eaque, harum, voluptatibus corrupti tempore numquam accusamus laborum doloremque itaque! Quo tenetur quia at, reprehenderit nemo sit repellendus enim sequi unde totam libero minus optio, vel et fuga numquam voluptatem sint, officiis doloremque quam voluptates a! Deleniti eaque atque commodi animi explicabo modi consequuntur, ad alias dolorem recusandae placeat.",
    },
    {
      id: 2,
      name: "Priya Karki",
      image: "Main/student2.jpg",
      quote:
        "I loved how interactive and practical the sessions were. It wasn’t just theory – we actually got hands-on experience on real-world projects.",
    },
    {
      id: 3,
      name: "Rohit Thapa",
      image: "Main/student3.jpg",
      quote:
        "The learning environment and mentorship exceeded my expectations. I feel more confident in my skills and career direction.",
    },
    {
      id: 4,
      name: "Aarav Sharma",
      image: "Main/student1.jpg",
      quote:
        "The instructors were incredibly supportive and made complex topics easy to understand. My experience here truly transformed my career path.",
    },
    {
      id: 5,
      name: "Priya Karki",
      image: "Main/student2.jpg",
      quote:
        "I loved how interactive and practical the sessions were. It wasn’t just theory – we actually got hands-on experience on real-world projects.",
    },
    {
      id: 6,
      name: "Rohit Thapa",
      image: "Main/student3.jpg",
      quote:
        "The learning environment and mentorship exceeded my expectations. I feel more confident in my skills and career direction.",
    },
    {
      id: 7,
      name: "Aarav Sharma",
      image: "Main/student1.jpg",
      quote:
        "The instructors were incredibly supportive and made complex topics easy to understand. My experience here truly transformed my career path.",
    },
    {
      id: 8,
      name: "Priya Karki",
      image: "Main/student2.jpg",
      quote:
        "I loved how interactive and practical the sessions were. It wasn’t just theory – we actually got hands-on experience on real-world projects.",
    },
    {
      id: 9,
      name: "Rohit Thapa",
      image: "Main/student3.jpg",
      quote:
        "The learning environment and mentorship exceeded my expectations. I feel more confident in my skills and career direction.",
    },
    {
      id: 10,
      name: "Aarav Sharma",
      image: "Main/student1.jpg",
      quote:
        "The instructors were incredibly supportive and made complex topics easy to understand. My experience here truly transformed my career path.",
    },
    {
      id: 11,
      name: "Priya Karki",
      image: "Main/student2.jpg",
      quote:
        "I loved how interactive and practical the sessions were. It wasn’t just theory – we actually got hands-on experience on real-world projects.",
    },
    {
      id: 12,
      name: "Rohit Thapa",
      image: "Main/student3.jpg",
      quote:
        "The learning environment and mentorship exceeded my expectations. I feel more confident in my skills and career direction.",
    },
  ];

  return (
    <div className="min-h-screen my-12 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row">
        {/* Title Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white lg:sticky lg:top-0 lg:h-screen mb-8 lg:mb-0">
          <div className="max-w-md p-4 md:p-8 text-center lg:text-left">
            <div className="relative">
              <div className="absolute -top-10 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 opacity-30">
                <img
                  src="Main/logo2.png"
                  alt="Logo"
                  className="h-[100px] object-contain"
                />
              </div>

              {/* Main heading */}
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  What Do Our Students Say?
                </h1>
                <p className="text-gray-600 text-base md:text-lg">
                  Hear from our students who experienced personal growth,
                  practical learning, and success through our programs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                  />

                  {/* Quote and Name */}
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed italic mb-3 text-justify">
                      “{item.quote}”
                    </p>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      — {item.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
