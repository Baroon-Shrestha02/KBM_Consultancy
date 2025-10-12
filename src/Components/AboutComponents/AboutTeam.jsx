import React from "react";
import { motion } from "framer-motion";

export default function AboutTeam() {
  return (
    <section className="container mx-auto px-4 py-20">
      {/* Heading */}
      <motion.div
        className="text-3xl md:text-5xl font-extrabold text-center md:text-left mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Who are behind Your Success?
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          className="space-y-6 text-gray-700 text-lg md:text-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            architecto distinctio omnis facere unde, voluptate dolores nihil
            officiis aperiam eveniet, ut autem pariatur consequuntur esse nulla
            tempora dolore sequi quis ab! Quis, molestias doloremque pariatur
            exercitationem deleniti non aliquid eaque nostrum consequuntur harum
            aperiam enim, ipsam veniam totam culpa iure qui corrupti optio
            labore et in accusantium. Nesciunt quod, inventore possimus quasi
            voluptatum optio consectetur, odio eveniet cumque reprehenderit
            dicta ullam nostrum quam aspernatur magni at hic totam. Nisi
            repellendus laudantium commodi, quisquam quam repellat nam?
            Architecto, soluta maiores. Sint placeat eum, voluptates magni,
            rerum officia odio minima iusto nam corrupti necessitatibus odit
            ipsum enim quam quasi beatae recusandae fugiat facere dicta.
          </p>
          <button className="text-lg underline text-blue-600 hover:text-blue-800 transition-colors">
            See More about your instructors
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-rows-2 gap-4">
            <motion.div
              className="h-60 overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="Uploads/home/intro2.png"
                alt="Team Member 1"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              className="h-60 overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="Uploads/home/hero2.png"
                alt="Team Member 2"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            className="h-full overflow-hidden rounded-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="Uploads/home/hero.avif"
              alt="Team Member 3"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
