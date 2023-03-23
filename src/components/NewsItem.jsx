import React from "react";

const NewsItem = ({ author, content, description, urlToImage, title, url }) => {
    return (
        <a
            className="grid pointer-events-none gap-3 h-96 w-56 border border-lime-400 rounded"
            href={url}
        >
            <div className="h1/4 w-full">
                <img
                    src={urlToImage}
                    alt={title}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="overflow-hidden text-ellipsis ">{description}</div>
            <div className="overflow-hidden text-ellipsis">{content}</div>
            <span className="font-bold text-2xl">{author}</span>
        </a>
    );
};

export default NewsItem;
