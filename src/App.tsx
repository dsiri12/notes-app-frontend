import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import type { NoteType } from "./types/NoteFormDataType";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState<NoteType[]>(() => {
    try {
      const stored = localStorage.getItem("notes");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to parse notes from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote: NoteType) => {
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id: number) => {
    const toDelete = notes.find((note) => note.id === id);
    const confirmDelete = window.confirm(
      `Are you sure you want to delete this note (title: ${toDelete?.title}) ?`,
    );

    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">✏️ Notes App</h2>

      <NoteForm addNote={addNote} />

      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
