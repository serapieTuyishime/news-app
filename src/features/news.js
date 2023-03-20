import { createSlice } from "@reduxjs/toolkit";
export const newsSlice = createSlice({
    name: "news",
    initialState: {
        AllNews: ["This is the news Slice"],
    },
    reducers: {
        add: (state, action) => {
            state.AllNews = ["one", "two"];
        },
    },
});

export const { add } = newsSlice.actions;
export default newsSlice.reducer;
