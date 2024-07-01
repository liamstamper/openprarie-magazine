import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./HomePage";
import SectionPage from "./components/SectionPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/section/:sectionId" element={<SectionPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
