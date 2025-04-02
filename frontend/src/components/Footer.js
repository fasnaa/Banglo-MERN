import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import './Footer.css';  // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <FaPinterest className="icon" />
        </a>
      </div>
      <p className="footer-text">© 2025 Banglo</p>
    </footer>
  );
};

export default Footer;
