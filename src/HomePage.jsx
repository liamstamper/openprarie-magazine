import React from "react";
import { Link } from "react-router-dom";
import ArticleGrid1 from "./components/ArticleGrid1";
import ArticleGrid2 from "./components/ArticleGrid2";
import ArticleGrid3 from "./components/ArticleGrid3";
import ViewMore from "./components/ViewMore";
import ArticlesData from "./components/ArticlesData";

const HomePage = () => {
  return (
    <div className="bg-slate-50">
      <ArticleGrid2 articles={ArticlesData.slice(4, 5)} />
      <ArticleGrid1
        articles={ArticlesData.slice(0, 4)}
        sectionTitle="Featured Articles"
        sectionSubtitle="Highting our top articles this month"
      />
      <ViewMore section="Recent" url="null" />
    </div>
  );
};

export default HomePage;
