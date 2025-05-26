import "./index.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-logo">
          <span className="header-text">Multi</span>
          <span className="header-text-2">Shop</span>
        </div>
        <div className="header-input">
          <input
            className="inp"
            type="text"
            placeholder="Search for products"
          />
          <i className="fa-brands fa-searchengin"></i>
        </div>
        <div className="header-icons">
          <h2>
            <span className="customer">Customer Service </span>
            <br /> <span className="customer-number">+421084098</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
