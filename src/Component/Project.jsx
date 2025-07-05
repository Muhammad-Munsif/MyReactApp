import React from "react";

const Project = () => {
  return (
    <div className="border border-b-amber-100">
      <h1 className="text-center text-xl text-white">Projects</h1>
      <div className="flex gap-5 items-center justify-center py-8">
        <button className=" hover:bg-transparent bg-[#55E5A4] py-2 px-5 border border-[#55E5A4]">
          All Projects
        </button>
        <button className="text-white hover:bg-[#55E5A4] hover:cursor-pointer hover:text-black py-2 px-5 border border-[#55E5A4]">
          Frontend
        </button>
        <button className="text-white hover:bg-[#55E5A4] hover:cursor-pointer hover:text-black  py-2 px-5 border border-[#55E5A4]">
          Geo Informatics
        </button>
      </div>
      {/* using Grid */}
      <div className="grid grid-cols-2 ">

        {/* division one code  */}
        <div className="w-">
          <img src="/images/rect-img1.png" alt="rect-img1 not found" />
          <div>
            <h1 className="text-center">Onari B Website</h1>
            <p className="text-center text-[#A9A9A9]">
              Working closely with the ONORI-B team, I collaborated to ensure
              that the website not only met but exceeded their expectations.
            </p>
            <div className="py-5">
              <h3 className="text-center text-xl">Technologies Used</h3>
              <div className="flex gap-2 items-center flex-col">
                <img
                  src="/images/react-img.png"
                  alt="img not found"
                  className="w-10 h-10"
                />
                <p className="text-[#888888]">React</p>
              </div>
              
              <div className="flex gap-2 items-center flex-col">
                <img
                  src="/images/js-img.png"
                  alt="img not found"
                  className="w-10 h-10"
                />
                <p className="text-[#888888]">JavaScript</p>
              </div>
              <div className="flex gap-2 items-center flex-col">
                <img
                  src="/images/tailwind-img.png"
                  alt="img not found"
                  className="w-10 h-10"
                />
                <p className="text-[#888888]">Tailwind</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="font-semibold text-[#55E5A4] py-2 px-5 border border-[#55E5A4]">View Live Demo</button>
                <button className="border border-white py-2 px-4">Visit Site</button>
            </div>
          </div>
        </div>
        {/* closed division one code */}

        {/* division two */}
        <div>
          <img src="/images/rect-img2.png" alt="rect-img1 not found" />
          <div>
            <h1 className="text-center">Google Earth Tweet Map</h1>
            <p className="text-center text-[#A9A9A9]">
              Working closely with the ONORI-B team, I collaborated to ensure
              that the website not only met but exceeded their expectations.
            </p>
            <div className="py-5">
              <h3 className="text-center text-xl">Technologies Used</h3>
              <div className="flex gap-2 items-center flex-col">
                <img
                  src="/images/react-img.png"
                  alt="img not found"
                  className="w-10 h-10"
                />
                <p className="text-[#888888]">React</p>
              </div>
              
              <div className="flex gap-2 items-center flex-col">
                <img
                  src="/images/js-img.png"
                  alt="img not found"
                  className="w-10 h-10"
                />
                <p className="text-[#888888]">JavaScript</p>
              </div>
              <div className="flex gap-2 items-center flex-col">
                <img
                  src="/images/tailwind-img.png"
                  alt="img not found"
                  className="w-10 h-10"
                />
                <p className="text-[#888888]">Tailwind</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="font-semibold text-[#55E5A4] py-2 px-5 border border-[#55E5A4]">View Live Demo</button>
                <button className="border border-white py-2 px-4">Visit Site</button>
            </div>
          </div>
        </div>
        {/* closed division two code */}

        {/* division three code */}
        <div>
          <img src="/images/rect-img3.png" alt="rect-img1 not found" />
          <div>
            <h1 className="text-center">Methods in Spatial Analysis</h1>
            <p className="text-center text-[#A9A9A9]">
              Working closely with the ONORI-B team, I collaborated to ensure
              that the website not only met but exceeded their expectations.
            </p>
            <div className="py-5">
              <h3 className="text-center text-xl">Technologies Used</h3>
              <div className="flex gap-2 items-center flex-col">
                <img
                  src="/images/react-img.png"
                  alt="img not found"
                  className="w-10 h-10"
                />
                <p className="text-[#888888]">React</p>
              </div>
              
              <div className="flex gap-2 items-center flex-col">
                <img
                  src="/images/js-img.png"
                  alt="img not found"
                  className="w-10 h-10"
                />
                <p className="text-[#888888]">JavaScript</p>
              </div>
              <div className="flex gap-2 items-center flex-col">
                <img
                  src="/images/tailwind-img.png"
                  alt="img not found"
                  className="w-10 h-10"
                />
                <p className="text-[#888888]">Tailwind</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="font-semibold text-[#55E5A4] py-2 px-5 border border-[#55E5A4]">View Live Demo</button>
                <button className="border border-white py-2 px-4">Visit Site</button>
            </div>
          </div>
        </div>
        {/*closed  division three code */}

        {/*division four code */}
        <div>
          <img src="/images/rect-img4.png" alt="rect-img1 not found" />
          <div>
            <h1 className="text-center">Onari B Website</h1>
            <p className="text-center text-[#A9A9A9]">
              Working closely with the ONORI-B team, I collaborated to ensure
              that the website not only met but exceeded their expectations.
            </p>
            <div className="py-5">
              <h3 className="text-center text-xl">Technologies Used</h3>
              <div className="flex gap-2 items-center flex-col">
                <img
                  src="/images/react-img.png"
                  alt="img not found"
                  className="w-10 h-10"
                />
                <p className="text-[#888888]">React</p>
              </div>
              
              <div className="flex gap-2 items-center flex-col">
                <img
                  src="/images/js-img.png"
                  alt="img not found"
                  className="w-10 h-10"
                />
                <p className="text-[#888888]">JavaScript</p>
              </div>
              <div className="flex gap-2 items-center flex-col">
                <img
                  src="/images/tailwind-img.png"
                  alt="img not found"
                  className="w-10 h-10"
                />
                <p className="text-[#888888]">Tailwind</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="font-semibold text-[#55E5A4] py-2 px-5 border border-[#55E5A4]">View Live Demo</button>
                <button className="border border-white py-2 px-4">Visit Site</button>
            </div>
          </div>
        </div>
        {/*closed  division four code */}
        <div>
            <button className=" text-center font-semibold text-[#55E5A4] py-2 px-5 border border-[#55E5A4]">View All Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
