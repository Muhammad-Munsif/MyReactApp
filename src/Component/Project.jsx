import React from "react";

const Project = () => {
  return (
    <div>
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
      
    </div>
  );
};

export default Project;
