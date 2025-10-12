import React from "react";
import { motion } from "framer-motion";

export default function HomeIntro() {
  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "1000+", label: "Happy Students" },
    { value: "99%", label: "Success Rate" },
  ];

  return (
    <section className="container mx-auto px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-8">
        {/* Left Side - Stats and Image */}
        <div className="flex items-center ">
          <div className="w-full space-y-8 flex items-center">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-xl rounded-l-2xl p-8 space-y-6 border border-gray-100"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  <span className="block text-gray-600 text-sm font-medium tracking-wide mt-1">
                    {stat.label}
                  </span>
                  {index < stats.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-gray-200 to-transparent mt-6"></div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[70vh] overflow-hidden shadow-lg"
            >
              <img
                src="Uploads/home/intro2.png"
                alt="Travel Experience"
                className="h-full w-full object-cover  transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center space-y-6 bg-gray-100 p-6 rounded-2xl"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            We're KBM Education Consultancy Pvt. Ltd.
          </h1>

          <div className="space-y-4 text-gray-600 leading-relaxed ">
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
              quidem tempore ullam amet odio nemo obcaecati necessitatibus
              dolor, voluptatem, maxime a excepturi optio dicta? Nesciunt fuga
              iusto consectetur harum atque illum culpa porro facere aut ratione
              sequi, voluptatum officia quasi a! Aliquid soluta, modi
              voluptatibus distinctio ipsa porro vitae, quo, optio fugit cumque
              odit possimus quas recusandae perferendis voluptate obcaecati.
            </p>

            <p className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              distinctio nam voluptas eligendi perferendis magni incidunt
              laboriosam ut ea. Delectus, harum minima. Voluptatum perspiciatis
              repudiandae est quas. Expedita veniam alias voluptatem quas, sed
            </p>
          </div>

          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
