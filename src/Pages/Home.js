import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our website!</p>
      <div className="d-flex">
        <Link to="/about">
          <button>About Us</button>
        </Link>
        <br />
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
