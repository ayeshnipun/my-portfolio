import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HomeSection = () => {
  return (
    <section id="home" className="bg-hero w-full h-full bg-cover">
      <img src="/images/banner.png"></img>
      <h1 className="title">
        Hi, I’m Othman <br />
        <Typewriter
          words={["Eat", "Sleep", "Code", "Repeat!"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <h2>Based in Iraq.</h2>
    </section>
  );
};

export default HomeSection;
