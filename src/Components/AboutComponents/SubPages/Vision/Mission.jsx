import React from "react";

export default function Mission() {
  return (
    <section className="mx-6 bg-green-100 h-[90vh] flex items-center">
      <div className="container mx-auto p-6 md:p-10 h-full">
        {/* Use grid to divide height equally among 3 rows */}
        <div className="grid grid-rows-3 h-full gap-4">
          {/* (01) and Heading */}
          <div className="flex items-center justify-between">
            <div className="text-4xl md:text-7xl font-extralight italic">
              (02)
            </div>
            <div className="text-5xl md:text-8xl font-extrabold">
              Our Mission
            </div>
          </div>

          {/* Description */}
          <div className="flex items-center justify-center text-center px-4">
            <p className="max-w-4xl text-sm sm:text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              consectetur voluptas deserunt distinctio reprehenderit cumque, nam
              labore veritatis quisquam tempore, incidunt quam animi omnis enim
              sequi fuga saepe nobis voluptatum ut. Laborum fuga, rerum iure
              maiores sequi sunt qui, ut animi enim aspernatur incidunt minima
              minus blanditiis magni consequuntur recusandae corrupti ipsam
              neque id. Rerum vel expedita beatae tenetur fugiat quod itaque
              voluptates cumque corporis, impedit totam laudantium iusto illo
              exercitationem ipsam ab quae, maiores accusantium nihil velit
              nesciunt perferendis dolor sapiente.
            </p>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center overflow-hidden rounded-2xl">
            <img
              src="/Uploads/about/vision.jpg"
              alt="Our Vision"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
