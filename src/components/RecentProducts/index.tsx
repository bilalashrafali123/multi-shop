import FeaturedProducts from "../FeaturedProducts";
import FeaturedProductText from "../FeaturedProductsText";
import "./index.scss";
const RecentProducts = () => {
  return (
    <>
      <div className="container">
        <FeaturedProductText title="Recent Products" />
      </div>
      <FeaturedProducts />
      <FeaturedProducts />
    </>
  );
};

export default RecentProducts;
