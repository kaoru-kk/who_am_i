import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'
import { useRouter } from 'next/router'

require('../styles/styles.css')

export default function NextApp({ Component, pageProps }) {
  const containerRef = useRef(null)
  const { route } = useRouter()

  return (
    <LocomotiveScrollProvider
      options={{ 
        smooth: true,
      }}
      watch={[route]}
      containerRef={containerRef}
    >
      <main data-scroll-container className="container">
        <Component {...pageProps} />
      </main>
    </LocomotiveScrollProvider>
  )
}

NextApp.displayName = 'NextApp'
