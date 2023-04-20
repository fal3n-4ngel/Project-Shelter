import Image from "next/image";
import { Inter } from "next/font/google";
import PetBox from "@/components/PetBox";
import PopButton from "@/components/PopButton";
import dog from "../assets/dog.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <nav id="navbar" className="w-full bg-white border border-gray-200 ">
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row items-center justify-start">
            <div className="w-20">
              <img src="data:image/png;base64,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"></img>
            </div>
            <div className="text-lg text-black font-semibold">Shelter</div>
          </div>
          <div className="flex flex-row justify-between space-x-4">
            <div className="text-black">Home</div>
            <div className="text-black">About Us</div>
            <div className="text-black">Collection</div>
            <div className="text-black">Gallery</div>
          </div>

          <div className="flex flex-row justify-between items-center space-x-4">
            <PopButton text="Contribute" bgcolor="bg-red-500" textColor="text-white" shadow="rgb(0,0,0)" />
          </div>
        </div>
      </nav>

      <div className="border-2 border-black min-h-[100vh] relative ">

        <div id="home" className=" text-black min-h-[500px] border-b-[5px] border-black  h-[60vh] flex justify-between pl-12">
          <div className="max-w-[60%] flex flex-col  justify-center">
            <h1 className="mb-5 text-7xl font-bold">Rhon put some catchphrase here</h1>
            <p className="text-lg m-4 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, consequuntur pariatur ut quisquam, recusandae cupiditate consectetur molestias quia atque veritatis impedit qui hic explicabo ex debitis porro sint. Repellendus, quibusdam?</p>
            <PopButton text="Contribute" bgcolor="bg-red-500" textColor="text-white" shadow="rgb(0,0,0)" />
          </div>
          <div className="w-[70%] flex justify-end">
            <div className=' bg-white flex flex-col border-2 border-black m-10  w-[350px] h-[400px] rounded-xl hover:shadow-[10px_10px_0px_rgb(0,0,0)] hover:translate-x-[-10px] hover:translate-y-[-10px] transition-all'>
              <div className=" rounded-t-lg img w-[100%] h-[80%] bg-black">
                <Image src={dog} alt="" className="h-[100%] rounded-t-xl "/>
              </div>
              <div className=' flex justify-between items-center m-5'>
                <div className="flex justify-center flex-col mt-1 gap-1">
                  <h1 className='text-black text-3xl font-bold'>Name</h1>
                </div>
                <h1 className=' text-red-500 text-3xl font-bold'> rarity</h1>
              </div>
            </div>
          </div>
        </div>

        <div id="aboutUs" className="h-[100vh] border-b-[5px] border-black">
          <div>

          </div>
          <div>
            
          </div>
        </div>

        <div id="collection" className="relative w-[100%] flex flex-col item-center justify-start">
          <h1 className="text-black font-bold text-[70px] m-auto">Our Collection</h1>
          <div className=" flex justify-evenly m-10 h-70vh flex-wrap">
            <PetBox />
            <PetBox />
            <PetBox />
            <PetBox />
            <PetBox />
          </div>
        </div>

        <div className="footer p-5 bg-red-500 w-50 flex justify-between">
          <div className="flex items-center space-x-4">
            <img
              className="w-20"
              src="data:image/png;base64,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"
            ></img>
            <div className="text-lg text-white font-semibold">Shelter</div>
          </div>

          <div className="flex space-x-6 justify-between items-center">
            <div className="text-white">Home</div>
            <div className="text-white">About Us</div>
            <div className="text-white">Collection</div>
            <div className="text-white">Gallery</div>
          </div>
          <div className="buttons flex space-x-5 justify-between items-center">
            <button className="p-4 border rounded-[100%] border-grey-200">
              face
            </button>
            <button className="p-4 border rounded-[100%] border-grey-200">
              inst
            </button>
            <button className="p-4 border rounded-[100%] border-grey-200">
              twit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
