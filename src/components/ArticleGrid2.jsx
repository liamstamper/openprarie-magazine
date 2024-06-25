import React from "react";

function ArticleGrid2({ title, image, author, date, content, link }) {
  return (
    <section className="py-6">
      <div className="container max-w-6xl p-6 pt-10 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href={link}
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 border-solid border border-grey-50"
        >
          <img
            src={image}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-300"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl ">{title}</h3>
            <div className="text-xs tracking-wider font-semibold text-blue-500">
              By {author}
            </div>
            <div>
              {content} &nbsp;&nbsp;
              <span className="font-bold text-s hover:underline">
                Continue Reading <span className="text-xs">&gt;&gt;</span>
              </span>
            </div>

            <div className="text-xs text-gray-600">{date}</div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default ArticleGrid2;
