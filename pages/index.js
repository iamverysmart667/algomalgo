import Layout from "../components/Layout";
import {useState} from "react";
import Link from "next/link";

const Check = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#4299E1"/>
    <path d="M17.7763 7.5019C18.0514 7.74651 18.0762 8.16789 17.8316 8.44308L10.7205 16.4431C10.594 16.5854 10.4127 16.6668 10.2222 16.6668C10.0318 16.6668 9.85047 16.5854 9.72396 16.4431L6.1684 12.4431C5.92379 12.1679 5.94858 11.7465 6.22376 11.5019C6.49895 11.2573 6.92033 11.2821 7.16495 11.5573L10.2222 14.9967L16.8351 7.55726C17.0797 7.28207 17.5011 7.25729 17.7763 7.5019Z" fill="white"/>
  </svg>
);

function Item({ state }) {
  const [checked, setChecked] = useState(state);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <div className="flex items-center space-x-8">
      <div className={`bg-gradient-to-b from-gray-300 to-gray-300 bg-no-repeat bg-center bg-[length:1px] pb-8`}>
        {checked
          ? <div onClick={toggleCheckbox}><Check/></div>
          : <div className={`rounded-3xl w-6 h-6 bg-sky-50 border border-gray-400`} onClick={toggleCheckbox}/>
        }
      </div>
    </div>
  );
}

export default function Home() {
  const [items, setItems] = useState([
    {
      left: "Topic 1 arsitonariostn iaors taioerstn oaiesnt ioaer stioan",
      right: "Subtopic 1",
      state: false
    },
    {
      left: null,
      right: "Subtopic 2",
      state: true
    },
    {
      left: "Topic 3",
      right: "Subtopic 3ariosnt ioa trsiot aiostn airstnair tairost ariost oa",
      state: false
    },
    {
      left: "Topic 4",
      right: "Subtopic 4",
      state: false
    },
    {
      left: "Topic 5",
      right: "Subtopic 5",
      state: false
    },
  ]);
  return (
    <Layout>
      <div className="flex flex-col items-center h-full w-full">
        <h1 className="font-[Gilroy-Bold] text-[64px] pt-6">Algo<span className="text-primary">Malgo!</span></h1>
        <p className="font-sans text-[24px] text-gray-500">A complete guide to learning algorithms</p>
        <Link href="/introduction">
          <a className="flex flex-col items-center
          w-[400px] bg-primary font-[Gilroy-Light] text-[24px] text-white
          rounded-[16px] hover:opacity-80
          p-[16px] mt-10 mb-10 text-center">Start</a>
        </Link>
        <div className="flex w-1/3 justify-between">
          <div className="flex flex-col space-y-8 w-5/12 items-end whitespace-nowrap">
            {items.map(({left}, i) => <h1>{left || (<span>&nbsp;</span>)}</h1>)}
          </div>
          <div className="flex justify-center w-1/6">
            <div>
              {items.map(({state}) => <Item state={state} />)}
            </div>
          </div>
          <div className="flex flex-col space-y-8 w-5/12 whitespace-nowrap">
            {items.map(({right}) => <h1>{right}</h1>)}
          </div>
        </div>
      </div>
    </Layout>
  );
}
