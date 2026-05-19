import React from 'react';

function AboutUs({ setShowProducts }) {
  return (
    <div className="landing-page">
      <div className="overlay">

        <div className="left-section">
          <h1>Welcome To Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>

          <button
            className="get-started"
            onClick={() => setShowProducts(true)}
          >
            Get Started
          </button>
        </div>

        <div className="right-section">
          <h2>
            Welcome to Paradise Nursery, where green meets serenity!
          </h2>

          <p>
            At Paradise Nursery, we are passionate about bringing
            nature closer to you. Our mission is to provide a wide
            range of high-quality plants.
          </p>

          <p>
            Our team of experts ensures that every plant meets our
            strict standards of quality and care.
          </p>

          <p>
            Join us in creating a greener, healthier world.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;