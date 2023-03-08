import React from 'react'
import contact from '../images/contact.gif'
import whatsapp from '../images/whatsapp.png'
import twitter from '../images/twitter.png'
import gmail from '../images/mail.png'
import git from '../images/gitsmall.png'
import link from '../images/in.png'

const Contact = () => {

  const handleClick = (url) => {
    window.open(url)
  }

  return (
    <main class="py-5 pt-20 pb-20 md:pb-10">
      <section class="font-mono text-[#E1DACB]">
        <h1 class="text-4xl text-[#E1DACB] text-center md:text-left md:text-5xl"><span class=" text-[#008080]  font-extrabold">Yea!</span> hope you are ready to work with me?</h1>
        <article class="md:flex md:justify-between items-center">
          <div>
          <p class="text-3xl text-center p-2  md:w-4/5 md:text-5xl md:text-left ">I am always available to learn and work with you or your team.</p>
        <p class="text-3xl text-center p-2   md:text-5xl md:text-left ">hit me <span class=" text-[#008080]  font-extrabold">up!</span> </p>
        </div>
        <div class="flex justify-center items-center  w-full ">
          <img src={contact} alt="img" class="w-full h-full"/>
        </div>
        </article>
      </section>
      <section>
        <header class="text-center text-4xl font-bold my-10 ">Contacts</header>
        <article class=" flex flex-col gap-4 justify-center items-center md:flex-row">
          <a href='mailto:joshares9991@gmail.com' class="hover:animate-bounce group" >
          <img src={gmail} alt="img"  class="w-16"/>
        </a>
        <div class="hover:animate-bounce" onClick={ () => handleClick('https://wa.me/message/CFDF3YFBV3KLL1')}>
          <img src={whatsapp} alt="img"  class="w-16 rounded-lg"/>
        </div>
        <div class="hover:animate-bounce" onClick={ () => handleClick('https://github.com/joshares')}>
          <img src={git} alt="img"  class="w-16 rounded-lg"/>
        </div>
        <div class="hover:animate-bounce" onClick={ () => handleClick('https://twitter.com/joshares78')}>
          <img src={twitter} alt="img"  class="w-16"/>
        </div>
        <div class="hover:animate-bounce" onClick={ () => handleClick('https://www.linkedin.com/in/joshua-aregbesola-b50a16236')}>
          <img src={link} alt="img"  class="rounded-lg w-16"/>
        </div>
        </article>
      </section>
      
    </main>
  )
}

export default Contact