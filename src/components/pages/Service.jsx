import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Loader from '../../assets/images/loader.gif'
import { useNavigate } from "react-router-dom";


const Service = ({servicesData,loading,baseUrl}) => {
  const navigate = useNavigate();
  const handleMainPage = (title) => {
    if(title == "Fixed Deposite"){
      navigate('/fix-deposite');
    }else if(title == "Recurring Deposite"){
      navigate('/recurring-deposite');
    }else if(title == "Loan"){
      navigate('/loan');
    }
    else if(title == "Saving"){
      navigate('/saving');
    }
  }
  
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
   
      return (
        <section className="sec-pd services">
    <div className="container">
      <div className="row">
          <div className="col-12">
              <h1 className="display-5  mb-5  text-center">
                  <span className="fw-800 home_title_color">Our Schemes</span>
              </h1>
          </div>
      </div>
      {loading ? 
        <div className='loader_div'><img className='loader_image' src={Loader} widt="50" height={50}/></div> 
        : 
      <Slider {...settings}>
          {servicesData.map((service) => (
            <div className="col-12 row-eq-height mob-mb-5" key={service.id}>  
            <div className='trending-product-box bg-white shadow border pd-30-15 rounded position-relative text-center'>
               <a onClick={() => handleMainPage(service.title)}><img src={`${baseUrl}/${service.image}`} alt="icon" class="mx-auto d-block"/></a>
              <a onClick={() => handleMainPage(service.title)}><h5 className="mt-3 mb-2">{service.title}</h5></a>
            </div>
            </div> 
          ))}                                             
          
      </Slider>
      }
    </div>
  </section>
      );
    }

export default Service;