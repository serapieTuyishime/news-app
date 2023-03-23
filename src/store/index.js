import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news";
import { newsApi } from "../Services/news";

import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    // reducer: { news: newsReducer },
    reducer: { [newsApi.reducerPath]: newsApi.reducer, news: newsReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware),
});
setupListeners(store.dispatch);
