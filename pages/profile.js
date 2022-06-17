import Layout from "../components/Layout";
import React, { useContext, useEffect, useState } from "react";
import { userService } from "../services";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import { Card } from "../components/Card";
import NotesIcon from "../components/svg/Notes";
import { BookmarkItem, BookmarksCard } from "../components/BookmarkItem";
import { UserDataContext, UserDataDispatchContext } from "../providers/UserDataProvider";
import { CardItem } from "../components/CardItem";
import NoteEmpty from "../components/svg/Note";
import NoteFull from "../components/svg/NoteSelected";
import { NoteContext, NoteDispatchContext } from "../providers/NoteProvider";
import articles from "../data/articles.json";

function UserCard({ user }) {
  return (
    <Card title='User'>
      <div className='flex justify-center items-center rounded-full w-20 h-20 bg-gray-50 mr-6'>
        <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 4C13.5817 4 10 7.58172 10 12C10 16.4183 13.5817 20 18 20C22.4183 20 26 16.4183 26 12C26 7.58172 22.4183 4 18 4ZM6 12C6 5.37258 11.3726 0 18 0C24.6274 0 30 5.37258 30 12C30 18.6274 24.6274 24 18 24C11.3726 24 6 18.6274 6 12ZM10 32C6.68629 32 4 34.6863 4 38C4 39.1046 3.10457 40 2 40C0.89543 40 0 39.1046 0 38C0 32.4771 4.47716 28 10 28H26C31.5228 28 36 32.4771 36 38C36 39.1046 35.1046 40 34 40C32.8954 40 32 39.1046 32 38C32 34.6863 29.3137 32 26 32H10Z" fill="#4299E1"/>
        </svg>
      </div>
      <h2>{user.username}</h2>
    </Card>
  );
}

function ProgressCard({ title, completed = 0, percentage = 0 }) {
  return (
    <Card title='Chapters read' style='justify-between'>
      <div>{completed}</div>
      <div className='w-1/2'>
        <CircularProgressbar
          value={percentage}
          text={`${percentage.toPrecision(3)}%`}
          strokeWidth={5}
          styles={buildStyles({
            textSize: '1.5rem',
            textColor: '#000',
            pathColor: '#4299E1',
          })}
       />
      </div>
    </Card>
  );
}

export function NoteItem(props) {
  return (
    <>
      <CardItem IconEmpty={NoteEmpty} IconFull={NoteFull}>
        {props.highlighted ?
          <details>
            {props.highlighted}
            <summary>
              {props.title}
            </summary>
        </details>
        : props.title}
      </CardItem>
    </>
);
}

function NotesCard({ title = 'Notes', defaultNotes = [] }) {
  const notes = defaultNotes;
  return (
    <Card>
      <div className={'flex flex-col w-full'}>
        <div className='flex items-center space-x-2'>
          <NotesIcon/>
          <h2>{title}</h2>
        </div>
        {notes.map((note, i) =>
          <NoteItem title={note.title} highlighted={note.highlighted} />
        )}
      </div>
    </Card>
  );
}

export default function Profile() {
  const [user, setUser] = useState(null);
  const [getUserData, setUserData] = [useContext(UserDataContext), useContext(UserDataDispatchContext)];
  const getBookmarks = () => getUserData().bookmarks;
  const getArticles = () => getUserData().articles;
  const totalArticles = Object.keys(articles).length, passedArticles = getArticles().length;
  const percentage = passedArticles / totalArticles * 100;
  // Move setBookmarks to separate file where firebase stuff will be
  useEffect(() => {
    const subscription = userService.user.subscribe(x => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  const notes = useContext(NoteContext);
  const getNotes = () => getUserData().notes;
  return (
    <Layout>
      <div className='flex w-4/5 justify-between space-x-5 p-10'>
        <div className='flex flex-col w-full space-y-5'>
          {user ? <UserCard user={user}/> : <p>Loading...</p>}
          {user ? <ProgressCard percentage={percentage} completed={passedArticles} /> : <p>Loading...</p>}
        </div>
        <BookmarksCard defaultBookmarks={getBookmarks()}/>
        <NotesCard defaultNotes={getNotes()}/>
      </div>
    </Layout>
  );
}