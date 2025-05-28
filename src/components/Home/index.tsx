import Carousel from "../Carousel"
import Categories from "../Categories"
import FeaturedProducts from "../FeaturedProducts"
import FeaturedProductText from "../FeaturedProductsText"
import Footer from "../Footer"
import Header from "../Header"
import Navbar from "../Navbar"
import RatingCards from "../RatingCards"
import RecentProducts from "../RecentProducts"
import SpecialOffer from "../SpecialOffer"
import UpperHeader from "../UpperHeader"
import Vender from "../Vender"
import "./index.scss"

const Home = () => {
  return (
  <>
    <UpperHeader />
    <Header />
    <Navbar />
    <Carousel />
    <RatingCards />
    <Categories />
    <div className="container">
    <FeaturedProductText title="Featured Products" />
    </div>
    <div className="products-grid">
    <div className="container">
    <FeaturedProducts />
    <FeaturedProducts />
   </div>
    </div>
   <SpecialOffer />
    <RecentProducts />
    <Vender />
    <Footer />
</>
  )
}

export default Home