import Card from "./components/Card";
import Carosel from "./components/Carosel";

export default function ProjectsSection() {
  return (
    <div className="w-full h-full p-8 flex">
      <div className="w-[10%] h-full"/>
      <div className="w-3/5 h-full flex flex-col">
        <div className="h-[10%]"/>
        <div className="h-[20%] p-2">
          <div className="font-unicaone text-[5vw] w-full">Projects</div>
        </div>
        <div className="h-[70%]">
          <Carosel />
        </div>
      </div>
    </div>
  );
}
