import React from "react";

function ViewMore({ section, url }) {
  return (
    <div className="flex justify-center">
      <a
        href={url}
        className="px-6 py-3 text-xs font-semibold rounded-md hover:underline text-black"
      >
        View more from {section} <span className="text-xs">&gt;&gt;</span>
      </a>
    </div>
  );
}

export default ViewMore;
