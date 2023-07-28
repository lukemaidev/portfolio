"use client";

import ContactPage from "@/components/contact";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [Page, setPage] = useState(1);

  const changePage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber < 5) {
      setPage(pageNumber);
    }
  };

  return (
    <main>
      <div className="w-screen h-screen overflow-hidden flex items-center text-poppins justify-center">
        <div className="glass w-2/3 h-2/3 grid grid-cols-3 grid-rows-3 p-8 gap-8">
          <div className="glass bg-white/[0.2] row-span-3 col-span-1 overflow-hidden">
            <Image
              className="h-2/3 w-full"
              src="/duck-dance.gif"
              width={500}
              height={500}
              alt=""
            />
            <div className="h-1/3 w-full flex justify-center items-center text-center font-inter text-white flex flex-col ">
              <div className="flex justify-center items-center text-center font-bold text-6xl w-full h-2/3">
                Luke Mai
              </div>
              <div className="flex background-color justify-center items-center text-center  text-xl w-full h-1/3">
                Junior Software Developer
              </div>
            </div>
          </div>

          <div className=" glass overflow-hidden row-span-3 col-span-2 grid grid-cols-1 grid-rows-1 scrollbar-hide relative">
              <div className="h-[20%] w-[100%] background-color absolute top-0 z-[-10]"/>
              <div
                className="h-[20%] w-[10%] rounded-none absolute top-0 flex"
                onClick={() => changePage(Page - 1)}
              >
                <Link
                  className="w-full h-full flex align-center items-center justify-center"
                  href={"#" + (Page - 1).toString()}
                >
                  <div className="w-[40px] h-[40px]">
                    <Image src="/left.png" width={100} height={100} alt="" />
                  </div>
                </Link>
              </div>
              <div
                className="h-[20%] w-[10%] rounded-none  absolute top-0 right-0 flex"
                onClick={() => changePage(Page + 1)}
              >
                <Link
                  className=" w-full h-full flex align-center items-center justify-center"
                  href={"#" + (Page + 1).toString()}
                >
                  <div className="w-[40px] h-[40px]">
                    <Image src="/right.png" width={100} height={100} alt="" />
                  </div>
                </Link>
              </div>

              <div className=" scrollbar-hide snap-x flex snap-mandatory h-full w-full overflow-scroll oveflow-auto text-slate-50 font-martianmono scroll-smooth">
                <div
                  className=" snap-start min-w-full h-full flex items-center justify-center grid grid-rows-5 grid-cols-1"
                  id="1"
                >
                  <div className=" row-span-1 col-span-1 min-w-full h-full flex items-center justify-center">
                    About Me
                  </div>
                  <div className="row-span-4 col-span-1 h-full min-w-full p-4 overflow-hidden">
                  I'm Luke Mai, a soon-to-be-graduate Junior Software Developer with a passion for web and software development. <br/><br/>
                  Proficient in Next.js and Tailwind CSS, I create dynamic and elegant web experiences. Problem-solving is my forte, and collaboration is integral to my approach.<br/> <br/>
                  Driven by ambition, I stay updated with industry trends, always seeking growth opportunities. Excited to contribute my skills and make a positive impact, I look forward to the fascinating world of web and software development ahead.
                  </div>
                </div>
                <div
                  id="2"
                  className="snap-start min-w-full h-full flex items-center justify-center grid grid-rows-5 grid-cols-1"
                >
                  <div className="  row-span-1 col-span-1 min-w-full h-full flex items-center justify-center">
                    Projects
                  </div>
                  <div className="row-span-4 col-span-1 h-full min-w-full p-4 overflow-hidden">
                    There's no projects for now but there's a gif of a dancing cat <Image src="/cat-sombrero.gif" width={100} height={100} alt="" />
                  </div>
                </div>
                <div
                  id="3"
                  className="snap-start min-w-full h-full flex items-center justify-center grid grid-rows-5 grid-cols-1"
                >
                   <div className=" row-span-1 col-span-1 min-w-full h-full flex items-center justify-center">
                    Work History
                  </div>
                  <div className="row-span-4 col-span-1 h-full min-w-full p-4 overflow-hidden">
                    There's no work history for now but there's a gif of a dancing duck <Image src="/duck-dance.gif" width={100} height={100} alt="" />
                  
                  </div>
                </div>
                <div
                  id="4"
                  className="snap-start min-w-full h-full flex items-center justify-center grid grid-rows-5 grid-cols-1"
                >
                 <div className=" row-span-1 col-span-1 min-w-full h-full flex items-center justify-center">
                    Contact Me
                  </div>
                  <div className="row-span-4 col-span-1 h-full min-w-full p-4 overflow-hidden">
                  <ContactPage/>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
