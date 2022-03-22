import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
      <>
      <Head>
          <title>AlgoMalgo!</title>
          <link href="http://fonts.cdnfonts.com/css/gilroy-bold?styles=20876,20878,20879,20880" rel="stylesheet"/>
      </Head>
      <div className="bg-sky-100">
          <Navbar/>
          <h1 className="underline text-3xl font-bold">
              Hello world!
          </h1>
      </div>
      </>
  )
}
