import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#26313F] border border-[#A9A9A9] flex items-center justify-center'>
      <img
          src="/images/logo.png"
          alt="image is not found"
          style={{ width: "60px", height: "60px" }}
          className="text-center"
        />
        <ul className='text-center text-[#A9A9A9]'>
          <li><a href="" >About</a></li>
          <li><a href="" >Project</a></li>
          <li><a href="" >Contact</a></li>
        </ul>
        <div className='flex items-center justify-center gap-10'>
          <img src="/images/github.png" alt="social img is not found" />
          <img src="/images/linkedin.png" alt="social img is not found" />
          <img src="/images/xing.png" alt="social img is not found" />
          <img src="/images/twitter.png" alt="social img is not found" />
        </div>
        <div className='border border-t-amber-100'>
          <p className=''>© 2023 Nimrod. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;
