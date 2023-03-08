import React, { useState, useEffect } from 'react';

const Typewriter = () => {
 const [sentence, setSentence] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const[startSecond, setStartSecond] = useState(false)
  const[startThird, setStartThird] = useState(false)
 const [second, setSecond] = useState("");
  const [currentIndexSec, setCurrentIndexSec] = useState(0);
 const [third, setThird] = useState("");
  const [currentIndexThd, setCurrentIndexThd] = useState(0);

  const fullSentence = "Hello,I'm";
  const secondSentence = "Joshua Aregbesola."
  const thirdSEntence = "I am a frontend software engineer and a tech enthusiast,I pursue a well written and clean code that brings good webdesigns to life."

  useEffect(() => {
    if (currentIndex < fullSentence.length) {
      setTimeout(() => {
        setSentence(sentence + fullSentence[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 50);
    } else{
      setStartSecond(true)
    }
  }, [sentence, currentIndex]);
  useEffect(() => {
    if (startSecond === true &&  currentIndexSec < secondSentence.length) {
      setTimeout(() => {
        setSecond(second + secondSentence[currentIndexSec]);
        setCurrentIndexSec(currentIndexSec + 1);
      }, 50);
    } else{
      // setStartSecond(false)
      setStartThird(true)
    }
    // eslint-disable-next-line
  }, [secondSentence, currentIndexSec, startSecond]);
  useEffect(() => {
    if (startThird === true &&  currentIndexThd < thirdSEntence.length) {
      setTimeout(() => {
        setThird(third + thirdSEntence[currentIndexThd]);
        setCurrentIndexThd(currentIndexThd + 1);
      }, 50);
    } else{
      setStartThird(false)
    }
    // eslint-disable-next-line
  }, [thirdSEntence, currentIndexThd, startThird]);

  return (
    <div class="md:w-1/2 text-center md:text-left ">
      <p class="text-6xl md:text-8xl font-bold hover:text-[#008080] hover:animate-bounce">{sentence}</p>
      <p class="text-6xl md:text-8xl font-bold hover:animate-bounce hover:text-[#008080]">{second}</p>
      <p class="text-xl md:text-4xl mt-5 text-[#E1DACB] font-mono">{third}</p>
    </div>
  )
};

export default Typewriter;
