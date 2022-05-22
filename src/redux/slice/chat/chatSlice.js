import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatHistory: [],
    currentAnswer: {
        semantic: null,
        intent: null
    }
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        updateSemantic: (state, action) => {
            state.currentAnswer.semantic = action.payload;
        },
        updateIntent: (state, action) => {
            state.currentAnswer.intent = action.payload;
        },
        resetAnswer: (state) => {
            state.currentAnswer = {
                semantic: null,
                intent: null
            }
        },
        addToHistory: (state, action) => {
            state.chatHistory.push(action.payload);
        }
    },
})

export const { addToHistory, updateIntent, updateSemantic, resetAnswer } = chatSlice.actions;

export const selectHistory = (state) => state.chat.chatHistory;
export const selectCurrentAnswer = (state) =>state.chat.currentAnswer;

export default chatSlice.reducer;