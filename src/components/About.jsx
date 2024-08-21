import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="text-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold">
              How did Open Prairie Magazine get started?
            </h3>
            <p className="mt-1 text-gray-600">
              Open Prairie Magazine was born in 2024 out of a passion for
              storytelling and a desire to showcase writer's voices.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Who can submit a story?</h3>
            <p className="mt-1 text-gray-600">
              We welcome submissions from anyone with a story to tell that
              resonates with them. Whether you're an established writer or
              someone with a new perspective, we'd love to hear from you.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Who manages the Open Prairie Magazine?
            </h3>
            <p className="mt-1 text-gray-600">
              Open Prairie Magazine is managed by a dedicated team of editors,
              writers, and designers. Our team is passionate about curating and
              publishing high-quality content. Information on applying to join
              the team can be found{" "}
              <Link className="underline" to="/jobapplication">
                here.
              </Link>
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              What's the mission of the magazine?
            </h3>
            <p className="mt-1 text-gray-600">
              Our mission is to celebrate and amplify the voices of Iowa writers
              by providing a platform for their stories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
