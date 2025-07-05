import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex justify-evenly py-12 px-[200px] ">
        <img
          src="/images/about-img.png"
          alt="person img is not found"
          className="w-100"
        />
        <div className="text-white w-[50%] ">
          <h6>Nimrod Kibet</h6>
          <h1 className="text-3xl text-[#55E5A4] font-semibold">
            Frontend & GIS Developer.
          </h1>
          <p className="text-[#A9A9A9] text-xl">
            I specialize in crafting immersive user experiences using the latest
            frontend technologies and frameworks to bring your vision to life.
            Additionally, my expertise extends to geoinformatics, where I excel
            in harnessing the power of spatial data to uncover actionable
            insights.
          </p>
          <div className="flex gap-5 mt-6">
            <button className="bg-[#55E5A4] py-2.5 px-7 rounded-[10px] text-black font-semibold">
              Get in Touch
            </button>
            <div className="flex gap-2 items-center">
              <div className="bg-[#55E5A4] w-3 h-3 rounded-[50%]"></div>
              <p className="text-[#888888]">Available now</p>
            </div>
          </div>
        </div>
        <div></div>
        <div className="bg-[#55E5A4] w-1 h-1"></div>
      </div>
    </div>
  );
};
export default About;
