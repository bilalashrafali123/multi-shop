import "./index.scss";

const Carousel = () => {
  return (
    <div className="hero container">
      <div className="hero__left">
        <div className="hero__content">
          <h1>Women Fashion</h1>
          <p>
            Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet
            amet amet ndiam elitr ipsum diam
          </p>
          <button>Shop Now</button>
          <div className="hero__dots">
            <span />
            <span className="active" />
            <span />
          </div>
        </div>
      </div>
      <div className="hero__right">
        <div className="hero__offer">
          <p>SAVE 20%</p>
          <h3>Special Offer</h3>
          <button>Shop Now</button>
        </div>
        <div className="hero__offer">
          <p>SAVE 20%</p>
          <h3>Special Offer</h3>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
