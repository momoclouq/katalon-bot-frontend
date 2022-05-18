import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatHistory: [],
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addToHistory: (state, action) => {
            state.chatHistory.push(action.payload);
        }
    },
})

export const { addToHistory } = chatSlice.actions;

export const selectHistory = (state) => state.chat.chatHistory;

export default chatSlice.reducer;