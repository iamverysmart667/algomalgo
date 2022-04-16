import Layout from "../components/Layout";
import {useState} from "react";
import Link from "next/link";
import Item from "../components/Item";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="font-[Gilroy-Bold] text-[64px] pt-6">Algo<span className="text-primary">Malgo!</span></h1>
        <p className="font-sans text-[24px] text-gray-500">A complete guide to learning algorithms</p>
        <Link href="/introduction">
          <a className="flex flex-col items-center
          w-[400px] bg-primary font-[Gilroy-Light] text-[24px] text-white
          rounded-[16px] hover:opacity-80
          p-[16px] mt-10 mb-10 text-center">Start</a>
        </Link>
        <div className="flex flex-col justify-center">
          <div>
            <Item topic="Topic">SubTopic</Item>
            <Item>SubTopic</Item>
            <Item>SubTopic</Item>
            <Item>SubTopic</Item>
            <Item topic="Some">SubTopic</Item>
            <Item>SubTopic</Item>
          </div>
        </div>
      </div>
    </Layout>
  );
}
