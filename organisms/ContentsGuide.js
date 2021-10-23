import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function ContentsGuide() {

  const { scroll } = useLocomotiveScroll();

  const goToIntroducePart = (event) => {
    event.preventDefault()
    scroll && scroll.scrollTo('#introduce')  
  }

  const goToCarrerPart = (event) => {
    event.preventDefault()
    scroll && scroll.scrollTo('#carrer')
  }
  
  const goToContactPart = (event) => {
    event.preventDefault()
    scroll && scroll.scrollTo('#contact')
  }

  const goToWorksPart = (event) => {
    event.preventDefault()
    scroll && scroll.scrollTo('#works')
  }

  return (
    <section id="contents_guide" data-scroll-position="top">

      <div className='contents_guide_container' data-scroll data-scroll-speed="-2">
        <ul>

          <li className='contents_guide_list'>
            <a href="#introduce" onClick={goToIntroducePart} className='contents_guide_link' data-scroll data-scroll-delay="0.1">
              00.introduce　　　　　　　　
            </a>
          </li>

          <li className='contents_guide_list'>
            <a href="#carrer" onClick={goToCarrerPart} className='contents_guide_link' data-scroll data-scroll-delay="0.1">
              01.carrer　　　　　　　　　　 　
            </a>
          </li>

          <li className='contents_guide_list'>
            <a href="#works" onClick={goToWorksPart} className='contents_guide_link'>
              02.works　　　　　　　　　　　　
            </a>
          </li>

          <li className='contents_guide_list'>
            <a href="#contact" onClick={goToContactPart} className='contents_guide_link'>
              03.contact　　　　　　　　　　　
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}