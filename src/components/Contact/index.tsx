import UpperHeader from "../UpperHeader";
import Header from "../Header";
import Navbar from "../Navbar";
import Banner from "../Banner";
import "./index.scss";
import Footer from "../Footer";

const Contact = () => {
  return (
    <>
      <UpperHeader />
      <Header />
      <Navbar />
      <Banner title="Contact" />
      <div className="contact container">
        <div className="contact__left">
          <h2>Contact Us</h2>
          <form className="contact__form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows={6}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact__right">
          <div className="contact__map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.5597094975747!2d67.05119137488269!3d24.947064841787544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341b4c4180f59%3A0xcb8b11a9be6708cb!2sMARHABA%20GALAXY!5e0!3m2!1sen!2s!4v1748005451869!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
          <div className="contact__info">
            <p>
              <span><i className="fa-solid fa-map-pin"></i></span> 123 Street, New York, USA
            </p>
            <p>
              <span><i className="fa-solid fa-envelope"></i></span> info@example.com
            </p>
            <p>
              <span><i className="fa-solid fa-phone"></i></span> +012 345 67890
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
