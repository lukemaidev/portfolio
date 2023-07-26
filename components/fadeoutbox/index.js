import { useState} from "react"

export default function FadeOutBox({ children }){
    const [mouseOver, setMouseOver] = useState(false)
    return(
        <div className="relative w-full h-full">
            <div className="w-full h-full flex justify-center">
                
                <div className={mouseOver?"w-full h-full z-40 absolute left-0 top-0":"w-full h-full animate-fadeout z-40 absolute left-0 top-0"} onMouseOut={()=>{setMouseOver(false)}} onMouseOver={()=>{setMouseOver(true)}}>
                <div className="animate-blinky">{children}</div>
                </div>
                <div className=" w-full h-full z-30 absolute left-0 top-0 text-slate-50">{children}</div>
            </div>
        </div>

    )
}