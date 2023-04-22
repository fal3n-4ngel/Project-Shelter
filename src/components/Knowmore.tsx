import React from "react";
import Image from "next/image";
import dog from "../assets/dog.png";

export default function Knowmore() {
  return (
    <div className=" ">
      <div className=" border-[0.02em] border-black max-w-[20rem] flex flex-col  m-10   rounded-xl hover:shadow-[10px_10px_0px_rgb(239,68,68)] hover:translate-x-[-10px] hover:translate-y-[-10px] transition-all">
        <div className=" rounded-t-lg img w-[100%] h-[80%] bg-black">
          <Image
            src={dog}
            alt=""
            className="h-[100%] border-black border-b-2 rounded-t-xl "
          />
        </div>
        <div className="bg-white flex justify-between items-center m-2">
          <div className="flex justify-center flex-col mt-1 gap-1">
            <h1 className="text-black text-2xl font-semibold">Name</h1>
          </div>
          <h1 className=" text-red-500 text-2xl font-regular"> Test</h1>
        </div>
      </div>
    </div>
  );
}