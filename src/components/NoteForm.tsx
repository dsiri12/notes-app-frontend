import { useState, type ChangeEvent } from "react";
import type { NoteFormDataType, NoteType } from "../types/NoteFormDataType";

const initData = {
  title: "",
  priority: "Medium",
  category: "Work",
  description: "",
} satisfies NoteFormDataType

type Props = {
  addNote: (newNote: NoteType) => void
}
const NoteForm = ({addNote}: Props) => {
  const [formData, setFormData] = useState(initData);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

	// validation
    if (!formData.title || !formData.description) return;

	// create new note
    const newNote = { id: Date.now(), ...formData };

    addNote(newNote);

    // Reset form data
    setFormData(initData)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>

        <input
          name="title"
          id="title"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold">
          Priority
        </label>

        <select
          name="priority"
          id="priority"
          className="w-full p-2 border rounded-lg"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟡 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold">
          Category
        </label>

        <select
          name="category"
          id="category"
          className="w-full p-2 border rounded-lg"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Work">💼 Work</option>
          <option value="Personal">🏠 Personal</option>
          <option value="Ideas">💡 Ideas</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold">
          Description
        </label>

        <textarea
          name="description"
          id="description"
          className="w-full p-2 border rounded-lg"
          value={formData.description}
          onChange={handleChange} //{e => handleChange(e)}
        ></textarea>
      </div>

      <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
