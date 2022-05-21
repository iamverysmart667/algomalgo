import { CardItem } from "./CardItem";
import BookmarkEmpty from "./svg/Bookmark";
import BookmarkFull from "./svg/BookmarkSelected";
import { useState } from "react";
import { Card } from "./Card";
import BookmarksIcon from "./svg/Bookmarks";
import Link from "next/link";

export function BookmarkItem(props) {
  return (
    <CardItem IconEmpty={BookmarkEmpty} IconFull={BookmarkFull} callback={props.callback}>
      <Link href={`${props.title}`}>
        {props.title}
      </Link>
    </CardItem>
  );
}

export function BookmarksCard({title = 'Bookmarks', defaultBookmarks = []}) {
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
          <BookmarkItem title={bookmark.title} callback={toggleBookmark(i)}/>
        )}
      </div>
    </Card>
  );
}