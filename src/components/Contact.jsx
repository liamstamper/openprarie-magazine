import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="text-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Contact Us
        </h2>
        <p className=" container flex flex-col justify-center mx-auto text-center text-gray-600">
          For any inquiries we can be reached at submissionbox187@gmail.com.
        </p>
      </div>
    </section>
  );
};

export default Contact;
