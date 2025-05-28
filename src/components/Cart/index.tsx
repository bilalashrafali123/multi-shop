import Banner from "../Banner"
import Footer from "../Footer";
import Header from "../Header"
import Navbar from "../Navbar"
import UpperHeader from "../UpperHeader"
import './index.scss';

const Cart = () => {
  return (
    <>
      <UpperHeader />
      <Header />
      <Navbar />
      <Banner title="cart" />
      <div className="container cart-page">
        <div className="cart-wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product">
                  <img src="/src/product-1.jpg" alt="product" />
                  <span>Product Name</span>
                </td>
                <td>$150</td>
                <td className="quantity">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </td>
                <td>$150</td>
                <td><button className="remove">✖</button></td>
              </tr>
              <tr>
                <td className="product">
                  <img src="/src/product-2.jpg" alt="product" />
                  <span>Product Name</span>
                </td>
                <td>$150</td>
                <td className="quantity">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </td>
                <td>$150</td>
                <td><button className="remove">✖</button></td>
              </tr>
              <tr>
                <td className="product">
                  <img src="/src/product-3.jpg" alt="product" />
                  <span>Product Name</span>
                </td>
                <td>$150</td>
                <td className="quantity">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </td>
                <td>$150</td>
                <td><button className="remove">✖</button></td>
              </tr>
              <tr>
                <td className="product">
                  <img src="/src/product-4.jpg" alt="product" />
                  <span>Product Name</span>
                </td>
                <td>$150</td>
                <td className="quantity">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </td>
                <td>$150</td>
                <td><button className="remove">✖</button></td>
              </tr>
              <tr>
                <td className="product">
                  <img src="/src/product-4.jpg" alt="product" />
                  <span>Product Name</span>
                </td>
                <td>$150</td>
                <td className="quantity">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </td>
                <td>$150</td>
                <td><button className="remove">✖</button></td>
              </tr>
            </tbody>
          </table>
          <div className="cart-summary">
            <div className="coupon">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>
            <div className="summary-box">
              <h3>Cart Summary</h3>
              <div className="line">
                <span>Subtotal</span>
                <span>$150</span>
              </div>
              <div className="line">
                <span>Shipping</span> 
                <span>$10</span>
              </div>
              <div className="line total">
                <span>Total</span>
                <span>$160</span>
              </div>
              <button className="checkout-btn">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
