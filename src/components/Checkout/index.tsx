import Banner from "../Banner"
import Footer from "../Footer";
import Header from "../Header"
import Navbar from "../Navbar"
import UpperHeader from "../UpperHeader"

import "./index.scss";

const Checkout = () => {
  return (
    <>
    <UpperHeader />
       <Header />
       <Navbar />
       <Banner title="checkout" />
    <div className="checkout-page">
      <div className="container checkout-wrapper">
      <div className="checkout-left">
          <h3>BILLING ADDRESS</h3>
          <table className="billing-table">
            <tbody>
              <tr>
                <td><input type="text" placeholder="First Name" /></td>
                <td><input type="text" placeholder="Last Name" /></td>
              </tr>
              <tr>
                <td><input type="email" placeholder="E-mail" /></td>
                <td><input type="text" placeholder="Mobile No" /></td>
              </tr>
              <tr>
                <td><input type="text" placeholder="Address Line 1" /></td>
                <td><input type="text" placeholder="Address Line 2" /></td>
              </tr>
              <tr>
                <td>
                  <select>
                    <option>United States</option>
                  </select>
                </td>
                <td><input type="text" placeholder="City" /></td>
              </tr>
              <tr>
                <td><input type="text" placeholder="State" /></td>
                <td><input type="text" placeholder="ZIP Code" /></td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <label><input type="checkbox" /> Create an account</label>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <label><input type="checkbox" /> Ship to different address</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="checkout-right">
          <div className="order-summary">
            <h3>ORDER TOTAL</h3>
            <div className="summary-box">
              <div className="line"><strong>Products</strong></div>
              <div className="line"><span>Product Name 1</span><span>$150</span></div>
              <div className="line"><span>Product Name 2</span><span>$150</span></div>
              <div className="line"><span>Product Name 3</span><span>$150</span></div>
              <div className="line"><strong>Subtotal</strong><span>$150</span></div>
              <div className="line"><strong>Shipping</strong><span>$10</span></div>
              <div className="line total"><strong>Total</strong><span>$160</span></div>
            </div>
          </div>

          <div className="payment">
            <h3>PAYMENT</h3>
            <div className="payment-methods">
              <label><input type="radio" name="payment" /> Paypal</label>
              <label><input type="radio" name="payment" /> Direct Check</label>
              <label><input type="radio" name="payment" /> Bank Transfer</label>
            </div>
            <button className="place-order">Place Order</button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Checkout;
