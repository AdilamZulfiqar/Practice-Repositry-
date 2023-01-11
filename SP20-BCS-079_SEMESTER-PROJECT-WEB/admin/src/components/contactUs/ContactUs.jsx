import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  function submit() {
    alert("Your responce has been successfully submitted");
  }
  return (
    <div>
      <h2 className="page-head">CONTACT US</h2>
      <section id="contact-container">
        <div className="contact-container-lite">
          <div className="contact-detail">
            <span>Get In Touch</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h4>Head Office</h4>
            <div>
              <li>
                <i class="fa-solid fa-map"></i>
                <p>Lda, Avenue one main Raiwand Road, Lahore</p>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <p>+92 3154100710</p>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                <p>trendocoder@gmail.com</p>
              </li>
              <li>
                <i class="fa-solid fa-clock"></i>
                <p>Monday to Saturday, 7:00am to 9:00pm</p>
              </li>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.7154659623925!2d74.2241045!3d31.421964599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901d446aeddbb%3A0xdadc273864bdfc93!2sLDA%20Ave%20ONE%20Rd%2C%20Block%20A%20Lda%20Avenue%20Phase%201%20Lda%20Avenue%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1661744814013!5m2!1sen!2s"
              style={{ width: "600", height: "600", border: "none" }}
            ></iframe>
          </div>
        </div>
      </section>

      <section id="form-detail">
        <div class="form-container">
          <form>
            <span>Leave a Message</span>
            <h2>We Love to Hear From You.</h2>
            <input type="text" placeholder="Your Name" />
            <br />
            <input type="email" placeholder="email@gmail.com" />
            <br />
            <input type="text" placeholder="Subject" />
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <br />
            <button onClick={submit}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
