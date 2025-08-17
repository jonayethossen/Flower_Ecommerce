import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
