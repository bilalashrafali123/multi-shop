import "./index.scss";
import { FaCheck, FaShippingFast, FaExchangeAlt, FaPhoneVolume } from "react-icons/fa";

const RatingCards = () => {
  return (
    <section className="features">
      <div className="container features__container">
        <div className="feature__item">
          <FaCheck className="feature__icon" />
          <span>Quality Product</span>
        </div>
        <div className="feature__item">
          <FaShippingFast className="feature__icon" />
          <span>Free Shipping</span>
        </div>
        <div className="feature__item">
          <FaExchangeAlt className="feature__icon" />
          <span>14-Day Return</span>
        </div>
        <div className="feature__item">
          <FaPhoneVolume className="feature__icon" />
          <span>24/7 Support</span>
        </div>
      </div>
    </section>
  );
};

export default RatingCards;
