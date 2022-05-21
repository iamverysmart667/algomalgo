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
import { BookmarkContext, BookmarkDispatchContext } from "../providers/BookmarkProvider";
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
  const [bookmarks, setBookmarks] = [useContext(BookmarkContext), useContext(BookmarkDispatchContext)];
  const [notes, setNotes] = [useContext(NoteContext), useContext(NoteDispatchContext)];
  const list = Object.values(articles);

  const hasBookmark = bookmarks.find(bookmark => bookmark.id === id);

  if (!hasBookmark) setBookmarks(bookmarks.concat({ id, title: id, state: false }));

  const toggleBookmark = () => {
    setBookmarks(
      bookmarks.map(bookmark => ({
        ...bookmark,
        state: bookmark.id === id ? !bookmark.state : bookmark.state
      }))
    );
  }

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
              setNotes(notes.concat({ article: id, title, highlighted, state: false }));
            }
          }
        ]}
        color={'yellow'}
        colorText={true}
    />
      <div className='flex w-1/5 overflow-y-scroll pt-2 pl-2 font-sans'>
        {list.length && <List defaultItems={list}/>}
      </div>
      <div className='w-4/5 overflow-y-scroll'>
        <BookmarkItem title='Add to Bookmarks' callback={toggleBookmark} isFull={bookmarks.filter(b => b.id === id)[0]?.state}/>
        {article && (
          <ReactMarkdown escapeHtml={false} remarkPlugins={[remarkImages, remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {article}
          </ReactMarkdown>
        )}
      </div>
    </Layout>
  )
}
