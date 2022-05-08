import { useState } from "react";
import Link from "next/link";
import { Check } from "./svg/Check";

export default function Item({ topic, subtopic, last, href = '#' }) {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <div className="flex items-center space-x-8">
      <div className={`font-[Gilroy-Bold] w-1/3 pb-8 ${topic && 'mt-8'}`}>{topic}</div>
      <div className={`bg-gradient-to-b from-gray-300 to-gray-300 bg-no-repeat bg-center bg-[length:1px] ${last ? 'mb-8' : 'pb-8'}`}>
        {checked
          ? <div className={`${topic && 'mt-8'}`} onClick={toggleCheckbox}><Check/></div>
          : <div className={`${topic && 'mt-8'} rounded-3xl w-6 h-6 bg-sky-50 border border-gray-400`}
                 onClick={toggleCheckbox}/>
        }
      </div>
      <div className={`font-[Gilroy-Light] pb-8 ${topic && 'mt-8'} w-full whitespace-nowrap`}>
        <Link href={href}>{subtopic}</Link>
      </div>
    </div>
  );
}