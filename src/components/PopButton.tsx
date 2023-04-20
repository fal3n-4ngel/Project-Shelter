import React from 'react'

type buttonProps = {
    bgcolor: string;
    shadow: string;
    textColor: string;
    text: string
}

export default function PopButton(props: buttonProps) {
  return (
    <div>
      <button className={`w-24 h-12 ${props.bgcolor} ${props.textColor} px-3 border-[1px] m-2  border-black rounded-md drop-shadow-[0px_0px_0px_${props.shadow}] hover:shadow-none shadow-[6px_6px_0px_${props.shadow}]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all  `}>
              {props.text}
        </button>
    </div>
  )
}
