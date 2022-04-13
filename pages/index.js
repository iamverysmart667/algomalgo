import Layout from "../components/Layout";
import {useState} from "react";
import Link from "next/link";

const Check = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#4299E1"/>
    <path d="M17.7763 7.5019C18.0514 7.74651 18.0762 8.16789 17.8316 8.44308L10.7205 16.4431C10.594 16.5854 10.4127 16.6668 10.2222 16.6668C10.0318 16.6668 9.85047 16.5854 9.72396 16.4431L6.1684 12.4431C5.92379 12.1679 5.94858 11.7465 6.22376 11.5019C6.49895 11.2573 6.92033 11.2821 7.16495 11.5573L10.2222 14.9967L16.8351 7.55726C17.0797 7.28207 17.5011 7.25729 17.7763 7.5019Z" fill="white"/>
  </svg>
);

function Item({ topic, subtopic }) {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <div className="flex items-center space-x-8">
      <div className={`font-[Gilroy-Bold] w-1/3 pb-8 ${topic && 'mt-8'}`}>{topic}</div>
      <div className={`bg-gradient-to-b from-gray-300 to-gray-300 bg-no-repeat bg-center bg-[length:1px] pb-8`}>
        {checked
          ? <div className={`${topic && 'mt-8'}`} onClick={toggleCheckbox}><Check/></div>
          : <div className={`${topic && 'mt-8'} rounded-3xl w-6 h-6 bg-sky-50 border border-gray-400`}
                 onClick={toggleCheckbox}/>
        }
      </div>
      <div className={`font-[Gilroy-Light] pb-8 ${topic && 'mt-8'}`}>{subtopic}</div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center h-full">
        <h1 className="font-[Gilroy-Bold] text-[64px] pt-6">Algo<span className="text-primary">Malgo!</span></h1>
        <p className="font-sans text-[24px] text-gray-500">A complete guide to learning algorithms</p>
        <Link href="/introduction">
          <a className="flex flex-col items-center
          w-[400px] bg-primary font-[Gilroy-Light] text-[24px] text-white
          rounded-[16px] hover:opacity-80
          p-[16px] mt-10 mb-10 w-full text-center">Start</a>
        </Link>
        <div className="flex flex-col justify-center">
          <div>
            <Item topic="Topic" subtopic="SubTopic"/>
            <Item subtopic="SubTopic"/>
            <Item subtopic="SubTopic"/>
            <Item subtopic="SubTopic"/>
            <Item topic="Some" subtopic="SubTopic"/>
            <Item subtopic="SubTopic"/>
          </div>
        </div>
      </div>
    </Layout>
  );
}
