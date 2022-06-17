import { CardItem } from "./CardItem";
import { useContext } from "react";
import BookmarkEmpty from "./svg/Bookmark";
import BookmarkFull from "./svg/BookmarkSelected";
import { useState } from "react";
import { Card } from "./Card";
import BookmarksIcon from "./svg/Bookmarks";
import Link from "next/link";
import { UserDataContext, UserDataDispatchContext } from "../providers/UserDataProvider";

export function BookmarkItem(props) {
  return (
    <CardItem IconEmpty={BookmarkEmpty} IconFull={BookmarkFull} {...props}>
      <Link href={`${props.title}`}>
        {props.title}
      </Link>
    </CardItem>
  );
}

export function BookmarksCard({title = 'Bookmarks', defaultBookmarks = []}) {
  const [getUserData, setUserData] = [useContext(UserDataContext), useContext(UserDataDispatchContext)];
  const getBookmarks = () => getUserData().bookmarks;
  const [bookmarks, setBookmarks] = useState(getBookmarks());
  console.log({ defaultBookmarks })

  const toggleFirebaseBookmark = (id) => {
    const current = getBookmarks();
    if (current.includes(id)) {
      const a = current.filter(bookmark => bookmark !== id);
      setUserData("bookmarks", a);
    }
    else {
      const b = [...current, id];
      setUserData("bookmarks", b);
    }
  }

  const toggleBookmark = (index) => () => {
    const newBookmarks = [...bookmarks];
    newBookmarks[index].state = !newBookmarks[index].state;
    setBookmarks(newBookmarks);
    toggleFirebaseBookmark(index);
  }

  return (
    <Card>
      <div className={'flex flex-col w-full'}>
        <div className='flex items-center space-x-2'>
          <BookmarksIcon/>
          <h2>{title}</h2>
        </div>
        {bookmarks.map((bookmark, i) =>
          <BookmarkItem title={bookmark} callback={toggleBookmark(i)}/>
        )}
      </div>
    </Card>
  );
}