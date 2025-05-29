import Banner from "../Banner";
import FeaturedProducts from "../FeaturedProducts";
import FeaturedProductText from "../FeaturedProductsText";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import UpperHeader from "../UpperHeader";
import "./index.scss";

const ShopDetail = () => {
  return (
    <>
      <UpperHeader />
      <Header />
      <Navbar />
      <Banner title="ShopDetail" />
      <div className="product-details-wrapper">
        <div className="container">
          <div className="product-details-inner">
            <div className="product-image">
              <img
                src="/src/product-1.jpg"
                alt="Product"
                className="main-image"
              />
            </div>
            <div className="product-info">
              <h2>Nikon Camera</h2>
              <div className="rating">⭐⭐⭐⭐☆ (99 Reviews)</div>
              <h3>$150.00</h3>
              <p>
                Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr
                erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem
                magna duo dolor no sea Nonumy
              </p>
              <div className="options">
                <div className="option-group">
                  <span>Sizes:</span>
                  <div className="choices">
                    <label>
                      <input type="radio" name="size" /> XS
                    </label>
                    <label>
                      <input type="radio" name="size" /> S
                    </label>
                    <label>
                      <input type="radio" name="size" /> M
                    </label>
                    <label>
                      <input type="radio" name="size" /> L
                    </label>
                    <label>
                      <input type="radio" name="size" /> XL
                    </label>
                  </div>
                </div>
                <div className="option-group">
                  <span>Colors:</span>
                  <div className="choices">
                    <label>
                      <input type="radio" name="color" /> Black
                    </label>
                    <label>
                      <input type="radio" name="color" /> White
                    </label>
                    <label>
                      <input type="radio" name="color" /> Red
                    </label>
                    <label>
                      <input type="radio" name="color" /> Blue
                    </label>
                    <label>
                      <input type="radio" name="color" /> Green
                    </label>
                  </div>
                </div>
              </div>
              <div className="add-to-cart">
                <div className="quantity">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <button className="add-button">Add To Cart</button>
              </div>
              <div className="share">
                <span>Share on:</span>
                <div className="icons">
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-linkedin"></i>
                  <i className="fa-brands fa-pinterest"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="product-tabs">
            <div className="tabs">
              <button className="active">Description</button>
              <button>Information</button>
              <button>Reviews (0)</button>
            </div>
            <div className="tab-content">
              <h4>Product Description</h4>
              <p>
                Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
                Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero
                diam ea vero et dolore rebum, dolor rebum eirmod consetetur
                invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd
                ipsum rebum diam.
              </p>
              <p>
                Dolore magna est eirmod sanctus dolor, amet diam et eirmod et
                ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem
                tempor. Gubergren amet amet labore sadipscing clita clita diam
                clita. Sea amet et sed ipsum lorem elitr et, amet et labore
                voluptua sit rebum.
              </p>
            </div>
          </div>
          <FeaturedProductText title="you may also like" />
        </div>
      </div>
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default ShopDetail;
