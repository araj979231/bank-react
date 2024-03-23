import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 

const OurPartner = ({partners,baseUrl}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
    return(
        <>
        <div className="sec-pd bg-accent">
    <div className="container">
         <div className="sec-title text-center">
          <h1 className="display-5  mb-2  text-center">
              <span className="fw-800">Our Banking Partners</span>
          </h1>
        <span className="sec-bottom-hr"></span>
        
      </div>
        <Slider {...settings}>
         {partners.map((item) => (
          <li className="partner-slider-logo-list-item" key={item.key}>
            <div className="bg-white shadow-sm border rounded pd-20 d-flex justify-content-center align-items-center h-100">
              <img src={`${baseUrl}/${item.image}`} className="img-fluid" style={{width:'200px'}}/>
            </div>
          </li>
        ))}
        </Slider>
      
      </div>
      </div>
        </>
    );
}
export default OurPartner;