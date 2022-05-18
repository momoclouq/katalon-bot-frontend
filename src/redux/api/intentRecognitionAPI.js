import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = process.env.REACT_APP_INTENT_RECOGNITION_URL || "localhost:5000/intent_recognition";

export const intentRecognitionApi = createApi({
  reducerPath: 'intentRecognitionApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getIntentRecognitionWithQuery: builder.query({
      query: (query) => ({
            url: "",
            params: {
                query: query
            }
      }),
    }),
  }),
})

export const { useGetIntentRecognitionWithQueryQuery } = intentRecognitionApi;
