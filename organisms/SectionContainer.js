import ContentsGuide from '../components/ContentsGuide'
import Career  from '../components/Career'
import Works from '../components/Works'
import GoToTop from '../components/GoToTop'
import ManyTape from '../components/ManyTape'
import Contact from '../components/Contact'

export default function SectionContainer() {

  return (
    <div>
        <div className='testset' >
        </div>
        <ContentsGuide />

        <Career />        
        <Contact />
        <Works />

        <ManyTape />
        <GoToTop />
    </div>
  )
}