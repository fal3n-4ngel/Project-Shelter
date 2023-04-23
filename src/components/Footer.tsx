import React from 'react'
import Image from 'next/image'
import inst from "../assets/icons/instagram.svg"
import git from "../assets/icons/github.svg"
import twit from "../assets/icons/twitter.svg"
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="footer p-5 bg-red-500 w-50 flex justify-between">
      <div className="flex items-center space-x-4">
        <Image src={logo} alt="" className="w-20 " />
        <div className="text-lg text-white font-semibold">Shelter</div>
      </div>

      <div className="text-white text-md flex space-x-6 justify-between items-center">
        ©deflated pappadam
      </div>
      <div className="buttons flex space-x-5 justify-between items-center">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <button className="p-4 border-2 rounded-[100%] border-grey-200 hover:scale-110">
            <Image src={inst} alt="" className="w-5 " />{" "}
          </button>
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <button className="p-4 border-2 rounded-[100%] border-grey-200 hover:scale-110">
            <Image src={git} alt="" className="w-5 " />{" "}
          </button>
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <button className="p-4 border-2 rounded-[100%] border-grey-200 hover:scale-110">
            <Image src={twit} alt="" className="w-5 " />{" "}
          </button>
        </a>
      </div>
    </div>
  )
}
