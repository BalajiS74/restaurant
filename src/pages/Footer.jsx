import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container">
        <div className="row g-4">
          {/* About Column */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/291/628/non_2x/restaurant-logo-design-vector.jpg"
                alt="Restaurant Logo"
                width="50"
                height="50"
                className="rounded-circle me-2"
              />
              <h4 className="mb-0">Healthy Kitchen</h4>
            </div>
            <p className="text-muted">
              We serve authentic cuisine made with the freshest ingredients. Our
              passion for food is reflected in every dish we prepare.
            </p>
            <div className="social-icons mt-4">
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-youtube fs-5"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/menu" className="text-white text-decoration-none">
                  Our Menu
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/gallery" className="text-white text-decoration-none">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase mb-4">Contact Us</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-3 d-flex">
                <i className="bi bi-geo-alt-fill me-3 text-danger"></i>
                <span className=" text-white">
                  123 Food Street, Culinary City, CC 12345
                </span>
              </li>
              <li className="mb-3 d-flex">
                <i className="bi bi-telephone-fill me-3 text-danger"></i>
                <span className=" text-white">(123) 456-7890</span>
              </li>
              <li className="d-flex">
                <i className="bi bi-envelope-fill me-3 text-danger"></i>
                <span className=" text-white">info@gourmethaven.com</span>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase mb-4">Opening Hours</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2 d-flex justify-content-between">
                <span className=" text-white">Monday - Thursday</span>
                <span className=" text-white">11:00 AM - 10:00 PM</span>
              </li>
              <li className="mb-2 d-flex justify-content-between">
                <span className=" text-white">Friday - Saturday</span>
                <span className=" text-white">11:00 AM - 11:00 PM</span>
              </li>
              <li className="d-flex justify-content-between">
                <span className=" text-white">Sunday</span>
                <span className=" text-white">12:00 PM - 9:00 PM</span>
              </li>
            </ul>
            <div className="mt-4">
              <button className="btn btn-outline-light btn-sm">
                Make a Reservation
              </button>
            </div>
          </div>
        </div>

        <hr className="my-4 bg-secondary" />

        {/* Bottom Bar */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <small className="text-muted">
              &copy; {new Date().getFullYear()} Gourmet Haven. All rights
              reserved.
            </small>
          </div>
          <div className="col-md-6 text-center text-md-end pb-3">
            <small className="text-muted">
              <a href="#" className="text-white text-decoration-none me-3">
                Privacy Policy
              </a>
              <a href="#" className="text-white text-decoration-none me-3">
                Terms of Service
              </a>
              <a href="#" className="text-white text-decoration-none">
                Sitemap
              </a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
