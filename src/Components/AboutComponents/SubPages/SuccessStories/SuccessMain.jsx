import React from "react";
import SuccessHero from "./SuccessHero";
import SuccessStories from "./SuccessStories";
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2";

export default function SuccessMain() {
  return (
    <div>
      <HeroSection2
        title="Why Choose KBM?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            eveniet, facilis a aspernatur debitis, suscipit ratione delectus
            consequuntur molestiae cum expedita cupiditate non autem explicabo."
        // btnText="Learn More"
      />
      <SuccessStories />
    </div>
  );
}
