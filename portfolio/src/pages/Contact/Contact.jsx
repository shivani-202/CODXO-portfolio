import React from "react";
import "./Contact.css";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="conatct-info">
      <div className="contact-info-1">
        <p className="contact-text-1">Let's work together.</p>
        <a href="mailto:shivanis1273@gmail.com" className="mailto-link">
          Get in touch.
        </a>
      </div>

      <div className="footer">
        <div className="copyright-text">
          &copy; shivani sharma {currentYear}
        </div>
        <div className="socials">
          <a href="https://x.com/shivanis1273" className="twitter social-link">
            twitter
          </a>
          <a
            href="https://www.linkedin.com/in/shivani-sharma-35b857230/"
            className="linkedin social-link"
          >
            linkedin
          </a>
          <a
            href="https://github.com/shivani-202"
            className="github social-link"
          >
            github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
