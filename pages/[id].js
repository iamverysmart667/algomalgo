import Layout from "../components/Layout";
import List from "../components/List";
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from "react";
import remarkImages from "remark-images";
import remarkGfm from "remark-gfm";
import articles from "../data/articles.json";
import { useRouter } from "next/router";
import remarkBreaks from "remark-breaks";
import fs from "fs";

export function getServerSideProps(context) {
  const { id } = context.query;
  const content = process.env.ENVIRONMENT === 'production'
    ? articles[id]
    : fs.readFileSync(`articles/${id}`, "utf8");

  return {
    props: {
      content,
    },
  };
}

function Content({ content, ...props }) {
  const router = useRouter();
  const id = router.query.id;
  const [article, setArticle] = useState('');
  const list = Object.values(articles);

  useEffect( () => {
    setArticle(content);
  }, [content])

  return (
    <Layout>
      <div className='flex w-1/5 overflow-y-scroll pt-2 pl-2 font-sans'>
        {list.length && <List defaultItems={list} />}
      </div>
      <div className='w-4/5 overflow-y-scroll'>
        {article && (
          <ReactMarkdown escapeHtml={false} remarkPlugins={[remarkImages, remarkGfm]}>
            {article}
          </ReactMarkdown>
        )}
      </div>
    </Layout>
  )
}

export default Content;