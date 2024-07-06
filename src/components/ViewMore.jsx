import React from "react";
import { Link } from "react-router-dom";

function ViewMore({ section }) {
  return (
    <div className="flex justify-center">
      <Link
        to={`/section/${section}`} // Corrected to use template literals for dynamic URL
        className="px-6 py-3 text-xs font-semibold rounded-md hover:underline text-black"
      >
        View more from {section} <span className="text-xs">&gt;&gt;</span>
      </Link>
    </div>
  );
}

export default ViewMore;
