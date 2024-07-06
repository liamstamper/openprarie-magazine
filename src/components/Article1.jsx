import React from "react";
import { useParams } from "react-router-dom";
import articles from "./ArticlesData";

function Article1() {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);

  if (!article) {
    return <div>Article not found!</div>;
  }
  const {
    title,
    author,
    content,
    date,
    authorImageUrl,
    authorBio,
    hashtags,
    relatedArticles,
  } = article;

  return (
    <article className="max-w-2xl px-6 py-24 mx-auto space-y-12">
      <div className="w-full mx-auto space-y-4 text-center">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="text-sm dark:text-gray-600">
          by{" "}
          <a
            rel="noopener noreferrer"
            href="#"
            target="_blank"
            className="underline dark:text-blue-400"
          >
            {author}
          </a>{" "}
          on <time dateTime={date}>{date}</time>
        </p>
      </div>
      <div className="dark:text-gray-800">
        <p>{content}</p>
      </div>
      <div className="pt-12 border-t dark:border-gray-300">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img
            src={authorImageUrl}
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
          />
          <div className="flex flex-col">
            <p className="dark:text-gray-600">
              <span className="font-bold text-black">{author} </span>{" "}
              {authorBio}
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-4 space-x-4 align-center">
          {}
        </div>
      </div>
      <div>
        <div className="flex flex-wrap py-6 gap-2 dark:border-gray-600">
          {hashtags.map((hashtag, index) => (
            <a
              key={index}
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:text-gray-800"
            >
              {hashtag.tag}
            </a>
          ))}
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Related posts</h4>
          <ul className="ml-4 space-y-1 list-disc">
            {relatedArticles.map((related, index) => (
              <li key={index}>
                <a href="#" className="hover:underline">
                  {related.tag}
                </a>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Article1;
