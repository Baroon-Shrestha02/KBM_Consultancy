import React from "react";

export default function MainHeroHelper() {
  return (
    <>
      <section className="relative h-[70vh] overflow-hidden mx-6 my-6 rounded-4xl">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center "
          style={{
            backgroundImage: "url('/Uploads/about/hero.jpg')",
            zIndex: 0,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-black from-30% to-transparent"></div>
        </div>
        <div className="absolute bottom-8 px-8 text-white ">
          <div className="text-6xl font-extrabold">About KBM Education</div>
          <div className="max-w-4xl text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            cum ad modi nihil quas voluptas commodi omnis! Reiciendis quo minus
            ullam doloremque non. Harum, consectetur repellat eaque veritatis in
            minus nesciunt, commodi aliquam earum cupiditate, magnam similique
            sit non enim.
          </div>
        </div>
      </section>
    </>
  );
}
