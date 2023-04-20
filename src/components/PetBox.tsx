import React from 'react'

export default function PetBox() {
  return (
    <div>
      <div className='flex flex-col border-2 border-black m-10  w-[230px] h-[280px] rounded-xl hover:shadow-[10px_10px_0px_rgb(239,68,68)] hover:translate-x-[-10px] hover:translate-y-[-10px] transition-all'>
        <div className=" rounded-t-lg img w-[100%] h-[80%] bg-black">

        </div>
        <div className='bg-white flex justify-between items-center m-2'>
          <div className="flex justify-center flex-col mt-1 gap-1">
            <h1 className='text-black text-2xl font-bold'>Name</h1>
          </div>
          <h1 className=' text-red-500 text-2xl font-bold'> rarity</h1>
        </div>
      </div>
    </div>
  )
}
