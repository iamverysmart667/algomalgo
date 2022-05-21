import Layout from "../components/Layout";
import Item from "../components/Item";
import Link from "next/link";

function Group({ name, items }) {
  return (
    <div className='flex-col ems-start'>
      <h2>{name}</h2><br/>
      {items.map((item, i, {length}) => (
        <Item last={i === length - 1}>
          <Link href={item.href}>{item.name}</Link>
        </Item>
      ))}
    </div>
  );
}

function Content() {
  const group = {
    name: "Group 1",
    items: [
      {
        name: "Item 1",
        href: "/item/1"
      },
      {
        name: "Item 2",
        href: "/item/2"
      },
      {
        name: "Item 3",
        href: "/item/3"
      }
    ]
  }
  return (
    <>
      <Layout>
        <div className='flex w-full '>
          <div className='w-1/5 bg-sky-100 overflow-y-scroll'>
            <Group {...group}/>
          </div>
          <div className='w-4/5'>a</div>
        </div>
      </Layout>
    </>
  )
}

export default Content;

