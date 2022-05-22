import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = process.env.REACT_APP_SEMANTIC_SEARCH_URL || "localhost:5000";

export const semanticSearchApi = createApi({
    reducerPath: 'semanticSearchApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
      getSemanticSearchWithQuery: builder.query({
        query: (query) => {
          return {
            url: "/",
            params: {
                query: query
            }
          }
        } 
      }),
    }),
  })
  
  export const { useGetSemanticSearchWithQueryQuery } = semanticSearchApi;
