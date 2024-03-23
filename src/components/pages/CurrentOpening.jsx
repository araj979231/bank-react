import { useEffect, useState } from 'react';
import axiosClient from '../../axios';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../Helpers/ImageBaseUrl';
import Loader from '../../assets/images/loader.gif'


const CurrentOpening = () => {
    const [currentOpenning,setcurrentOpenning] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    fetchAllcurrentOpenning();
  },[]);

  const fetchAllcurrentOpenning = () => {
    axiosClient.get('/current-opening').then(res => {
      if(res.data.status == 200){
        setcurrentOpenning(res.data.job);
        setLoading(false);
      }
    });
  }
  console.log(currentOpenning);
    return (
        <>
        <section className="page-banner set-bank-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white">Current Opening</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-pd">
                <div className="container">
                <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Current Opening</li>
                        </ol>
                    </nav>
                    <div className="row mt-5" style={{marginBottom: "-1.5rem;"}} id="fetch-mutual-fund-list">
                    {currentOpenning.map((item) => (
                    <div className="col-lg-6 row-eq-height mb-4" key={item.id}>
                        <div className="credit-card-box rounded shadow-sm border py-3 px-3 w-100 h-150 d-flex flex-column flex-md-row">
                            <div className="thumbnail w-80 text-center text-md-start mb-2 mb-md-0 pe-4" style={{minWidth: "220.11px;",maxWidth: "220.11px;"}}>
                                <div className="d-flex justify-content-center align-items-center p-3 border h-100 bg-accent rounded">
                                    <img src={`${IMAGE_URL}/${item.image}`} className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-content w-100">
                                <h4><a href="mutual-fund/aditya-birla-sun-life-frontline-equity-fund">{item.title}</a></h4>
                                <hr/>
                                <ul className="nav mt-3 mb-2">
                                        <li className="text-sm">
                                            <strong className="me-2">Description:</strong>
                                            <span>{item.description}</span>
                                        </li><br />
                                        <li className="text-sm mt-2">
                                            <strong className="me-2">Minimum Experience:</strong>
                                            <span>{item.experience}</span>
                                        </li><br />
                                        <li className="text-sm mt-2">
                                            <strong className="me-2">Minimum Salary:</strong>
                                            <span>{item.salary}</span>
                                        </li>
                                </ul>
                                <div className="d-flex justify-content-end mt-3">
                                    
                                    <a href="https://sipnow.adityabirlacapital.com/" target="_blank" class="btn btn-sm bg-blue text-white">Apply Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default CurrentOpening;