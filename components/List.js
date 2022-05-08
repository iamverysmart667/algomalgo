import { useEffect, useState } from "react";
import Link from "next/link";
import { Check } from "./svg/Check";

function Item({ state, toggleItem }) {
  const [checked, setChecked] = useState(state);

  const toggleCheckbox = () => {
    setChecked(!checked);
    toggleItem();
  }

  useEffect(() => {
    setChecked(state);
  }, [state]);

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

export default function List({ defaultItems, ...props }) {
  const [items, setItems] = useState(defaultItems || []);

  const toggleItem = (index) => () => {
    const newItems = [...items];
    newItems[index].state = !newItems[index].state;
    setItems(newItems);
  }

  const hasLeft = items.some(item => item.left);

  useEffect(() => {
    if (items.every(item => item.state)) {
      items.forEach((item, i) => toggleItem(i)());
    }
  });

  return (
    <div className={`flex flex-col ${hasLeft ? 'items-center' : 'pl-4'} h-full w-full`}>
      <div className="flex w-1/3 justify-between">
        {hasLeft &&
          <div className="flex flex-col space-y-8 w-5/12 items-end whitespace-nowrap">
            {items.map(({left}) => <b>{left || (<span>&nbsp;</span>)}</b>)}
          </div>
        }
        <div className="flex justify-center w-1/6">
          <div>
            {items.map(({state}, i) => <Item state={state} toggleItem={toggleItem(i)} />)}
          </div>
        </div>
        <div className="flex flex-col space-y-8 w-5/12 whitespace-nowrap">
          {items.map(({right, name}) => <Link href={`/${name}`}>{right}</Link>)}
        </div>
      </div>
    </div>
  );
}