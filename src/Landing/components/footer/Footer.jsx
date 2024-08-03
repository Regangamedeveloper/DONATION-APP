import React from 'react';
import './footer.scss'; // Import the SCSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
        <div className="fame">
          <img 
            src="https://adra.org.nz/wp-content/uploads/2019/11/adra-vertical-logo.png" // Replace with the actual path to your logo 
            alt="Your Brand" 
          />
        </div>
          <h3>Address</h3>
          <p>Kireka Hill, Kampala, Uganda</p>
          <h3>Phone</h3>
          <p>+256.393.261.591</p>
        </div>

        <div className="footer-column">
          <h3>General Giving</h3>
          <ul>
            <li>Current Appeal</li>
            <li>Emergency Fund</li>
            <li>Planned Giving</li>
          </ul>
          <h3>Get Involved</h3>
          <ul>
            <li>Join Our Team</li>
            <li>Be an Advocate</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Impact</h3>
          <ul>
            <li>Health</li>
            <li>Education</li>
            <li>Livelihoods</li>
            <li>Emergency</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Media</h3>
          <ul>
            <li>ADRA Stories</li>
            <li>Publications</li>
            <li>Videos</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li>FAQs</li>
            <li>Where We Work</li>
            <li>Partners & Donors</li>
            <li>Complaints + Respons</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>© {new Date().getFullYear()} ADRA Uganda. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;