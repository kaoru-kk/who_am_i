import Image from "next/image"

export default function Contact() {
  return (
    <section id="contact">
      <div className='contact_scroll_wrapper' data-scroll data-scroll-speed="4">
        
        <h2 className='contact_title'>CONTACT</h2>
        <div className='contact_container'>
          <p className='email'>Email:　kkaoru891@gmail.com</p>

          <div className='contact_logo_container'>

            <a href='https://github.com/kaoru-kk' className='gihub_link' target='_blank'>
              <Image 
                src='/images/octocat.png'
                className="octocat"
                width={100}
                height={90}
                alt='github'
              />
            </a>

            <a href='https://twitter.com/inu_kawae_1' target='_blank'>
              <Image 
                src='/images/twitter.png'
                className="twitter"
                width={100}
                height={90}
                alt='github'
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}