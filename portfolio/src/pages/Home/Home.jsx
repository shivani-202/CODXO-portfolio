import React, { useEffect, useState } from "react";
import "./Home.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="container">
      {/* <div className="home-img">
        <img src={profileImg} className="profile-img" />
      </div> */}
      <div className="home-text">
        <p className="text">Hello, I'm</p>
        <h1 className="name-text" style={{ fontSize: "40px" }}>
          Shivani Sharma
        </h1>
        <p className="text">Frontend Developer</p>
        <a
          href="https://www.linkedin.com/in/shivani-sharma-35b857230/"
          className="socials-link"
        ></a>
      </div>
    </div>
  );
};

export default Home;
