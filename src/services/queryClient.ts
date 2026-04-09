import { QueryClient } from "@tanstack/react-query";

export const queryClientParams = {
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
}

export const queryClient = new QueryClient(queryClientParams)