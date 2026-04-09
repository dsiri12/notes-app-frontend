import { useState, type ChangeEvent } from "react";
import type { NoteFormDataType } from "../types/NoteFormDataType";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";
import { queryConstants } from "../hooks/QueryConstants";
import { queryClient } from "../services/queryClient";
import axios from "axios";

const initData = {
  title: "",
  priority: "Medium",
  category: "Work",
  description: "",
} satisfies NoteFormDataType;

const NoteForm = () => {
  const [formData, setFormData] = useState(initData);

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    // validation
    if (!formData.title || !formData.description) return;

    await axios.post(`http://localhost:3000/api/notes`, { ...formData });

    queryClient.invalidateQueries({ queryKey: [queryConstants.NOTES] });

    // Reset form data
    setFormData(initData);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover: border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form" : "Add New Note"}
      </button>
      {/* Form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "High", label: "🔴 High" },
              { value: "Medium", label: "🟡 Medium" },
              { value: "Low", label: "🟢 Low" },
            ]}
          />

          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "Work", label: "💼 Work" },
              { value: "Personal", label: "🏠 Personal" },
              { value: "Ideas", label: "💡 Ideas" },
            ]}
          />

          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
