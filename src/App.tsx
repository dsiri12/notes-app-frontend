import { useState } from "react";
import NoteForm from "./components/NoteForm";
import type { NoteType } from "./types/NoteFormDataType";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);

  const addNote = (newNote: NoteType) => {
    setNotes([newNote, ...notes]);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">✏️ Notes App</h2>

      <NoteForm addNote={addNote} />

      <NoteList notes={notes} />
    </div>
  );
};

export default App;
