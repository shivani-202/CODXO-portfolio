import React from "react";
// import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
        <Home />
        <Profile />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
