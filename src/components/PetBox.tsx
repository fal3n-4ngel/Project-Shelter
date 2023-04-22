import React from 'react'
import Image from "next/image";
import dog from "../assets/dog.png";

type petProps = {
  name: string;
  rarity: string;
  img: string
}


export default function PetBox(props: petProps) {
  return (
    <div>
      <div className=' max-w-[20rem] flex flex-col border-[0.02em] border-black m-10   rounded-xl hover:shadow-[10px_10px_0px_rgb(239,68,68)] hover:translate-x-[-10px] hover:translate-y-[-10px] transition-all'>
        <div className=" rounded-t-lg img w-[100%] h-[80%] bg-black">
        <Image src={props.img} width={300} height={300} alt="" className="h-[100%] w-[100%]  border-black border-b-2 rounded-t-xl " />
        </div>
        <div className='bg-white flex justify-between items-center m-2'>
          <div className="flex justify-center flex-col mt-1 gap-1">
            <h1 className='text-black text-2xl font-semibold'>{props.name}</h1>
          </div>
          <h1 className=' text-red-500 text-2xl font-regular'> {props.rarity}</h1>
        </div>
      </div>
    </div>
  )
}
