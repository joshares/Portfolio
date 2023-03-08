import React from 'react'
import {AiOutlineHome, AiOutlineLaptop} from 'react-icons/ai'
import {IoIosContact} from 'react-icons/io'

const Navbar = () => {
  return (
    <main class='flex justify-center items-center mt-5 fixed w-full z-20 '>
     <div class='flex md:w-2/3 w-4/5 justify-between  bg-[#121214] shadow-md shadow-white hover:shadow-[#008080] text-white p-4 rounded-lg'>     
      <a href='#home' class="text-sm gap-1  flex items-center font-medium md:text-2xl md:gap-4" >
       <AiOutlineHome/>
       <p class="">HOME</p>
      </a>
      <a href='#projects' class="text-sm gap-1 flex items-center font-medium md:text-2xl md:gap-4">
       <AiOutlineLaptop/>
       <p>PROJECT</p>
      </a>
      <a href="#contact" class="text-sm gap-1 flex items-center font-medium md:text-2xl md:gap-4">
       <IoIosContact/>
       <p>CONTACT</p>
      </a>
     </div>
    </main>
  )
}

export default Navbar