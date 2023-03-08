import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Urgent from '../components/Urgent'
const Home = () => {
  return (
   <main class="relative bg-black text-white ">
    <section class="relative">
      <Navbar/>
    <div id='home'>
      <About/>
    </div>
    <div id='projects'>
      <Projects/>
    </div>
    <div id='contact'>
      <Contact/>
    </div>
    <div class="flex justify-end items-end">
      <Urgent/>
    </div>
    </section>
   </main>
  )
}

export default Home