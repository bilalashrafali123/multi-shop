import Banner from "../Banner";
import Header from "../Header";
import Navbar from "../Navbar";
import UpperHeader from "../UpperHeader";
import FeaturedProducts from "../FeaturedProducts";
import Footer from "../Footer";
import "./index.scss";

const Shop = () => {
  return (
    <>
      <UpperHeader />
      <Header />
      <Navbar />
      <Banner title="Shop" />
      <div className="shop-wrapper">
        <div className="container">
          <div className="shop-inner">
            <div className="shop-sidebar">
              <div className="filter-block">
                <h4>FILTER BY PRICE</h4>
                <ul>
                  <li><input type="checkbox" /><div className="label-wrap"><span>All Price</span><span className="count">720</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>$0 - $100</span><span className="count">520</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>$100 - $200</span><span className="count">410</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>$200 - $300</span><span className="count">350</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>$300 - $400</span><span className="count">220</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>$400 - $500</span><span className="count">880</span></div></li>
                </ul>
              </div>
              <div className="filter-block">
                <h4>FILTER BY COLOR</h4>
                <ul>
                  <li><input type="checkbox" /><div className="label-wrap"><span>All Color</span><span className="count">450</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>Black</span><span className="count">150</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>White</span><span className="count">100</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>Red</span><span className="count">140</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>Blue</span><span className="count">130</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>Green</span><span className="count">120</span></div></li>
                </ul>
              </div>
              <div className="filter-block">
                <h4>FILTER BY SIZE</h4>
                <ul>
                  <li><input type="checkbox" /><div className="label-wrap"><span>All Size</span><span className="count">200</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>XS</span><span className="count">300</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>S</span><span className="count">800</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>M</span><span className="count">500</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>L</span><span className="count">900</span></div></li>
                  <li><input type="checkbox" /><div className="label-wrap"><span>XL</span><span className="count">110</span></div></li>
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
              <div className="pagination">
                <span className="previous">Previous</span>
                <span className="one">1</span>
                <span className="two">2</span>
                <span className="three">3</span>
                <span className="next">Next</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
