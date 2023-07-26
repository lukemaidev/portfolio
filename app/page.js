"use client";

import AboutMeSection from '@/components/aboutMeSection'
import ContactMeSection from '@/components/contactMeSection'
import HeroSection from '@/components/heroSection'
import ProjectsSection from '@/components/projectsSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll text-slate-50 font-martianmono scroll-smooth">
      <div className='snap-start bg-neutral-950 w-screen h-screen flex items-center justify-center'>
        <HeroSection />
      </div>
      <div id='aboutme' className='snap-start bg-neutral-950 w-screen h-screen flex items-center justify-center'>
        <AboutMeSection />
      </div>
      <div id='projects' className='snap-start bg-neutral-950 w-screen h-screen flex items-center justify-center'>
        <ProjectsSection/>
      </div>
      <div id='contactme' className='snap-start bg-neutral-950 w-screen h-screen flex items-center justify-center'>
        <ContactMeSection/>
      </div>
      </div>
    </main>
  )
}
