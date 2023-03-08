import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'

const Urgent = () => {
  return (
   <main class="bg-black shadow-md shadow-slate-200 w-max rounded-md fixed bottom-4 -right-0.5 font-mono">
    <div class="flex items-center gap-2 p-2 ">
     <p>Urgent? give me a <span class="underline text-blue-400 "><a href='tel:+2348068126344'>call</a></span></p>
     <FiPhoneCall class="text-blue"/>
    </div>
   </main>
  )
}

export default Urgent