import { useGetNotes } from "../hooks/useGetNotes";
import NoteDetails from "./NoteDetails";

const NoteList = () => {
  const {data: notes} = useGetNotes()

  if (!notes) { return }

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
