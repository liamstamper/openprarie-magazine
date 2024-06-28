import ArticleGrid1 from "./components/ArticleGrid1";
import ArticleGrid2 from "./components/ArticleGrid2";
import ArticleGrid3 from "./components/ArticleGrid3";

import ViewMore from "./components/ViewMore";

import React from "react";

const HomePage = () => {
  return (
    <div>
      <ArticleGrid2
        title="Ei delenit sensibus liberavisse pri. Est in graece fuisset, eos affert putent doctus id."
        date="February 19, 2021"
        image="null"
        author="David Doe"
        content="Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est i Ei delenit sensibus liberavisse pri. Quod suscipit no nam.Est i Ei delenit sensibus liberavisse pri. Quod suscipit no nam."
        link="null"
      />
      <ArticleGrid1
        sectionTitle="Ei delenit sensibus liberavisse pri. Est in graece fuisset, eos affert putent doctus id."
        sectionSubtitle="Ei delenit sensibus liberavisse pri. Est in graece fuisset, eos affert putent doctus id."
        articleTitles={[
          { title: "#React", url: "https://example.com/search?tag=React" },
          { title: "#WebDev", url: "https://example.com/search?tag=WebDev" },
          { title: "#WebDev", url: "https://example.com/search?tag=WebDev" },
          {
            title: "#Tailwi",
            url: "https://example.com/search?ta",
          },
        ]}
        images={["John Smith", "John Smith", "John Smith", "John Smith"]}
        authors={["John Smith", "John Smith", "John Smith", "John Smith"]}
        dates={["June 1, 2024", "June 1, 2024", "June 1, 2024", "June 1, 2024"]}
      />
      <ViewMore section="web" url="null" />
    </div>
  );
};

export default HomePage;
