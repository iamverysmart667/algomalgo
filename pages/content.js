import Layout from "../components/Layout";
import Item from "../components/Item";
import Link from "next/link";

function Group({ name, items }) {
  return (
    <div>
      <h2>{name}</h2>
      {items.map((item, i, {length}) => (
        <Item last={i === length - 1}>
          <Link href={item.href}>{item.name}</Link>
        </Item>
      ))}
    </div>
  );
}

function Content() {
  return (
    <>
      <Layout>
        <div className='flex w-full '>
          <div className='w-1/5 bg-sky-100 overflow-y-scroll'>
            <div className="flex flex-col items-start py-6">
              <div>
                <Item subtopic="item some shit"></Item>
                <Item subtopic="item some shit"></Item>
                <Item subtopic="earstioenarstionaroistnoi">item sa</Item>
                <Item last subtopic="tem"></Item>
              </div>
            </div>
          </div>
          <div className='w-4/5'>a</div>
        </div>
      </Layout>
    </>
  )
}

export default Content;