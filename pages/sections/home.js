import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HomeSection = () => {
  return (
    <section id="home" className="bg-hero w-full h-full bg-cover">
      <div className="w-full h-full items-center justify-center flex flex-col">
        <div
          className="w-48 h-48 rounded-full"
          style={{ backgroundColor: "hsla(0,0%,100%,.08)" }}
        >
          <img
            src="/images/banner.jpg"
            className="w-full h-full rounded-full p-2"
          ></img>
        </div>

        <h1 className="uppercase text-5xl font-bold font-raleway">
          Ayesh <span style={{ color: "#06fefe" }}>Nipun</span>{" "}
        </h1>
        <h1 className="text-4xl font-bold mt-3 font-raleway">
          <Typewriter
            words={["Senior Software Engineer", "Microsoft Certified Azure Developer", "Gamer", "Freelancer", "Die-hard Marvel fan"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </h1>
      </div>
    </section>
  );
};

export default HomeSection;
