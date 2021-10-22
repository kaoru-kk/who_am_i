import Head from 'next/head'

export default function Header() {
  return (
    <Head>
      <title>Kaoru&apos;s Portfolio</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta property="og:title" content="Kaoru&apos;s Portfolio" />
      <meta property="og:site_name" content="Kaoru&apos;s Portfolio" />
      <meta property="og:image" content="https://who-am-i-wan-k.vercel.app/images/ogp.jpg" />
    </Head>
  )
}