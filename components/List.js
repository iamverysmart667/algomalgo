import { useEffect, useState } from "react";

const Check = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#4299E1"/>
    <path d="M17.7763 7.5019C18.0514 7.74651 18.0762 8.16789 17.8316 8.44308L10.7205 16.4431C10.594 16.5854 10.4127 16.6668 10.2222 16.6668C10.0318 16.6668 9.85047 16.5854 9.72396 16.4431L6.1684 12.4431C5.92379 12.1679 5.94858 11.7465 6.22376 11.5019C6.49895 11.2573 6.92033 11.2821 7.16495 11.5573L10.2222 14.9967L16.8351 7.55726C17.0797 7.28207 17.5011 7.25729 17.7763 7.5019Z" fill="white"/>
  </svg>
);

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

function List({ defaultItems }) {
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
            {items.map(({left}) => <h1>{left || (<span>&nbsp;</span>)}</h1>)}
          </div>
        }
        <div className="flex justify-center w-1/6">
          <div>
            {items.map(({state}, i) => <Item state={state} toggleItem={toggleItem(i)} />)}
          </div>
        </div>
        <div className="flex flex-col space-y-8 w-5/12 whitespace-nowrap">
          {items.map(({right}) => <h1>{right}</h1>)}
        </div>
      </div>
    </div>
  );
}

export default List;