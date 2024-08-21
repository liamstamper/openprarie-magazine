import React from "react";
import { useParams } from "react-router-dom";
import ArticleGrid1 from "./ArticleGrid1";
import ArticlesData from "./ArticlesData";

function SectionPage() {
  const { sectionId } = useParams();
  return (
    <section className="text-gray-800">
      <div className="container mx-auto flex flex-col items-center px-4 text-center md:py-10 md:px-10 lg:px-32 xl:max-w-3xl">
        <h2 className="text-4xl font-bold">{sectionId} Section</h2>
      </div>
      <ArticleGrid1
        articles={ArticlesData.filter(
          (article) => article.category === sectionId
        )}
      />
    </section>
  );
}

export default SectionPage;
