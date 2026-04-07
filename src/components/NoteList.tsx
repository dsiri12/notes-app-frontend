import type { NoteType } from "../types/NoteFormDataType";
import NoteDetails from "./NoteDetails";

type Props = {
  notes: NoteType[];
};

const NoteList = ({ notes }: Props) => {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }
  
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteDetails key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
