import { useState } from "react";
import Link from "next/link";

export function CardItem({children, subtitle, IconEmpty, IconFull, isFull = false, callback}) {
  const [state, setState] = useState(isFull);

  const toggleState = () => {
    setState(!state);
    callback();
  }

  return (
    <div className='flex space-x-2 border border-l-0 border-t-0 border-r-0 border-b-1 py-2'>
      <div onClick={toggleState} className={'pt-1.5'}>
        {state ? <IconFull/> : <IconEmpty/>}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}