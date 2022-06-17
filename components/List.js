import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Check from "./svg/Check";
import { UserDataContext, UserDataDispatchContext } from "../providers/UserDataProvider";

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

export default function List({ defaultItems, renderLeft = false, callback }) {
  const [getUserData, setUserData] = [useContext(UserDataContext), useContext(UserDataDispatchContext)];
  const getArticles = () => getUserData().articles;
  const [items, setItems] = useState(defaultItems);

  const isFinished = (article) => getArticles().includes(article);

  const toggleItem = (index) => () => {
    const newItems = [...items];
    newItems[index].state = !newItems[index].state;
    setItems(newItems);
    callback(newItems[index].name);
  };

  return (
    <div className={`flex flex-col ${renderLeft ? 'items-center' : 'pl-4'} h-full w-full`}>
      <div className="flex w-1/3 justify-between">
        {renderLeft &&
          <div className="flex flex-col space-y-8 w-5/12 items-end whitespace-nowrap">
            {items.map(({left, name}) => (left ? <Link href={`/${name}`}>{left}</Link> : <span>&nbsp;</span>))}
          </div>
        }
        <div className="flex justify-center w-1/6">
          <div>
            {items.map(({state}, i) => <Item state={isFinished(items[i].name)} toggleItem={toggleItem(i)}/>)}
          </div>
        </div>
        <div className="flex flex-col space-y-8 w-5/12 whitespace-nowrap">
          {items.map(({right, name}) => (right ? <Link href={`/${name}`}>{right}</Link> : <span>&nbsp;</span>))}
        </div>
      </div>
    </div>
  );
}