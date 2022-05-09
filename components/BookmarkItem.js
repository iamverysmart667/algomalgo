import { CardItem } from "./CardItem";
import BookmarkEmpty from "./svg/Bookmark";
import BookmarkFull from "./svg/BookmarkSelected";

export function BookmarkItem(props) {
  return (
    <CardItem IconEmpty={BookmarkEmpty} IconFull={BookmarkFull} {...props} />
  );
}