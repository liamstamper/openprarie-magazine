import React from "react";
import { useParams } from "react-router-dom";

function SectionPage() {
  const { sectionId } = useParams();
  return (
    <section className="text-gray-800">
      <div className="container mx-auto flex flex-col items-center px-4 text-center md:py-10 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)} Section
        </h1>
      </div>
    </section>
  );
}

export default SectionPage;
