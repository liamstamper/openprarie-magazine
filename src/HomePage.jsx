import React from "react";
import { Link } from "react-router-dom";
import ArticleGrid1 from "./components/ArticleGrid1";
import ArticleGrid2 from "./components/ArticleGrid2";
import ArticleGrid3 from "./components/ArticleGrid3";
import ViewMore from "./components/ViewMore";
import ArticlesData from "./components/ArticlesData";

const HomePage = () => {
  return (
    <div>
      <ArticleGrid2
        title="Ei delenit sensibus liberavisse pri. Est in graece fuisset, eos affert putent doctus id."
        date="February 19, 2021"
        image="null"
        author="Henry Romain"
        content="Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est i Ei delenit sensibus liberavisse pri. Quod suscipit no nam.Est i Ei delenit sensibus liberavisse pri. Quod suscipit no nam."
        link="null"
      />
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
