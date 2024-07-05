import React from "react";

const Submit = () => {
  const submissionEmail = "submissions@yourmagazine.com"; // Replace with your actual submission email

  return (
    <section className="text-gray-800">
      <div className="container mx-auto flex flex-col items-center px-4 text-center md:py-10 md:px-10 lg:px-32 xl:max-w-4xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Submissions
        </h1>
        <div className="mt-6 text-lg text-gray-800">
          <p className="mb-4">
            We're thrilled that you're interested in contributing to our
            magazine! Please submit your story as a PDF attachment to{" "}
            <a
              href={`mailto:${submissionEmail}`}
              className="text-blue-500 hover:underline"
            >
              {submissionEmail}
            </a>
            .
          </p>

          <h2 className="text-3xl font-bold mt-5">Submission Guidelines</h2>
          <ul className="mt-4 text-left space-y-2">
            <li>
              <strong>Format:</strong> Attach your story as a PDF. Ensure your
              document is easy to read, with a clear title and your name at the
              top.
            </li>
            <li>
              <strong>Length:</strong> While we have no strict word count, most
              of our featured pieces range from 1,000 to 5,000 words.
            </li>
            <li>
              <strong>Cover Letter:</strong> Include a brief cover letter in the
              email body. Tell us about yourself, your writing background, and a
              short synopsis of your submission.
            </li>
          </ul>
          <h2 className="text-3xl font-bold mt-5">What Happens Next</h2>
          <p className="mt-2">
            We read every submission with great care and interest. If your piece
            resonates with our editorial team, we'll reach out within 30 days to
            discuss the next steps.{" "}
          </p>
          <p className="mt-4 font-bold">Happy writing!</p>
        </div>
      </div>
    </section>
  );
};

export default Submit;
