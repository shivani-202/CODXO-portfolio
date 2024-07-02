import React from "react";
import "./Profile.css";
// import profileImg from "../assets/profile.jpg";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-image-container">
        <img src="src/assets/profile.jpg" className="profile-image" />
      </div>
      <div className="profile-text">
        <div className="intro-text">
          <p className="about">
            As a final-year student at the National Institute of Technology,
            Hamirpur, pursuing a dual degree in Computer Science and
            Engineering, I am deeply passionate about frontend development. My
            enthusiasm lies in crafting visually stunning and intuitive websites
            that provide exceptional user experiences.
          </p>
          <button
            className="resume-btn"
            onClick={() => window.open("src/assets/resume.pdf")}
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
