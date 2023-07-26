import Link from "next/link";
import Image from "next/image";

export default function Card (props){
    return(<div className="min-w-1/3 w-1/3 h-full flex flex-wrap p-4 snap-start">
        <div className="h-[10%] font-unicaone text-[2vw] min-w-full ">{props.projectName}aaa</div>
        <div className="h-[40%] w-full "><Image className="h-full rounded-[20px]" alt="" fill={false} src={props.imgLink} width={1000} height={250}/></div>
        <div className="h-[50%] overflow-hidden">{props.description}</div>
    </div>)
}