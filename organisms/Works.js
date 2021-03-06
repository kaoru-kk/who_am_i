import Image from "next/image";

export default function Works() {
  return (
    <section id="works">
      <div data-scroll data-scroll-speed="4">
        <h2 className='contents_header'>WORKS</h2>

        <div className='works_container'>
          <div className='works_wrapper'>
            <Image 
              src='/images/site1.png'
              className="picture"
              width={600}
              height={350}
              alt='site1'
            />
            <p>株式会社CORES HP開発</p>
          </div>
        

        <div className='works_other_wrapper'>
          <h2 className='contents_header'>OTHER WORKS</h2>

          <p>技能実習生受け入れ機関HP開発　技能実習生送り出し機関HP開発</p>
          <p>ライブ配信メディアトップページ制作　デザイン系企業LP制作</p>
          <p>個人へのプログラミングのメンター　SEOライティング　Webサイト制作レクチャー etc</p>
          
        </div>

        </div>
      </div>
    </section>
  )
}