import React from "react";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="relative bg-white text-black overflow-hidden min-h-screen">
      {/* Angled Background with Parallax Effect */}
      <motion.div
        className="absolute inset-0 w-full h-[75vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 90%)",
            backgroundImage: "url('Uploads/home/one.jpeg')",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900/60 via-purple-900/50 to-black/60"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 90%)",
          }}
        />
        {/* Animated Overlay Pattern */}
        <motion.div
          className="absolute inset-0 w-full h-full opacity-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 90%)",
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-7xl mx-auto items-center">
          {/* Image Gallery - Redesigned */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Main Container with Glass Effect */}
            <div className="relative bg-white/80 backdrop-blur-xl p-5 rounded-[2.5rem] shadow-2xl border border-white/20">
              {/* Grid Layout */}
              <div className="grid grid-cols-5 grid-rows-4 gap-4 h-[500px]">
                {/* Large Image - Spans 3 columns, 4 rows */}
                <motion.div
                  className="col-span-3 row-span-4 relative overflow-hidden rounded-3xl group"
                  whileHover={{ scale: 1.02, rotate: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <img
                    src="Uploads/home/hero.avif"
                    alt="KBM Education Consultancy"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white font-semibold text-lg">
                      Your Future Starts Here
                    </p>
                  </div>
                </motion.div>

                {/* Top Small Image - Spans 2 columns, 2 rows */}
                <motion.div
                  className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl group"
                  whileHover={{ scale: 1.02, rotate: -0.5 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                >
                  <img
                    src="Uploads/home/hero.avif"
                    alt="Student Success"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                {/* Bottom Small Image - Spans 2 columns, 2 rows */}
                <motion.div
                  className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl group"
                  whileHover={{ scale: 1.02, rotate: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                >
                  <img
                    src="Uploads/home/hero.avif"
                    alt="Expert Guidance"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </div>

              {/* Accent Decoration */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-bl from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 -z-10" />
            </div>
          </motion.div>

          {/* Content Box - Enhanced */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="bg-white rounded-[2.5rem] p-10 lg:p-12 shadow-2xl border border-gray-100/50 relative overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)",
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>

              {/* Top Accent Bar with Animation */}
              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {/* Heading */}
              <motion.h1
                className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-8 text-gray-900 leading-tight relative"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                We're{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    KBM Education
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>{" "}
                Consultancy
              </motion.h1>

              {/* Content Paragraphs */}
              <motion.div
                className="space-y-6 text-gray-700 text-base lg:text-lg leading-relaxed relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-1 first-letter:float-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                  accusantium quo necessitatibus earum. Dolore pariatur
                  repudiandae rem similique perspiciatis voluptates ipsa, alias
                  adipisci velit repellat totam aut illo consectetur quasi qui
                  unde.
                </p>

                <p>
                  Est amet quam omnis officiis ex. Veritatis quae maxime, nisi
                  vitae ullam ducimus nesciunt consequuntur vero sapiente
                  eligendi tempore magnam repellendus, cupiditate ea, eius
                  numquam suscipit explicabo.
                </p>

                <p>
                  Eaque non omnis quaerat blanditiis eum provident perferendis,
                  ab possimus id libero soluta quis ratione quam esse rem
                  mollitia iure consequuntur ut officiis fuga aspernatur.
                </p>
              </motion.div>

              {/* Quote Section - Redesigned */}
              <motion.div
                className="mt-10 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="relative p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl overflow-hidden">
                  {/* Decorative Quote Mark */}
                  <svg
                    className="absolute -top-2 -left-2 w-20 h-20 text-blue-200 opacity-30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  {/* Left Accent Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-r-full" />

                  <div className="relative z-10 pl-4">
                    <p className="italic text-lg lg:text-xl text-gray-800 font-medium mb-4">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur, culpa."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                      <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        KBM Education Team
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Right Decoration */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
