import { useGetNotes } from "../hooks/useGetNotes";
import NoteDetails from "./NoteDetails";

const NoteList = () => {
  const {data: notes, isLoading, isError} = useGetNotes()

  if (isLoading) {
    return <h3>Loading...</h3>
  }

  if (isError) {
    return <h3>Something unexpected happened, retry later.</h3>
  }

  
  if (!notes || notes.length === 0) {
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
