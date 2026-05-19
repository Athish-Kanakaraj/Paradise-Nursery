import React from 'react';

function AboutUs({ setShowProducts }) {

  return (

    <div className="about-us-container">

      <div className="overlay">

        <div className="left-section">

          <h1>Welcome to Paradise Nursery</h1>

          <p>Where Green Meets Serenity</p>

          <button
            className="get-started-btn"
            onClick={() => setShowProducts(true)}
          >
            Get Started
          </button>

        </div>

        <div className="right-section">

          <h2>About Us</h2>

          <p>
            Welcome to Paradise Nursery, your trusted destination
            for beautiful and healthy plants.
          </p>

          <p>
            We are passionate about bringing nature closer to
            homes and workplaces by offering a wide collection
            of indoor and outdoor plants.
          </p>

          <p>
            Our mission is to promote a greener lifestyle and
            provide high-quality plants with excellent customer
            service.
          </p>

          <p>
            At Paradise Nursery, we believe plants create peace,
            happiness, and a healthier environment for everyone.
          </p>

        </div>

      </div>

    </div>

  );

}

export default AboutUs;
