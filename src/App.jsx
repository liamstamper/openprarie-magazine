import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./HomePage";
import SectionPage from "./components/SectionPage";
import Contact from "./components/Contact";
import Submit from "./components/Submit";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Article1 from "./components/Article1";
import Banner from "./components/Banner";
import JobApplication from "./components/JobApplicationForm";
import JobLandingPage from "./components/JobLandingPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/section/:sectionId" element={<SectionPage />} />
        <Route path="/submissions" element={<Submit />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/article1/:id" element={<Article1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/joblandingpage" element={<JobLandingPage />} />
        <Route path="/jobapplication" element={<JobApplication />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
