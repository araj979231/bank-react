import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageOne from '../../assets/images/saving-account.png';
import { useEffect, useState } from 'react';
import Loader from '../../assets/images/loader.gif'
import http from '../../http';

const Product = () => {
  const [productData,setProductData] = useState([]);
  const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetchAllProductData();
    },[]);

    const fetchAllProductData = () => {
        http.get('products').then(res => {
        if(res.data.status == 200){
          setProductData(res.data.product);
            setLoading(false);
         
        }
        });
    }
    
   
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return <>
     <div className="trending-products sec-pd">
    <div className="container">
      <div className="sec-title text-center">
       <h2 className="fw-700 mb-3 text-white"></h2>
        <h1 className="display-5  mb-2  text-center">
              <span className="fw-800 text-white">Trending Products</span>
          </h1>
        <span className="sec-bottom-hr" style={{ backgroundColor: "#fff" }}></span>
      </div>
      {loading ? 
        <div className='loader_div'><img className='loader_image' src={Loader} widt="50" height={50}/></div> 
        : 
      <div className="row mb-4">
      {productData.map((product) => (
        <div className="col-md-2 col-6 row-eq-height mob-mb-5">
          <div className="trending-product-box bg-white shadow border pd-30-15 rounded position-relative text-center">
            <img src={`http://localhost/bank/laravel-backend/public/images/${product.image}`} width="64" height="64" alt="icon" className="mx-auto d-block" />
            <h6 className="mt-3 mb-2">{product.title}</h6>
            <a className="circle-icon-link shadow border"><i className="fas fa-chevron-right"></i></a>
          </div>
        </div>
      ))}  
        
      </div>
    }
    </div>
  </div>
    </>  
}
export default Product;