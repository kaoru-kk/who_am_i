import ContentsGuide from '../organisms/ContentsGuide'
import Introduce from '../organisms/Introduce'
import Career  from '../organisms/Career'
import Works from '../organisms/Works'
// import ManyTape from '../organisms/ManyTape'
import Contact from '../organisms/Contact'
export default function SectionContainer() {

  return (
    <>
      <ContentsGuide />
      <Introduce />
      <Career />
      <Works />
      {/* メンテナンスなう */}
      {/* <ManyTape /> */}
      <Contact />
    </>
  )
}