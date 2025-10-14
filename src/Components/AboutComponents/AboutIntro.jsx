import React from "react";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="relative bg-white text-black overflow-hidden min-h-screen">
      {/* Angled Background Image */}
      <div
        className="absolute inset-0 w-full h-[70vh] bg-cover bg-center"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 85%)",
          backgroundImage: "url('Uploads/home/one.jpeg')",
        }}
      ></div>

      <div className="relative z-10 container h-full mx-auto ">
        {/* White Content Box */}
        <div className="absolute inset-0 -z-10"></div>
        <div className="grid grid-cols-2 m-12 gap-4">
          <div className="grid grid-cols-2 gap-2 bg-white border-white border-6 rounded-3xl">
            <div className="">
              <img
                src="Uploads/home/hero.avif"
                alt=""
                className="h-full w-full object-cover rounded-3xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <img
                  src="Uploads/home/hero.avif"
                  alt=""
                  className="h-full w-full object-cover rounded-3xl"
                />
              </div>
              <div>
                <img
                  src="Uploads/home/hero.avif"
                  alt=""
                  className="h-full w-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-4">
            <motion.h1
              className="text-4xl font-extrabold mb-12 text-center text-black leading-tight"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're KBM Education Consultancy
            </motion.h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              accusantium quo necessitatibus earum. Dolore pariatur repudiandae
              rem similique perspiciatis voluptates ipsa, alias adipisci velit
              repellat totam aut illo consectetur quasi qui unde. Est amet quam
              omnis officiis ex. Veritatis quae maxime, nisi vitae ullam ducimus
              nesciunt consequuntur vero sapiente eligendi tempore magnam
              repellendus, cupiditate ea, eius numquam suscipit explicabo? Eaque
              non omnis quaerat blanditiis eum provident perferendis, ab
              possimus id libero soluta quis ratione quam esse rem mollitia iure
              consequuntur ut officiis fuga aspernatur. Veritatis doloremque
              aspernatur minus ut amet, voluptatem at magnam consectetur,
              possimus qui ex, rerum odio! Doloribus?
            </p>
            <p className="italic text-base">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, culpa."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
