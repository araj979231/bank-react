import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Loader from '../../assets/images/loader.gif'

const HomeSlider = ({ sliderData,loading,baseUrl }) =>  { 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log(sliderData);
    return(
      <>
        
        <div className="home_slider">
        {loading ? 
        <div className='loader_div'><img className='loader_image' src={Loader} widt="50" height={50}/></div> 
        : 
        <Slider {...settings}>
        {sliderData.map((slider) => (
          <div className="item" key={slider.id}>
          <img className="responsive" src={`${baseUrl}/${slider.image}`}  />  
          </div>
        ))}
        </Slider>
        }
        
        </div>
      </>
    );
  }

export default HomeSlider;