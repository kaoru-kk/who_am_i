import Image from "next/image";

export default function Works() {
  return (
    <section id="works">
      <h1>works</h1>

      <div data-scroll data-scroll-speed="4" className="picture-container">
        <Image 
          src={url('/images/wankoinsoba.jpg')}
          className="picture"
          width={100}
          height={100}
          alt='wanko_soba'
        />
      </div>
    </section>
  )
}