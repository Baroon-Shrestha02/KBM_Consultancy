import React from "react";
import HomeHero from "./HomeHero";
import HomeIntro from "./HomeIntro";
import HomeWhy from "./HomeWhy";
import HomeContact from "./HomeContact";
import HomeCta from "./HomeCta";
import HomeServices from "./HomeServices";

export default function Index() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeServices />
      <HomeWhy />
      <HomeContact />
      {/* <HomeCta /> */}
    </>
  );
}
