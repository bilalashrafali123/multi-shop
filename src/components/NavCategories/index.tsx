import { Link } from "react-router-dom"
import NavIcons from "../NavIcons"  // adjust path
import "./index.scss"

const NavCategories = () => {
  return (
    <div className="nav-background">
      <div className="container nav-container">
       <div className="categories">
          <div className="left-content">
            <i className="fa-solid fa-bars"></i>
            <span>Categories</span>
          </div>
          <i className="fa-solid fa-caret-down caret-arrow"></i>
        </div>
       <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/shopdetail">ShopDetail</Link>
        </div>
      <NavIcons />
      <label htmlFor="nav-toggle" className="hamburger-icon">
            <i className="fa-solid fa-bars"></i>
          </label>
      </div>
    </div>
  )
}

export default NavCategories
