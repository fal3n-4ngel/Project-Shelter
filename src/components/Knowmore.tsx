import React from "react";
import Image from "next/image";
import dog from "../assets/dog.png";

export default function Knowmore() {
  return (
    <div className="  ">
      <div className=" group relative  m-10 border-[0.01em] border-slate-400 rounded-xl  max-w-[20rem] flex flex-col  ease-in  hover:shadow-[10px_10px_0px_rgb(239,68,68)] hover:translate-x-[-10px] hover:translate-y-[-10px] transition-all">
        <div className="w-80 h-96 rounded-xl relative ">
          <div className="blur-md  rounded-t-lg img w-[100%] h-[80%] bg-gray-200">
            <Image
              src={dog}
              alt=""
              className="h-[100%] group-hover:hidden  border-black border-b-2 rounded-t-xl "
            />
          </div>
          <div className="absolute hidden group-hover:block  text-black font-semibold text-4xl top-[150px] left-[60px] ease-in transition-all">
            Know More
          </div>
        </div>
      </div>
    </div>
  );
}
