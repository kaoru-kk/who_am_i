import React, { useEffect, useState } from 'react';
import Image from "next/image";
import ReactLoading from 'react-loading';
import { useLocomotiveScroll } from 'react-locomotive-scroll'


export default function NowLoading() {
  // const [isNowLoad, setIsNowLoad] = useState(false);
  const { scroll } = useLocomotiveScroll()


  // const goToTop = (event) => {
  //   event.preventDefault()
    
  // }

  // useEffect(() => {
    
    setTimeout(() => {
      scroll && scroll.scrollTo('#contents_guide')
    }, 3500);

  // }, [scroll]);

  return (
    <section id='loading'>
      <Image 
        src='/images/loading.gif'
        className="picture"
        width={900}
        height={500}
        alt='wanko_soba'
      />
      <div className='loadingBarContainer'>
        <ReactLoading 
          type="bars"
          color='white'
          width={230} 
          height={140}
          className='loadingBar'
        />
      </div>
    </section>
  )
}