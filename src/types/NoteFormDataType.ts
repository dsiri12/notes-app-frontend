export type NoteFormDataType = {
  title: string;
  priority: "High" | "Medium" | "Low";
  category: "Work" | "Personal" | "Ideas";
  description: string;
};

export type NoteType = NoteFormDataType & {id: number}
