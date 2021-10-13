import ContentsGuide from '../components/ContentsGuide'
import Career  from '../components/Career'
import Works from '../components/Works'
import GoToTop from '../components/GoToTop'
import ManyTape from '../components/ManyTape'

export default function SectionContainer() {


  return (
    <div>
      <div data-scroll-section>

        <ContentsGuide />

        <section>


          <h1 data-scroll data-scroll-speed="1">
            NextJS with Locomotive Scroll&nbsp;
            <span role="img" aria-label="rocket emoji">
              🚀
            </span>
          </h1>

        </section>

        <div className='testset' >
        </div>

        <Career />
        <ManyTape />
        <Works />
        <GoToTop />
      </div>
    </div>
  )
}