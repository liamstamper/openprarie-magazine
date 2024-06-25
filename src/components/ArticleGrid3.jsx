import React from "react";

function ArticleGrid3({ titles, images, dates, authors, contents }) {
  return (
    <section className="text-gray-800 pt-10">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline hidden sm:block border-solid border border-grey-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 bg-gray-300"
              src="https://source.unsplash.com/random/480x360?4"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold hover:underline">
                {titles[0]}
              </h3>
              <div
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider font-semibold text-blue-500"
              >
                By {authors[0]}
              </div>
              <p>{contents[0]}</p>
              <span className="text-xs text-gray-600">January 24, 2021</span>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline hidden sm:block border-solid border border-grey-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 bg-gray-300"
              src="https://source.unsplash.com/random/480x360?5"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold  hover:underline">
                {titles[1]}
              </h3>
              <div
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider font-semibold text-blue-500"
              >
                By {authors[1]}
              </div>

              <p>{contents[1]}</p>
              <span className="text-xs text-gray-600">{dates[1]}</span>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline hidden sm:block border-solid border border-grey-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 bg-gray-300"
              src="https://source.unsplash.com/random/480x360?6"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold hover:underline">
                {titles[2]}
              </h3>
              <div
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider font-semibold text-blue-500"
              >
                By {authors[2]}
              </div>
              <p>{contents[2]}</p>
              <span className="text-xs text-gray-600">{dates[2]}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ArticleGrid3;
