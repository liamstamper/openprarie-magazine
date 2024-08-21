import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Banner = () => {
  const location = useLocation();

  if (location.pathname === "/jobapplication") {
    return null;
  }
  return (
    <div className="px-8 py-2 bg-gray-100 text-gray-800">
      <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
        <div>
          <span>We're Seeking Writers and Staff!&nbsp;</span> Become a part of
          our creative team, share your stories, and make an impact.
        </div>
        <Link to="/jobapplication">
          <div className="underline">Apply Now!</div>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
