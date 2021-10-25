import Head from 'next/head'

export default function Header() {
  return (
    <Head>
      <title>Kaoru&apos;s Portfolio</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link rel="shortcut icon" href="https://who-am-i-k4oru.vercel.app/images/logo.png" type="image/png" />
      <meta property="og:site_name" content="Kaoru&apos;s Portfolio" />
      <meta property="og:title" content="Kaoru&apos;s Portfolio" />
      <meta property="og:description" content="My name is Kaoru k. i&apos;m software enginerr!" />
      <meta property="og:url" content="https://who-am-i-k4oru.vercel.app/" />
      <meta property="og:image" content="https://who-am-i-k4oru.vercel.app/images/ogp.jpg" />
      <meta property="twitter:image" content="https://who-am-i-k4oru.vercel.app/images/ogp.jpg" />
    </Head>
  )
}