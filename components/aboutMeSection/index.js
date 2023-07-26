

import Image from 'next/image'

export default function AboutMeSection() {
  return (

    <div className="h-screen w-screen flex">
        <div className="h-full min-w-[10%]"></div>
        <div className="h-full w-1/2  text-[1.2vw] p-16">
            <div className="font-unicaone text-[5vw]">
                {introduction}
            </div>
            <br/>
            <div>
                {aboutMeText}
            </div>
        </div>
        <div className='h-full min-w-[40%] flex justify-center items-center'>
          <Image className='h-4/5 rounded-[20px] border'src="/duck-dance.gif" width={500} height={500} alt="" />
        </div>
    </div>
    
  );
}

const introduction = "Meet Luke Mai"
const aboutMeText = <div>Step right up and witness Luke Mai, the Junior Software Developer who’s quickly making a name for himself! With a knack for slaying code dragons and an endless stream of enthusiasm, Luke is the versatile developer you never knew you needed.<br/><br/>  Versatility is Luke’s superpower, rocking both front-end and back-end development like a hurricane. No challenge is too great, and no coffee mug is ever big enough for this code-crunching juggernaut.<br/><br/>  Are you ready to be amazed? Hold on as we dive into the wild world of Luke Mai and explore his exciting portfolio of software development projects!"
</div>