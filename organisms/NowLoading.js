import React, { useEffect, useState } from 'react';
import Image from "next/image";
import ReactLoading from 'react-loading';
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function NowLoading() {
  // const [isNowLoad, setIsNowLoad] = useState(false);
  const { scroll } = useLocomotiveScroll()

  // useEffect(() => {
    
    setTimeout(() => {
      scroll && scroll.scrollTo('#contents_guide')
    }, 3700);

  // }, [scroll]);

  return (
    <section id='loading'>
      <Image 
        src='/images/loading.gif'
        className="loading_gif"
        width={900}
        height={450}
        alt='wanko_soba'
      />
      <div className='loading_bar_container'>
        <ReactLoading 
          type="bars"
          color='white'
          width={200} 
          height={110}
          className='loading_bar'
        />
      </div>
    </section>
  )
}