import React from "react";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="relative bg-white text-black overflow-hidden min-h-screen">
      {/* Angled Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 85%)",
          backgroundImage: "url('Uploads/home/one.jpeg')",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* White Content Box */}
        <motion.div
          className="bg-white backdrop-blur-2xl rounded-2xl shadow-2xl p-8 md:p-16 mt-40"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-12 text-center text-gray-900 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're KBM Education Consultancy
          </motion.h1>

          <div className="space-y-8 text-gray-700 leading-relaxed text-lg md:text-xl">
            <motion.p
              className="text-justify"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptatibus, nam, vel odit repellat quidem est ipsa beatae nulla,
              ab quisquam obcaecati asperiores neque. Sapiente voluptatem
              deleniti culpa quas? Dolore tempora cum nesciunt accusamus quidem
              dolorum sequi at qui harum nemo neque sit, reiciendis aperiam eum
              eaque beatae quas deserunt distinctio optio. Inventore, facilis
              quidem id fugit nulla saepe neque nostrum quibusdam quas,
              laboriosam adipisci culpa optio minima doloribus odit praesentium
              voluptatibus at veniam quisquam animi quod! Sit distinctio
              perferendis, quidem, odio fuga quasi perspiciatis ducimus et
              dolores neque dolore, doloribus culpa ex veniam? Porro molestias
              reprehenderit explicabo officia voluptatem.
            </motion.p>

            <motion.p
              className="text-justify"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              quas repellendus architecto, ex nesciunt aspernatur nobis
              consectetur alias magnam a. Distinctio, laboriosam culpa! Laborum,
              quisquam consectetur, hic dolorum sit sequi, repellendus officiis
              recusandae esse cumque porro illo quaerat suscipit dolores omnis
              doloribus numquam neque at mollitia? Veniam id eum eius optio quae
              quod provident incidunt culpa possimus ducimus sint, similique
              illo architecto non, quisquam adipisci tenetur dignissimos
              voluptate quam tempora saepe! Rem quasi totam tempore, aperiam
              vitae voluptas doloremque! Distinctio.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
