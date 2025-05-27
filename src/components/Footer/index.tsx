import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import "./index.scss"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__column">
          <h4>GET IN TOUCH</h4>
          <p>
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. 
            Rebum tempor no vero est magna amet no
          </p>
          <ul>
            <li><FaMapMarkerAlt /> 123 Street, New York, USA</li>
            <li><FaEnvelope /> info@example.com</li>
            <li><FaPhoneAlt /> +012 345 67890</li>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
