import "./index.scss"

interface IBannerProps {
    title : string
}

const Banner = (props : IBannerProps) => {
  return (
    <div className="container">
        <div className="banner">
        <span><a href="#">Home /</a></span>
        <span><a href="#">Shop /</a></span>
        <span><a href="#">{props.title}</a></span>
        </div>
    </div>
  )
}

export default Banner;