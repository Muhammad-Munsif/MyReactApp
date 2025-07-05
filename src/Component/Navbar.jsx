import React from 'react'

const Navbar = () => {
  return (
    <div>
       <div className="flex items-center justify-between px-6 py-10">
        <img
          src="/images/logo.png"
          alt="image is not found"
          style={{ width: "60px", height: "60px" }}
          className=""
        />
        <nav className=" text-white  ">
          <ul className="flex flex-row gap-4 text-2xl py-4 px-4 mx-3">
            <li>
              <a
                href=""
                className="bg-[#55E5A4] py-2.5 px-7 rounded-[10px] text-black font-semibold"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                className="bg-[#55E5A4] py-2.5 px-7 rounded-[10px] text-black font-semibold"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href=""
                className="border border-white py-2.5 px-7 rounded-[10px] text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <img
          src="/images/lightdark.png"
          alt="image is not found"
          style={{ width: "30px", height: "30px" }}
          className=""
        />
      </div>
    </div>
  )
}

export default Navbar;
