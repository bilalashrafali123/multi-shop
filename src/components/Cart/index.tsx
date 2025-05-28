import Banner from "../Banner"
import Header from "../Header"
import Navbar from "../Navbar"
import UpperHeader from "../UpperHeader"
import "./index.scss"

const Cart = () => {
  return (
    <>
    <UpperHeader />
    <Header />
    <Navbar />
    <Banner title="cart" />
    </>
  )
}

export default Cart