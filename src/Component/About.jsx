import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex justify-evenly gap-12 py-12 w-full max-w-5xl mx-auto">
        <div>
          <img
            src="/images/about-img.png"
            alt="person img is not found"
            className="w-100"
          />
        </div>
        <div className="text-white w-[50%] ">
          <h1 className="text-3xl text-white font-semibold">About Me</h1>
          <p className="text-[#A9A9A9] text-xl">
            I am currently a master’s student in Applied Geoinformatics at the
            University of Salzburg, Austria. I have a keen interest in front-end
            and GIS development. My goal is to use my expertise in building
            exciting and functional user interfaces. Additionally, employ my
            geospatial analysis, modeling, and process automation skills to
            engineer innovative, customizable, and sustainable software
            solutions. The following are tech stacks that I use regularly:
          </p>
          <div className="flex gap-5 mt-6">
            <div className="flex gap-2 items-center flex-col">
              <img src="/images/react-img.png" alt="img not found" className="w-10 h-10" />
              <p className="text-[#888888]">React</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <img src="/images/python-img.png" alt="img not found" className="w-10 h-10" />
              <p className="text-[#888888]">python</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <img src="/images/js-img.png" alt="img not found" className="w-10 h-10" />
              <p className="text-[#888888]">JavaScript</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <img src="/images/tailwind-img.png" alt="img not found" className="w-10 h-10" />
              <p className="text-[#888888]">Tailwind</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <img src="/images/html-img.png" alt="img not found" className="w-10 h-10" />
              <p className="text-[#888888]">HTML</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <img src="/images/css-img.png" alt="img not found" className="w-10 h-10" />
              <p className="text-[#888888]">CSS</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <img src="/images/gis-img.png" alt="img not found" className="w-10 h-10" />
              <p className="text-[#888888]">GIS</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default About;
