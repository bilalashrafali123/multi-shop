import "./index.scss";

const UpperHeader = () => {
  return (
     <div className="background">   
    <div className="container">
      <div className="upper-header">
        <div className="header-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Support</a>
          <a href="#">Faqs</a>
        </div>
        <div className="alerts">
          <span>USA</span>
          <span>My Account</span>
          <span>EM</span>
        </div>
      </div>
    </div>
      </div>

  );
};

export default UpperHeader;
