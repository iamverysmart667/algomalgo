import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.cdnfonts.com/css/gilroy-bold?styles=20876,20878,20879,20880" rel="stylesheet"/>
      </Head>
      <body className="bg-sky-50">
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}