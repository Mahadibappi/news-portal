import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummary from "../../Shared/NewsSummary/NewsSummary";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h2>Home News are {allNews.length}</h2>
      {allNews.map((news) => (
        <NewsSummary key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Home;
