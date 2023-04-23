import React from 'react'

type buttonProps = {
    bgcolor: string;
    shadow: string;
    textColor: string;
    text: string;
    click?: any;
}

export default function PopButton(props: buttonProps) {
  return (
    <div>
      <button onClick={props.click} className={`w-36 h-12 ${props.bgcolor} ${props.textColor} font-semibold text-xl px-3 border-[1px] m-2  border-black rounded-md drop-shadow-[0px_0px_0px_rgb(0,0,0)] hover:shadow-none shadow-[6px_6px_0px_rgb(0,0,0)]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all  `}>
              {props.text}
        </button>
    </div>
  )
}
