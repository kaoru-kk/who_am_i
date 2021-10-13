import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function ContentsGuide() {

  const { scroll } = useLocomotiveScroll()

  const goToCarrerPart = (event) => {
    event.preventDefault()
    scroll && scroll.scrollTo('#carrer')
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
      <a href="#carrer" onClick={goToCarrerPart}>
        Go to carrer part
      </a>

      <p/>

      <a href="#works" onClick={goToWorksPart}>
        Go to works part
      </a>

      <p/>

      <a href="#many_tape" onClick={goToManyTapePart}>
        Go to many_tape part
      </a>
    </section>
  )
}