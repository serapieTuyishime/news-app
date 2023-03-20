import React from "react";
import { useSelector } from "react-redux";

const News = () => {
    const news = useSelector((state) => state.AllNews);
    return <div>{news}</div>;
};

export default News;
