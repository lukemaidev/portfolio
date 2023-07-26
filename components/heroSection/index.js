import Link from "next/link";
import FadeOutBox from "../fadeoutbox";

export default function HeroSection() {
  return (
    <div className="w-screen h-screen grid grid-cols-1 grid-rows-6 flex justify-center">
      <div className="font-unicaone text-[20vw] row-span-4 flex ">
        <div className="w-full h-full text-center">
          LUKE MAI
        </div>
      </div>
      <div className="font-unicaone text-[2vw] text-center">
        <FadeOutBox>Junior Software Developer</FadeOutBox>
      </div>
      <div className="text-[1vw] justify-center flex space-x-10 items-center text-center flex justify-center">

          <FadeOutBox>
            <Link href="#aboutme" scroll={true}>
              About me
            </Link>
          </FadeOutBox>

          <FadeOutBox>
            <Link href="#projects" scroll={true}>
              Projects
            </Link>
          </FadeOutBox>

          <FadeOutBox>
            <Link href="#contactme" scroll={true}>
              Contact me
            </Link>
          </FadeOutBox>

      </div>
    </div>
  );
}
