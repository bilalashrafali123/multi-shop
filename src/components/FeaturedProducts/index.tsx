import './index.scss';

const FeaturedProducts = () => {
  return (
    <div className="container">
    <div className="products-grid">
        <div className="product-card">
          <img src="/src/product-1.jpg" alt="Product" className="product-image" />
          <h4 className="product-name">Product Name Goes Here</h4>
          <div className="product-price">
            <span className="new-price">$123.00</span>
            <span className="old-price">$123.00</span>
          </div>
          <div className="product-rating">
            <span className="stars">★★★★★</span>
            <span className="count">(99)</span>
          </div>
        </div>
        <div className="product-card">
          <img src="/src/product-2.jpg" alt="Product" className="product-image" />
          <h4 className="product-name">Product Name Goes Here</h4>
          <div className="product-price">
            <span className="new-price">$123.00</span>
            <span className="old-price">$123.00</span>
          </div>
          <div className="product-rating">
            <span className="stars">★★★★★</span>
            <span className="count">(99)</span>
          </div>
        </div>
         <div className="product-card">
          <img src="/src/product-3.jpg" alt="Product" className="product-image" />
          <h4 className="product-name">Product Name Goes Here</h4>
          <div className="product-price">
            <span className="new-price">$123.00</span>
            <span className="old-price">$123.00</span>
          </div>
          <div className="product-rating">
            <span className="stars">★★★★☆</span>
            <span className="count">(99)</span>
          </div>
        </div>
        <div className="product-card">
          <img src="/src/product-4.jpg" alt="Product" className="product-image" />
          <h4 className="product-name">Product Name Goes Here</h4>
          <div className="product-price">
            <span className="new-price">$123.00</span>
            <span className="old-price">$123.00</span>
          </div>
          <div className="product-rating">
            <span className="stars">★★★☆☆</span>
            <span className="count">(99)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
