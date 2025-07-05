import React from "react";

const Contact = () =>{

    return(
        <div>
            <h1 className="text-center">Get In Touch</h1>
            <div>
                <div>
                    <img src="/images/rect-img5.png" alt="" />
                    <h2>Let’s discuss on something <span className="text-[#55E5A4]">cool</span> together</h2>
                </div>
                <div>
                    <p>I’m interested in...</p>
                    <div className="flex items-center justify-between">
                        <button className=" text-center font-semibold text-black
                         py-2 px-5 border border-[#55E5A4]">Frontend</button>
                        <button className="text-[#2E02494D] py-2 px-5 border border-[#EEEEEE]">GIS</button>
                    </div>
                    <button className="text-[#2E02494D] py-2 px-5 border border-[#EEEEEE]">Other</button>
                    <form action="">
                        <input type="text" placeholder="Your name" className="border-none py-3 w-full border border-b-[#151C25]" />
                        <input type="email" placeholder="Email" className="border-none py-3 w-full border border-b-[#151C25]" />
                        <textarea name="" placeholder="your message" id="" cols="30" className="border-none py-3 w-full border border-b-[#151C25]"></textarea>
                        <button></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;