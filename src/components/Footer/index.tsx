import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
  } from "react-icons/fa";
  import "./index.scss";
  
  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__column">
            <h4>GET IN TOUCH</h4>
            <p>
              No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
              et dolor sed dolor. Rebum tempor no vero est magna amet no
            </p>
            <ul>
              <li>
                <FaMapMarkerAlt /> 123 Street, New York, USA
              </li>
              <li>
                <FaEnvelope /> info@example.com
              </li>
              <li>
                <FaPhoneAlt /> +012 345 67890
              </li>
            </ul>
          </div>
        <div className="footer__column">
            <h4>QUICK SHOP</h4>
            <ul>
              <li>› Home</li>
              <li>› Our Shop</li>
              <li>› Shop Detail</li>
              <li>› Shopping Cart</li>
              <li>› Checkout</li>
              <li>› Contact Us</li>
            </ul>
          </div>
        <div className="footer__column">
            <h4>MY ACCOUNT</h4>
            <ul>
              <li>› Home</li>
              <li>› Our Shop</li>
              <li>› Shop Detail</li>
              <li>› Shopping Cart</li>
              <li>› Checkout</li>
              <li>› Contact Us</li>
            </ul>
          </div>
        <div className="footer__column">
            <h4>NEWSLETTER</h4>
            <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
            <div className="footer__newsletter">
              <input type="text" placeholder="Your Email Address" />
              <button>Sign Up</button>
            </div>
            <h5>FOLLOW US</h5>
            <div className="footer__socials">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer__bottom container">
          <p>
            © <strong>Domain</strong>. All Rights Reserved. Designed by{" "}
            <strong>Bilal</strong>
            <br />
            Distributed By: <strong>ThemeWagon</strong>
          </p>
          <div className="footer-icons">
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-paypal"></i>
            <i className="fa-brands fa-cc-discover"></i>
            <i className="fa-brands fa-cc-jcb"></i>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  