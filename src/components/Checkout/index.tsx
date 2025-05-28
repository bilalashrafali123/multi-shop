import Banner from "../Banner"
import Header from "../Header"
import Navbar from "../Navbar"
import UpperHeader from "../UpperHeader"
import "./index.scss"

const Checkout = () => {
  return (
   <>
   <UpperHeader />
   <Header />
   <Navbar />
   <Banner title="checkout" />
   </>
  )
}

export default Checkout