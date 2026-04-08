import type { NoteType } from "../types/NoteFormDataType";
import NoteDetails from "./NoteDetails";

type Props = {
  notes: NoteType[];
  deleteNote: (id: number) => void;
};

const NoteList = ({ notes, deleteNote }: Props) => {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }
  
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteDetails key={note.id} note={note} deleteNote={deleteNote}/>
      ))}
    </div>
  );
};

export default NoteList;
