// api key: 4f0b70fd7dd84b25837caa68f5b8d053

import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: "news",
    initialState: {
        AllNews: [
            {
                author: "Jack rowlings",
                content:
                    "Togg-PrototypDer ehemalige Bosch-Manager Gürcan Karakas hat das Vertrauen des türkischen Staates und großer Unternehmen.(Foto: picture alliance / AA) Istanbul Die Erwartungen an das erste Elektr… [+1160 chars]",
                description:
                    "Mit dem Togg T10X soll die türkische Autoindustrie international konkurrenzfähig werden. Das Modell kann nun bestellt werden. Es ist digital ausgestattet, aber auch teuer.",
                publishedAt: "2023-03-20T06:20:48Z",
                source: { id: "handelsblatt", name: "Handelsblatt" },
                title: "Elektromobilität: Türkischer Tesla-Herausforderer wird teurer als erwartet",
                url: "https://www.handelsblatt.com/unternehmen/industrie/elektro-suv-von-togg-tesla-herausforderer-wird-teurer-als-erwartet/29042788.html",
                urlToImage:
                    "https://www.handelsblatt.com/images/togg-prototyp/28542374/4-format2003.jpg",
            },
        ],
        allNewsUrl:
            "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4f0b70fd7dd84b25837caa68f5b8d053",
    },
    reducers: {
        add: (state, action) => {
            state.AllNews = ["one", "two"];
        },
        loadNews: (state, action) => {
            state.AllNews = [
                ...state.AllNews,
                {
                    author: "Old author",
                    content: "This is the content",
                    description:
                        "Scratched EV battery? Your insurer may have to junk the whole car",
                    publishedAt: "2023-03-20T05:17:29Z",
                    source: { id: null, name: "Investing.com" },
                    title: "Scratched EV battery? Your insurer may have to junk the whole car",
                    url: "https://www.investing.com/news/stock-market-news/scratched-ev-battery-your-insurer-may-have-to-junk-the-whole-car-3034158",
                    urlToImage:
                        "https://i-invdn-com.investing.com/news/LYNXMPEA5K01N_M.jpg",
                },
                // ...allNews,
            ];
        },
    },
});

export const { add, loadNews } = newsSlice.actions;
export default newsSlice.reducer;
