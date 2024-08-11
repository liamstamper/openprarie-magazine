/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Submit = () => {
  const submissionEmail = "submissions@yourmagazine.com"; // Replace with your actual submission email

  return (
    <section className="container mx-auto text-center flex flex-col items-center px-4  md:py-10 md:px-10 lg:px-32 xl:max-w-6xl text-gray-800">
      <h2 className="text-3xl font-bold">Submissions</h2>
      <div className="mt-3 text-lg">
        <p className="mb-4 text-[16px]">
          We're thrilled that you're interested in contributing to our magazine!
          Please submit your story as a PDF attachment to{" "}
          <a
            href={`mailto:${submissionEmail}`}
            className="text-blue-500 hover:underline"
          >
            {submissionEmail}
          </a>
          . We read every submission with great care and interest. If your piece
          resonates with our editorial team, we'll reach out within 30 days to
          discuss the next steps. Happy writing!
        </p>
      </div>
    </section>
  );
};

export default Submit;
