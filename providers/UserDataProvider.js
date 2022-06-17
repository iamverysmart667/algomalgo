import React, { createContext, useEffect, useState } from "react";
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { app } from "./database";
import { userService } from "../services";

const UserDataContext = createContext(undefined);
const UserDataDispatchContext = createContext(undefined);

function UserDataProvider({ username, children }) {
  const userBookmarks = doc(getFirestore(app), `users/${username}`);

  const [bookmarksValue, bookmarksLoading, bookmarksError] = useDocument(userBookmarks);

  const getUserData = () => bookmarksValue.data();
  const setUserData = (key, value) => setDoc(userBookmarks, { ...getUserData(), [key]: value });

  if (bookmarksValue) {
    return (
      <UserDataContext.Provider value={getUserData}>
        <UserDataDispatchContext.Provider value={setUserData}>
          {children}
        </UserDataDispatchContext.Provider>
      </UserDataContext.Provider>
    );
  }
  else if (bookmarksLoading) {
    return <div>Loading...</div>
  }
  else {
    return <div>Failed to load bookmarks.</div>
  }
}

export { UserDataProvider, UserDataContext, UserDataDispatchContext };