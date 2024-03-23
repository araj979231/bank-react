import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosClient from '../../axios';
import Loader from '../../assets/images/loader.gif'
const LoanScheme = () => {
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
        <>
         <section className="page-banner set-bank-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white">Loan</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to='/' className="text-blue">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Loan</li>
            </ol>
          </nav>
    </div>
            <section className="sec-pd bg-accent">
         <div class="container">
        <div class="row p-4 bg-white">
            <div class="col-lg-12">
            <p dangerouslySetInnerHTML={{ __html: loanData.heading}}></p> 
            <p dangerouslySetInnerHTML={{ __html: loanData.content}}></p> 
                
            </div>
        </div>
    </div>
    </section>
    </>
      );
}

export default LoanScheme;