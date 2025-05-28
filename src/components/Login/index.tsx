import "./index.scss";
import UpperHeader from "../UpperHeader";
import Header from "../Header";
import Navbar from "../Navbar";
import Banner from "../Banner";
import Footer from "../Footer";

const Login = () => {
  return (
    <>
      <UpperHeader />
      <Header />
      <Navbar />
      <Banner title="login" />
      <div className="login-wrapper">
        <div className="login-box">
          <h2>Login</h2>
          <div className="login-inp">
            <input className="input" type="text" placeholder="Your Email" />{" "}
            <br />
            <input
              className="input-password"
              type="password"
              placeholder="Password"
            />
            <button className="login-btn">Login</button>
            <a className="forgot" href="#">
              Forgot Password ?
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
