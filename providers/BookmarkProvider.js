import React, { createContext, useState } from "react";

const BookmarkContext = createContext(undefined);
const BookmarkDispatchContext = createContext(undefined);

function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  return (
    <BookmarkContext.Provider value={bookmarks}>
      <BookmarkDispatchContext.Provider value={setBookmarks}>
        {children}
      </BookmarkDispatchContext.Provider>
    </BookmarkContext.Provider>
  );
}

export { BookmarkProvider, BookmarkContext, BookmarkDispatchContext };