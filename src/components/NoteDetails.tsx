import type { NoteType } from "../types/NoteFormDataType";

type Props = {
  note: NoteType;
  deleteNote: (id: number) => void;
};

const NoteDetails = ({ note, deleteNote }: Props) => {
  const {id, title, priority, category, description} = note

  let borderColor = ''
  if (priority === 'High') {
    borderColor = 'red'
  } else if (priority === 'Medium') {
    borderColor = 'orange'
  } else {
    borderColor = 'green'
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border-l-4" style={{borderLeftColor: borderColor}}>
      <h3 className="text-lg font-bold">{title}</h3>

      <p className="text-sm text-gray-600">
        <strong>Category: </strong> {category}
      </p>

      <p className="text-sm text-gray-600">
        <strong>Priority: </strong> {priority}
      </p>

      <p className="mt-2">{description}</p>

      <button
        onClick={() => deleteNote(id)}
        className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
      >
        🗑️ Delete
      </button>
    </div>
  );
};

export default NoteDetails;
