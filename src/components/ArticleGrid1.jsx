import React from "react";

function ArticleGrid1({
  sectionTitle,
  sectionSubtitle,
  articleTitles,
  images,
  authors,
  dates,
}) {
  return (
    <section className="py-6 sm:py-12">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">{sectionTitle}</h2>
          <p className="font-serif text-sm text-gray-600">{sectionSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col border-solid border border-grey-50">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 bg-gray-300"
                src={images[0]}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                href={articleTitles[0].url}
                key={0}
                className="flex-1 py-2 text-lg font-semibold hover:underline leading-snug"
              >
                {articleTitles[0].title}
              </a>

              <div
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider font-semibold text-blue-500"
              >
                By {authors[0]}
              </div>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                <span>{dates[0]}</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col border-solid border border-grey-50">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 bg-gray-300"
                src={images[1]}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                href={articleTitles[1].url}
                key={0}
                className="flex-1 py-2 text-lg font-semibold hover:underline leading-snug"
              >
                {articleTitles[1].title}
              </a>

              <div
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider font-semibold text-blue-500"
              >
                By {authors[1]}
              </div>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                <span>{dates[1]}</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col border-solid border border-grey-50">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 bg-gray-300"
                src={images[2]}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                href={articleTitles[2].url}
                key={0}
                className="flex-1 py-2 text-lg font-semibold hover:underline leading-snug"
              >
                {articleTitles[2].title}
              </a>

              <div
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider font-semibold text-blue-500"
              >
                By {authors[2]}
              </div>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                <span>{dates[2]}</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col border-solid border border-grey-50">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 bg-gray-300"
                src={images[3]}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                href={articleTitles[3].url}
                key={0}
                className="flex-1 py-2 text-lg font-semibold hover:underline leading-snug"
              >
                {articleTitles[3].title}
              </a>

              <div
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider font-semibold text-blue-500"
              >
                By {authors[3]}
              </div>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                <span>{dates[3]}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ArticleGrid1;
