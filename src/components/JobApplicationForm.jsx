import React, { useState } from "react";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Apply to Join Our Magazine Team
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          We're excited that you're interested in joining our creative team.
          Please fill out the form below and we'll be in touch soon!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="resume"
            >
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="coverLetter"
            >
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us why you'd be a great fit..."
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
