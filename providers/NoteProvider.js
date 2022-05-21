import React, { createContext, useState } from "react";

const NoteContext = createContext(undefined);
const NoteDispatchContext = createContext(undefined);

function NoteProvider({ children }) {
  const [notes, setNotes] = useState([]);

  return (
    <NoteContext.Provider value={notes}>
      <NoteDispatchContext.Provider value={setNotes}>
        {children}
      </NoteDispatchContext.Provider>
    </NoteContext.Provider>
  );
}

export { NoteProvider, NoteContext, NoteDispatchContext };
