import Carousel from "../Carousel"
import Categories from "../Categories"
import FeaturedProducts from "../FeaturedProducts"
import FeaturedProductText from "../FeaturedProductsText"
import Header from "../Header"
import Navbar from "../Navbar"
import RatingCards from "../RatingCards"
import RecentProducts from "../RecentProducts"
import SpecialOffer from "../SpecialOffer"
import UpperHeader from "../UpperHeader"
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
    <FeaturedProducts />
    <FeaturedProducts />
    <SpecialOffer />
    <RecentProducts />
</>
  )
}

export default Home