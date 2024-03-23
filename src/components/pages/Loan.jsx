import ImageOne from '../../assets/images/fixed.webp'
import ImageTwo from '../../assets/images/saving.webp'
import ImageThree from '../../assets/images/current.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import axiosClient from '../../axios';
import Loader from '../../assets/images/loader.gif'

const Loan = () => {
  var imageUrl = 'http://localhost/bank/laravel-backend/public/images';
  const [loanData, setLoanData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchAllLoans();
  }, []);

  const fetchAllLoans = () => {
    axiosClient.get('/page/Loan').then(res => {
      if(res.data.status == 200){
        setLoanData(res.data.page);
        setLoading(false);
      }
    });
  }
  
  return (
    <div class="container">
    <div class="row p-4 bg-white">
        <div class="col-lg-12">
        <p dangerouslySetInnerHTML={{ __html: loanData.heading}}></p> 
        <p dangerouslySetInnerHTML={{ __html: loanData.content}}></p> 
            
        </div>
    </div>
</div>
  );
}

export default Loan;