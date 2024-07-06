import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const submissionEmail = "submissions@yourmagazine.com";
  return (
    <section className="container mx-auto flex flex-col items-center px-4 text-center md:py-10 md:px-10 lg:px-32 xl:max-w-5xl text-gray-800">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <div className="mt-4 text-lg">
        <p className="mb-4">
          For any inquiries we can be reached at{" "}
          <a
            href={`mailto:${submissionEmail}`}
            className="text-blue-500 hover:underline"
          >
            {submissionEmail}
          </a>
          . For information on submissions please visit our{" "}
          <Link className="underline" to="/submissions">
            submissions page.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Contact;
