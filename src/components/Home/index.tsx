import Carousel from "../Carousel"
import Categories from "../Categories"

import Header from "../Header"
import Navbar from "../Navbar"
import RatingCards from "../RatingCards"
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
  </>
  )
}

export default Home