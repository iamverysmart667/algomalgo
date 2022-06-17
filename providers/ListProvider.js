import React, { createContext, useEffect, useState } from "react";
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { app } from "./database";
import { userService } from "../services";

const ArticleContext = createContext(undefined);
const ArticleDispatchContext = createContext(undefined);

function ArticleProvider({ username, children }) {
  const userData = doc(getFirestore(app), `users/${username}`);

  const setArticles = (articles) => setDoc(userData, { articles });

  const [articlesValue, articlesLoading, articlesError] = useDocument(userData);

  if (articlesValue) {
    return (
      <ArticleContext.Provider value={articlesValue}>
        <ArticleDispatchContext.Provider value={setArticles}>
          {children}
        </ArticleDispatchContext.Provider>
      </ArticleContext.Provider>
    );
  }
  else if (articlesLoading) {
    return <div>Loading...</div>
  }
  else {
    return <div>Failed to load articles.</div>
  }
}

export { ArticleProvider, ArticleContext, ArticleDispatchContext };
