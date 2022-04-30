import Layout from "../../components/Layout";
import List from "../../components/List";
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from "react";
import fs from "fs";
import remarkImages from "remark-images";
import remarkGfm from "remark-gfm";
import articles from "../../data/articles.json";

export function getServerSideProps() {
  const content = fs.readFileSync(`articles/circular_queue.md`, "utf8");
  return {
    props: {
      content
    }
  };
}

function Content(props) {
  const [article, setArticle] = useState('');

  useEffect( () => {
    setArticle(props.content);
  }, [props.content])

  return (
    <Layout>
      <div className='flex w-1/5 overflow-y-scroll pt-2 pl-2 font-sans'>
        <List defaultItems={articles}/>
      </div>
      <div className='w-4/5'>
        <ReactMarkdown escapeHtml={false} remarkPlugins={[remarkImages, remarkGfm]}>
          {article}
        </ReactMarkdown>
      </div>
    </Layout>
  )
}

export default Content;