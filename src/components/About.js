import React from 'react'
import Typewriter from './Typewriter'
import { AiOutlineArrowDown } from 'react-icons/ai'
import img from '../images/giphy.gif';
import css from '../images/css.png'
import git from '../images/git.png'
import java from '../images/java.png'
import react from '../images/react.png'
import tailwind from '../images/tailwind.webp'
import vscode from '../images/vscode.png'
const About = () => {

  return (
    <main class="pt-20">
     <section class="flex md:flex-row p-8 gap-8 flex-col">
      <Typewriter/>
      <div class=" w-full flex justify-center items-center">
        <img src={img} alt="img" class="rounded-lg"/>
      </div>
     </section>
     <section class="px-5">
      <div class="animate-bounce flex justify-center items-center gap-2">
        <p class="text-xl font-mono">let me tell you more</p>
        <AiOutlineArrowDown class="border border-white rounded-full"/>
      </div>
      <div class="w-max group hover:ease-out hover:w-full my-5">
        <p class="text-xl md:text-2xl group-hover:md:text-xl hover:text-sm hover:ease-out ">I build using these tools and languages </p>
        <div class="w-2/5 h-1 mt-2   group-hover:w-4/5 hover:ease-out md:group-hover:w-2/5 bg-white"/>
      </div>
      {/* /flex first tools and tech */}
      <div class=" flex justify-center items-center flex-col gap-3 md:flex-row md:justify-between ">
        <div class=" flex justify-center items-center flex-col bg-white text-black text-3xl border-t-4 border-t-yellow-500 w-4/5 pb-2 font-bold md:h-56 ">
        <img src={java} alt="img" class="w-1/2"/>
        <p >JAVASCRIPT</p>
      </div>
        <div class="pb-2 font-bold flex justify-center items-center flex-col bg-white text-black text-3xl border-t-4 border-t-red-600 w-4/5 md:h-56">
        <img src={css} alt="img" class="w-1/2"/>
        <p >HTML & CSS</p>
      </div>
        <div class="pb-2 font-bold flex justify-center items-center flex-col bg-white text-black text-3xl border-t-4 border-t-blue-400 w-4/5 md:h-56">
        <img src={react} alt="img" class="w-1/3"/>
        <p >REACT</p>
      </div>
      </div>
      {/* /flex second tools and tech */}
      <div class=" mt-4 flex justify-center items-center flex-col gap-3 md:flex-row md:justify-between ">
        <div class=" flex justify-center items-center flex-col bg-white text-black text-3xl border-t-4 border-t-yellow-500 w-4/5 pb-2 font-bold md:h-56 ">
        <img src={tailwind} alt="img" class="w-1/2"/>
        <p >TAILWIND</p>
      </div>
        <div class="pb-2 font-bold flex justify-center items-center flex-col bg-white text-black text-3xl border-t-4 border-t-red-600 w-4/5 md:h-56">
        <img src={vscode} alt="img" class="w-1/3"/>
        <p >VSCODE</p>
      </div>
        <div class="pb-2 font-bold flex justify-center items-center flex-col bg-white text-black text-3xl border-t-4 border-t-blue-400 w-4/5 md:h-56">
        <img src={git} alt="img" class="w-1/3"/>
        <p >GIT</p>
      </div>
      </div>
     </section>
    </main>
  )
}

export default About