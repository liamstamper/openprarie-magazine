import React from "react";
import { Link } from "react-router-dom";

function ArticleGrid1({ articles, sectionTitle, sectionSubtitle }) {
  return (
    <section className="py-6 sm:py-12">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">{sectionTitle}</h2>
          <p className="font-serif text-sm text-gray-600">{sectionSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <article
              key={index}
              className="flex flex-col border-solid border border-grey-50"
            >
              <Link to={`/article/${article.id}`}>
                <img
                  className="object-cover w-full h-52 bg-gray-300"
                  src={article.imageUrl}
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  to={`/article/${article.id}`}
                  className="flex-1 py-2 text-lg font-semibold hover:underline leading-snug"
                >
                  {article.title}
                </Link>
                <div className="text-xs tracking-wider font-semibold text-blue-500">
                  By {article.author}
                </div>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                  <span>{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticleGrid1;
