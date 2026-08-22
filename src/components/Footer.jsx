import React from "react";
import "../css_File/Footer.css";

import {FaGithub,FaPhoneAlt,FaInstagram, FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* About Us */}
                <div className="footer-box">
                    <h2>About Us</h2>
                    <p>
                       Java Full Stack Developer focused on building modern,
                       responsive and user-friendly web applications.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-box">
                    <h2>Quick Links</h2>

                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#services">Services</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>

                {/* Subscribe */}
                <div className="footer-box">
                    <h2>Subscribe</h2>

                    <div className="subscribe">
                        <input
                            type="email"
                            placeholder="Enter your email"
                        />
                        <button>Subscribe</button>
                    </div>
                </div>

                {/* Follow Us */}
                <div className="footer-box">
                    <h2>Follow Us</h2>

                    <div className="social-icons">
                        <a href="#"><FaGithub /></a>
                        <a href="#"><MdEmail /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;