import { useSelector } from "react-redux";
import { useGetPopuralArticlesQuery } from "../Services/news";
import NewsItem from "../components/NewsItem";

const ArticlesOfTheDay = () => {
    const allNewsUrl = useSelector((state) => state.news.allNewsUrl);
    const AllNews = useGetPopuralArticlesQuery(allNewsUrl);
    return (
        <div>
            {AllNews.status === "fulfilled" ? (
                <div className="flex flex-wrap gap-4">
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
        </div>
    );
};

export default ArticlesOfTheDay;
