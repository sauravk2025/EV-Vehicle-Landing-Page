import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

const App = () => {

//text as object 
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passion"},
    {text1:"give into",text2:"your passions"}
  ]
// for manually changing text
  const [heroCount,setHeroCount ]=useState(1) 

// for video in background
  const [playStatus,setPlayStatus] = useState(false)

//t0 change background after every 3 sec
  useEffect(()=>{
    setInterval(()=>
  {
    setHeroCount((count)=>{
      return count===2?0:count+1})
  },3000)
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar></Navbar>
      <Hero 
      setPlayStatus={setPlayStatus} 
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      ></Hero>
    </div>
  )
}

export default App
