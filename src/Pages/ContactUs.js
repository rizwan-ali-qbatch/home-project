import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div>
      <h2>Contact Us Page</h2>
      <p>Reach out to us with your questions and feedback.</p>
      <div className="d-flex">
        <Link to="/">
          <button>Home</button>
        </Link>
        <br />
        <Link to="/about">
          <button>About Us</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
