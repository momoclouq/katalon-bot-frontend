import { configureStore } from '@reduxjs/toolkit';
import { intentRecognitionApi } from '../api/intentRecognitionAPI';
import { semanticSearchApi } from '../api/semanticSearchAPI';
import chatReducer from "../slice/chat/chatSlice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    [intentRecognitionApi.reducerPath]: intentRecognitionApi.reducer,
    [semanticSearchApi.reducerPath]: semanticSearchApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(intentRecognitionApi.middleware)
    .concat(semanticSearchApi.middleware),
})


