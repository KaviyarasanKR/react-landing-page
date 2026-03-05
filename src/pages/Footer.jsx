import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col">
          <h2 className="logo">GO<span>TAXI</span></h2>

          <p>
            Your trusted transportation partner in Tamil Nadu. Safety,
            innovation, and premium service available 24/7.
          </p>

          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>Designated Driver</li>
            <li>Intercity Courier</li>
            <li>Parental Safety</li>
            <li>Corporate Travel</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <span>PHONE</span>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-item">
            <span>EMAIL</span>
            <p>support@gotaxi.com</p>
          </div>

          <div className="contact-item">
            <span>LOCATION</span>
            <p>India</p>
          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>© 2026 GO Taxi. All Rights Reserved.</p>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;