import React from "react";
import { Link } from "react-router-dom";

const JobLandingPage = () => {
  const jobPositions = [
    {
      id: 1,
      title: "Staff Writer",
      description:
        "As a Staff Writer, you'll be at the heart of our content creation team. You will be responsible for researching, writing, and editing articles that engage our diverse readership. The ideal candidate will have a strong command of language, the ability to work independently, and a keen eye for detail. You should be comfortable conducting interviews, exploring new ideas, and turning complex subjects into compelling stories. This is an opportunity to have your voice heard and contribute to the cultural and intellectual conversation through our magazine.",
      link: "/apply/staff-writer",
    },
    {
      id: 2,
      title: "Editor",
      description:
        "Our Editor will play a crucial role in shaping the voice and direction of our magazine. You will oversee the entire content production process, from pitch to publication, ensuring that all articles align with our editorial standards and brand values. This position requires a sharp editorial eye, exceptional organizational skills, and the ability to work closely with writers to refine their work. ",
      link: "/apply/editor",
    },
    {
      id: 3,
      title: "Graphic Designer",
      description:
        "We are seeking a talented Graphic Designer to join our creative team and elevate the visual experience of our magazine. In this role, you will be responsible for creating visually stunning layouts, graphics, and illustrations that enhance our content and resonate with our audience. The ideal candidate will have a strong portfolio showcasing their ability to translate ideas into compelling designs that align with our brand identity.",
      link: "/apply/graphic-designer",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Join Our Creative Team
        </h1>
        <p className="text-gray-600 mb-12">
          We're looking for talented individuals to join our magazine. Explore
          our open positions below and find out how you can contribute to our
          mission.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobPositions.map((position) => (
            <div
              key={position.id}
              className="bg-white p-6 rounded-lg border-gray-500 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {position.title}
              </h2>
              <p className="text-gray-600 mb-4">{position.description}</p>
              <Link
                to="/jobapplication"
                className="bg-blue-500 rounded-md px-5 py-1 text-white hover:bg-blue-600 transition-colors duration-200"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobLandingPage;
