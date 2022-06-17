import Layout, { TestContext } from "../components/Layout";
import List from "../components/List";
import ReactMarkdown from 'react-markdown';
import { useContext, useEffect, useState } from "react";
import remarkImages from "remark-images";
import remarkGfm from "remark-gfm";
import articles from "../data/articles.json";
import { useRouter } from "next/router";
import fs from "fs";
import { BookmarkItem } from "../components/BookmarkItem";
import { UserDataContext, UserDataDispatchContext } from "../providers/UserDataProvider";
import TextSelector from 'text-selection-react';
import { NoteContext, NoteDispatchContext } from "../providers/NoteProvider";
import rehypeRaw from "rehype-raw";

export function getServerSideProps(context) {
  const { id } = context.query;
  const content = process.env.ENVIRONMENT === 'production'
    ? articles[id]
    : fs.readFileSync(`articles/${id}`, "utf8");

  return {
    props: {
      content,
      id
    },
  };
}

export default function Content({ content, ...props }) {
  const id = props.id;
  const [article, setArticle] = useState('');
  const [getUserData, setUserData] = [useContext(UserDataContext), useContext(UserDataDispatchContext)];
  const [notes, setNotes] = [useContext(NoteContext), useContext(NoteDispatchContext)];
  const list = Object.values(articles);

  const getBookmarks = () => getUserData().bookmarks;
  const getArticles = () => getUserData().articles;
  const getNotes = () => getUserData().notes;
  const hasBookmark = getBookmarks().includes(id);

  const toggle = (current, key, id) => {
    if (current.includes(id)) {
      const a = current.filter(x => x !== id);
      setUserData(key, a);
    }
    else {
      const b = [...current, id];
      setUserData(key, b);
    }
  }

  const toggleBookmark = () => toggle(getBookmarks(), 'bookmarks', id);
  const toggleArticle = (i) => toggle(getArticles(), 'articles', i);

  useEffect( () => {
    setArticle(content.replace('How Circular Queue Works', 'How Circular Queue Works></i>'));
  }, [content]);

  return (
    <Layout>
      <TextSelector
        events={[
          {
            text: 'Submit',
            handler: (_, highlighted) => {
              const title = prompt('Note name');
              setUserData("notes", getNotes().concat({ article: id, title, highlighted, state: false }));
            }
          }
        ]}
        color={'yellow'}
        colorText={true}
    />
      <div className='flex w-1/5 overflow-y-scroll pt-2 pl-2 font-sans'>
        {list.length && <List defaultItems={list} callback={toggleArticle} />}
      </div>
      <div className='w-4/5 overflow-y-scroll'>
        <BookmarkItem title='Add to Bookmarks' callback={toggleBookmark} isFull={hasBookmark}/>
        {article && (
          <ReactMarkdown escapeHtml={false} remarkPlugins={[remarkImages, remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {article}
          </ReactMarkdown>
        )}
      </div>
    </Layout>
  )
}
