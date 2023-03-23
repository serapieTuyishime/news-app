import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "",
    }),
    endpoints: (builder) => ({
        getNewsByDomain: builder.query({
            query: (name) => `${name}`,
        }),
        getPopuralArticles: builder.query({
            query: (name) => `${name}`,
        }),
    }),
});

export const {
    useGetNewsByDomainQuery,
    useGetPopuralArticlesQuery,
    useLazyGetNewsByDomainQuery,
} = newsApi;
