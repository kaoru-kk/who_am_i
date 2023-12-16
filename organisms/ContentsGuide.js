import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function ContentsGuide() {

  const { scroll } = useLocomotiveScroll();

  const scrollPart = (event, partName) => {
    event.preventDefault();
    scroll && scroll.scrollTo(partName);
  }

  return (
    <section id="contents_guide" data-scroll-position="top">

      <div className='contents_guide_container' data-scroll data-scroll-speed="-2">
        <ul>

          <li className='contents_guide_list'>
            <a href="#introduce" onClick={(e) => scrollPart( e, '#introduce')} className='contents_guide_link' data-scroll data-scroll-delay="0.1">
              00.introduce
            </a>
          </li>

          <li className='contents_guide_list'>
            <a href="#carrer" onClick={(e) => scrollPart( e, '#carrer')} className='contents_guide_link' data-scroll data-scroll-delay="0.1">
              01.carrer
            </a>
          </li>

          <li className='contents_guide_list'>
            <a href="#works" onClick={(e) => scrollPart( e, '#works')} className='contents_guide_link'>
              02.works
            </a>
          </li>

          <li className='contents_guide_list'>
            <a href="#contact" onClick={(e) => scrollPart( e, '#contact')} className='contents_guide_link'>
              03.contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}