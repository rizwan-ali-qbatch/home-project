import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      <h2>About Us Page</h2>
      <p>Learn more about our company and team.</p>
      <div className="d-flex">
        <Link to="/">
          <button>Home</button>
        </Link>
        <br />
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
