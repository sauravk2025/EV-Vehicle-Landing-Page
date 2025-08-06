import React from 'react'
import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

//accessing props by destructuring
const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>

      <div className='herotext'>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className='hero-explore'>
        <p>Explore the Feauters</p>
        <image src={arrow_btn} alt=""></image>
      </div>

      <div className='hero-dot-play'>
        <ul className='hero-dots'>
          <l1 onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}>h</l1>
          <l1 onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}>h</l1>
          <l1 onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}>h</l1>
        </ul>
      <div className='hero-play'>
        <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt=''></img>
        <p>See the Video</p>
      </div>
      </div>
      
    </div>
  )
}

export default Hero
