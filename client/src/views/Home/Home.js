import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Home() {
  const location=useLocation()
  return (
    <>
    <Navbar />
    <div className="home">
      <header>
        <h1  className='title'>Welcome to Automated Test Case Generation</h1>
        <p>Your one-stop solution for automated test case creation.</p>
      </header>

      <div className="main-card">
        <h2>Key Features</h2>

        <div className="main-feature-cards">

          <div className="feature-card">
            <Link to="/test-case"style={{textDecoration:" none"}} ><h3>Automated Test Case Generation</h3></Link>
            <p>Effortlessly generate test cases with our automated system.</p>
          </div>

          <div className="feature-card">
            <h3>Intuitive User Interface</h3>
            <p>User-friendly interface for a seamless test case creation experience.</p>
          </div>

          <div className="feature-card">
            <h3>Customizable Test Parameters</h3>
            <p>Tailor test cases to your needs by adjusting various parameters.</p>
          </div>

          <div className="feature-card">
            <h3>Integration with Testing Frameworks</h3>
            <p>Seamlessly integrate generated test cases with popular testing frameworks.</p>
          </div>

          <div className="feature-card">
            <h3>Real-time Collaboration</h3>
            <p>Collaborate with team members in real-time for efficient testing.</p>
          </div>
        </div>
      </div>

      <section className="about">
        <h2>About Us</h2>
        <p>
          We are dedicated to simplifying the test case generation process. Our platform empowers
          developers and testers to create comprehensive test suites with ease.
        </p>
      </section>

      <section className="get-started">
        <h2>Get Started</h2>
        <p>Start using our Automated Test Case Generation tool today and enhance your testing process.</p>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default Home;
