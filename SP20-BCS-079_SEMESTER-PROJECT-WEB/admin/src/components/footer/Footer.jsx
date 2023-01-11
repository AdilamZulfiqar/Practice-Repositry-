import React from "react";
import "./Footer.css";
import PlayStore from "../images/play-store.png";
import AppStore from "../images/app-store.png";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="col-1">
            <a href="#!">
              <h2>Propertybazar.com</h2>
            </a>
            <h3>Contact</h3>
            <p>
              <strong>Address:</strong> LDA Avenue, Main Raiwand Road J-Block
              near Cui, Lahore
            </p>
            <p>
              <strong>Phone:</strong> +92-3154100710
            </p>
            <p>
              <strong>Hours:</strong> 9:00am - 7:00pm, Mon - Sat{" "}
            </p>
            <div className="follow">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-linkedin" />
              <i className="fa-brands fa-youtube" />
            </div>
          </div>
          <div className="col-2">
            <h3>About</h3>
            <a href="#!">About us </a>
            <a href="#!">Delivery Information </a>
            <a href="#!">Privacy Policy </a>
            <a href="#!">Terms &amp; Conditions </a>
            <a href="#!">Contact us</a>
          </div>
          <div className="col-2">
            <h3>My Account</h3>
            <a href="#!">Sign In</a>
            <a href="#!">View Cart</a>
            <a href="#!">My Wishlist</a>
            <a href="#!">Track My Order</a>
            <a href="#!">Help</a>
          </div>
          <div className="col-4">
            <h3>Install App</h3>
            <p>From App Store or Google Play</p>
            <div className="app">
              <a href="#!">
                <img src={PlayStore} />
              </a>
              <a href="#!">
                <img src={AppStore} />
              </a>
            </div>
            <p>Secured Payment Gateways</p>
            <div className="payment">
              <i className="fa-brands fa-cc-visa visa" />
              <i className="fa-brands fa-cc-mastercard " />
              <i className="fa-brands fa-paypal" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
