import Banner from "../Banner";
import Header from "../Header";
import Navbar from "../Navbar";
import UpperHeader from "../UpperHeader";
import FeaturedProducts from "../FeaturedProducts";
import "./index.scss";

const Shop = () => {
  return (
    <>
    <UpperHeader />
    <Header />
    <Navbar />
    <Banner title="shop" />
  <div className="shop-wrapper">
      <div className="container">
        <div className="shop-inner">
          <div className="shop-sidebar">
        <div className="filter-block">
              <h4>FILTER BY PRICE</h4>
              <ul>
                <li><input type="checkbox" /> All Price</li>
                <li><input type="checkbox" /> $0 - $100</li>
                <li><input type="checkbox" /> $100 - $200</li>
                <li><input type="checkbox" /> $200 - $300</li>
                <li><input type="checkbox" /> $300 - $400</li>
                <li><input type="checkbox" /> $400 - $500</li>
              </ul>
            </div>
            <div className="filter-block">
              <h4>FILTER BY COLOR</h4>
              <ul>
                <li><input type="checkbox" /> All Color</li>
                <li><input type="checkbox" /> Black</li>
                <li><input type="checkbox" /> White</li>
                <li><input type="checkbox" /> Red</li>
                <li><input type="checkbox" /> Blue</li>
                <li><input type="checkbox" /> Green</li>
              </ul>
            </div>
            <div className="filter-block">
              <h4>FILTER BY SIZE</h4>
              <ul>
                <li><input type="checkbox" /> All Size</li>
                <li><input type="checkbox" /> XS</li>
                <li><input type="checkbox" /> S</li>
                <li><input type="checkbox" /> M</li>
                <li><input type="checkbox" /> L</li>
                <li><input type="checkbox" /> XL</li>
              </ul>
            </div>
          </div>
          <div className="shop-content">
            <div className="shop-toolbar">
              <button>Sorting</button>
              <button>Showing</button>
            </div>
             <div className="shop-grid">
              <FeaturedProducts />
              <FeaturedProducts />
              <FeaturedProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Shop;
