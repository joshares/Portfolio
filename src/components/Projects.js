import React from 'react'
import real from '../images/real.png'
import ip from '../images/ip.png'
import art from '../images/art.png'
import tic from '../images/tic.png'
import space from '../images/space.png'
import country from '../images/country.png'


const Projects = () => {

  const handleclick = (url) => {
    window.open(url)
  }

  return (
    <main class="my-5">
      <header class="text-4xl text-center my-10 font-bold">
        <p>PROJECTS</p>
        <p class="text-sm animate-pulse text-[#E1DACB]">click on any to view</p>
      </header>
      <section class="flex gap-4 flex-col justify-center items-center md:flex-row md:justify-between font-mono">
        <div class="md:h-80 cursor-pointer hover:bg-[#008080] bg-[#121214] shadow-sm shadow-[#E7E9EA] w-4/5  rounded-lg p-4 text-center" onClick={()=> handleclick('https://real-estate-ochre-seven.vercel.app/')} >
          <img src={real} alt="real" class="rounded-lg"/>
          <p class="text-2xl uppercase">Homa</p>
          <p class="text-[#E1DACB] font-mono"> A real life real estate site built with react and css</p>
        </div>
        <div class="md:h-80 cursor-pointer hover:bg-[#008080] bg-[#121214] shadow-sm shadow-[#E7E9EA] w-4/5  rounded-lg p-4 text-center" onClick={()=> handleclick('https://joshares.github.io/ip-tracker/')}>
          <img src={ip} alt="real" class="rounded-lg"/>
          <p class="text-2xl uppercase">IPtracker</p>
          <p class="text-[#E1DACB]">A site use to track the location of an ip address </p>
        </div>
        <div class="md:h-80 cursor-pointer hover:bg-[#008080] bg-[#121214] shadow-sm shadow-[#E7E9EA] w-4/5  rounded-lg p-4 text-center" onClick={()=> handleclick('https://joshares.github.io/countries')}>
          <img src={country} alt="real" class="rounded-lg"/>
          <p class="text-2xl uppercase">REST OF THE WORLD</p>
          <p class="text-[#E1DACB]">A site that shows all the countries in the world and details about them</p>
        </div>
      </section>
      <section class="flex font-mono gap-4 my-4 flex-col justify-center items-center md:flex-row md:justify-between">
        <div class="md:h-80 cursor-pointer hover:bg-[#008080] bg-[#121214] shadow-sm shadow-[#E7E9EA] w-4/5  rounded-lg p-4 text-center" onClick={()=> handleclick('https://joshares.github.io/tic-tac-toe/')}>
          <img src={tic} alt="real" class="rounded-lg"/>
          <p class="text-2xl uppercase">tic-tact-toe</p>
          <p class="text-[#E1DACB]">A game built for two players(choose both players to play) with javascript and html&css</p>
        </div>
        <div class="md:h-80 cursor-pointer hover:bg-[#008080] bg-[#121214] shadow-sm shadow-[#E7E9EA] w-4/5  rounded-lg p-4 text-center" onClick={()=> handleclick('https://joshares.github.io/artsy/')}>
          <img src={art} alt="real" class="rounded-lg"/>
          <p class="text-2xl uppercase">Artsy</p>
          <p class="text-[#E1DACB]">An art gallery built with tailwind and react (still in progress)</p>
        </div>
        <div class="md:h-80 cursor-pointer hover:bg-[#008080] bg-[#121214] shadow-sm shadow-[#E7E9EA] w-4/5  rounded-lg p-4 text-center" onClick={()=> handleclick('https://joshares.github.io/space-tourism/')}>
          <img src={space} alt="real" class="rounded-lg"/>
          <p class="text-2xl uppercase">Space</p>
          <p class="text-[#E1DACB]">A tourism site about space</p>
        </div>
      </section>
    </main>
  )
}

export default Projects