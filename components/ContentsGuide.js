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
      <a href="#carrer" onClick={goToCarrerPart} className='contents_guide_link'>
        Go to carrer part
      </a>

      <a href="#contact" onClick={goToContactPart} className='contents_guide_link'>
        Go to contact part
      </a>


      <a href="#works" onClick={goToWorksPart} className='contents_guide_link'>
        Go to works part
      </a>

      <a href="#many_tape" onClick={goToManyTapePart} className='contents_guide_link'>
        Go to many_tape part
      </a>
    </section>
  )
}