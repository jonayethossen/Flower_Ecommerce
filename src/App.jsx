import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import Login from "./assets/Login";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Login />
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
