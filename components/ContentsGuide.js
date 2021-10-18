import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function ContentsGuide() {

  const { scroll } = useLocomotiveScroll()

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

  const goToManyTapePart = (event) => {
    event.preventDefault()
    scroll && scroll.scrollTo('#many_tape')
  }

  return (
    <section id="contents_guide" data-scroll-position="top">

      <div className='contents_guide_container' data-scroll data-scroll-speed="-2.4">
          <ul>
            <li className='contents_guide_list'>
              <a href="#carrer" onClick={goToCarrerPart} className='contents_guide_link'>
                01.Carrer　　　　　　　　　　 　
              </a>
            </li>

            <li className='contents_guide_list'>
              <a href="#contact" onClick={goToContactPart} className='contents_guide_link'>
                02.Contact　　　　　　　　　　　
              </a>
            </li>

            <li className='contents_guide_list'>
              <a href="#works" onClick={goToWorksPart} className='contents_guide_link'>
                03.Works　　　　　　　　　　　　
              </a>
            </li>

            <li className='contents_guide_list'>
              <a href="#many_tape" onClick={goToManyTapePart} className='contents_guide_link'>
                04.next　　　　　　　　　　　　　
              </a>
            </li>
          </ul>

      </div>


    </section>
  )
}