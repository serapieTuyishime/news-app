import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news";

export const store = configureStore({
    reducer: { news: newsReducer },
});
