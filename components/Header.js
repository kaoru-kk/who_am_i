import Head from 'next/head'
// import Image from "next/image"

export default function Header() {
  return (
    <Head>
      <title>Kaoru's Portfolio</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta property="og:title" content="Kaoru's Portfolio" />
      <meta property="og:site_name" content="Kaoru's Portfolio" />
      <meta property="og:image" content="https://who-am-i-wan-k.vercel.app/images/ogp.jpg" />
    </Head>
  )
}