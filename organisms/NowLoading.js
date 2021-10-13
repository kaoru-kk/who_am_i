import Image from "next/image";
import ReactLoading from 'react-loading';

export default function NowLoading() {
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