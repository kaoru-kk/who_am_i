import Image from "next/image";

export default function Introduce() {
  return (
    <section id="introduce">
      <div data-scroll data-scroll-speed="4">
        <h2 className='contents_header'>INTRODUCE</h2>
        <div className='introduce_contents'>

          <div className='introduce_image_container'>
            <Image 
              src='/images/wankoinsoba.jpg'
              className="わんこそば"
              width={300}
              height={400}
              alt='wankoinsoba'
            />
            <span className='hoverText'>WANKO IN SOBA！</span>
          </div>

          <div className='introduce_text_container'>
            <p>My name is kaoru_k and 23 years old.</p>
            <p>Working as a Software Engineer in Tokyo.</p>
            <p>I am interested in both front-end and back-end programming languages.</p>
            <p>( Ex. Ruby on Rails, React.js, Vue.js )</p>
          </div>
        </div>
      </div>
    </section>
  )
}