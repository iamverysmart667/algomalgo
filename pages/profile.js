import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { userService } from "../services";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import { Card } from "../components/Card";
import BookmarksIcon from "../components/svg/Bookmarks";
import BookmarkEmpty from "../components/svg/Bookmark";
import BookmarkFull from "../components/svg/BookmarkSelected";
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

function ProgressCard({ title, percentage = 0 }) {
  return (
    <Card title='Chapters read' style='justify-between'>
      <div>0</div>
      <div className='w-1/2'>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
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

function CardItem({ title, subtitle, IconEmpty, IconFull, isFull = false, callback }) {
  const [state, setState] = useState(isFull);

  const toggleState = () => {
    setState(!state);
    callback();
  }

  return (
    <div className='flex space-x-2 border border-l-0 border-t-0 border-r-0 border-b-1 py-2 items-center'>
      <div onClick={toggleState}>
        {state ? <IconFull /> : <IconEmpty />}
      </div>
      <div>{title}</div>
      {subtitle && <div>{subtitle}</div>}
    </div>
  );
}

function BookmarkItem(props) {
  return (
    <CardItem IconEmpty={BookmarkEmpty} IconFull={BookmarkFull} {...props} />
  );
}

function BookmarksCard({ title = 'Bookmarks', defaultBookmarks = [] }) {
  const [bookmarks, setBookmarks] = useState(defaultBookmarks);

  const toggleBookmark = (index) => () => {
    const newBookmarks = [...bookmarks];
    newBookmarks[index].state = !newBookmarks[index].state;
    setBookmarks(newBookmarks);
  }

  return (
    <Card>
      <div className={'flex flex-col w-full'}>
        <div className='flex items-center space-x-2'>
          <BookmarksIcon/>
          <h2>{title}</h2>
        </div>
        {bookmarks.map((bookmark, i) =>
          <BookmarkItem title={bookmark.title} callback={toggleBookmark(i)} />
        )}
      </div>
    </Card>
  );
}

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe(x => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  const bookmarks =  [
    {title: 'Title 1'},
    {title: 'Title 2'},
    {title: 'Title 3'},
    {title: 'Title 4'},
    {title: 'Title 5'},
    {title: 'Title 6'},
  ]

  return (
    <Layout>
      <div className='flex w-4/5 justify-between space-x-5 p-10'>
        <div className='flex flex-col w-full space-y-5'>
          {user ? <UserCard user={user}/> : <p>Loading...</p>}
          {user ? <ProgressCard percentage={30} /> : <p>Loading...</p>}
        </div>
        <BookmarksCard defaultBookmarks={bookmarks}/>
        <BookmarksCard/>
      </div>
    </Layout>
  );
}