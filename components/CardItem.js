import { useState } from "react";
import Link from "next/link";

export function CardItem({title, href='#', subtitle, IconEmpty, IconFull, isFull = false, callback}) {
  const [state, setState] = useState(isFull);

  const toggleState = () => {
    setState(!state);
    callback();
  }

  return (
    <div className='flex space-x-2 border border-l-0 border-t-0 border-r-0 border-b-1 py-2 items-center'>
      <div onClick={toggleState}>
        {state ? <IconFull/> : <IconEmpty/>}
      </div>

      <div>
        <Link href={`${title}`}>
          {title}
        </Link>
      </div>
      {subtitle && <div>{subtitle}</div>}
    </div>
  );
}