import React from "react";
import { useSelector } from "react-redux";
import { useLazyGetNewsByDomainQuery } from "../Services/news";

import NewsItem from "../components/NewsItem";

const News = () => {
    const allNewsUrl = useSelector((state) => state.news.allNewsUrl);

    const [trigger, AllNews, lastPromiseInfo] = useLazyGetNewsByDomainQuery();

    return (
        <>
            {AllNews.status === "uninitialized" ? (
                <button
                    className="px-4 py-2 bg-red-400 rounded-md"
                    onClick={() => trigger(allNewsUrl)}
                >
                    Fetch Posts
                </button>
            ) : null}
            {AllNews.status === "fulfilled" ? (
                <div className="flex flex-wrap gap-4">
                    {/* {JSON.stringify(AllNews.data)} */}
                    {Object.values(AllNews.data.articles)
                        .slice(0, 10)
                        .map(
                            (
                                {
                                    author,
                                    content,
                                    description,
                                    urlToImage,
                                    url,
                                    source,
                                },
                                index
                            ) => {
                                return (
                                    <div className="" key={index}>
                                        <NewsItem
                                            author={author}
                                            content={content}
                                            description={description}
                                            urlToImage={urlToImage}
                                            title={source.title}
                                            url={url}
                                        />
                                    </div>
                                );
                            }
                        )}
                </div>
            ) : (
                <div className="text-4xl font-bold">Rejected</div>
            )}
        </>
    );
};

export default News;
