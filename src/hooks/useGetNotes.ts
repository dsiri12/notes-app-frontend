import { useQuery } from "@tanstack/react-query"
import { queryConstants } from "./QueryConstants"
import type { NoteType } from "../types/NoteFormDataType"
import axios from "axios"

const fetchNotes = async (): Promise<NoteType[]> => {
    const response = await axios.get("http://localhost:3000/api/notes")
    console.log(response)

    if (response.status === 200) {
      return response.data
    }

    throw new Error("Failed to fetch notes")
}

export const useGetNotes = () => {
  return useQuery({ queryKey: [queryConstants.NOTES], queryFn: fetchNotes })
}