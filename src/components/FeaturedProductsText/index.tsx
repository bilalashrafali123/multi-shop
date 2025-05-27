import "./index.scss";

interface IFeaturedProductText {
  title: string;
}

const FeaturedProductText = (props: IFeaturedProductText) => {
  return <h1 className="featured-text">{props.title}</h1>;
};

export default FeaturedProductText;
