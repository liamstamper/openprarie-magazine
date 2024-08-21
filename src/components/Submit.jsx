import React from "react";

const Submit = () => {
  return (
    <section className="text-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Submitting a story
        </h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold">Who can submit a story?</h3>
            <p className="mt-1 text-gray-600">
              Anyone can submit! It doesn't matter your experience level or
              background. We'll read every submission with great care and
              interest. If your piece resonates with our editorial team, we'll
              reach out within 30 days to discuss the next steps.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How to submit your story:</h3>
            <p className="mt-1 text-gray-600">
              We're thrilled that you're interested in contributing to our
              magazine! Please submit your story as a PDF attachment to{" "}
              <span className="text-blue-500">submissionbox187@gmail.com</span>.
              <br></br>
              Happy writing!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Submit;
