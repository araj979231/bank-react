import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosClient from '../../axios';
import { IMAGE_URL } from '../../Helpers/ImageBaseUrl';
const BoardOfDirector = () => {
    const [boardOfDirector,setBoardOfDirector] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    fetchBoardOfDirectors();
  },[]);

  const fetchBoardOfDirectors = () => {
    axiosClient.get('/board-of-directors').then(res => {
      if(res.data.status == 200){
        setBoardOfDirector(res.data.board);
          setLoading(false);
      }
      });
  }
 
    return <>
    <section className="page-banner set-bank-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white">Board Of Directors</h1>
                        </div>
                    </div>
                </div>
            </section>
         <section className="sec-pd bg-accent">
    <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to='/' className="text-blue">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Board Of Directors</li>
            </ol>
          </nav>
    </div>
    <div className="container">
    	<div className="row mb-5">
      <h2 className="display-5 mb-4">Former Board Of Director</h2>
      {boardOfDirector.map((item) => (
        <div className="col-md-3 col-6 row-eq-height mob-mb-5">
          <div className="trending-product-box bg-white shadow border pd-30-15 rounded position-relative text-center">
            <img src={`${IMAGE_URL}/${item.image}`} width="200" height="200" alt="icon" className="mx-auto d-block"/>
            <h6 className="mt-3 mb-2">{item.name}</h6>
            <p className='mt-3 mb-2'>{item.designation}</p>
          </div>
        </div>
      ))}
        
      </div>
  </div>
  <div className="container">
    	<div className="row mb-5">
      <h2 className="display-5 mb-4">Current Board Of Director</h2>
      {boardOfDirector.map((item) => (
        <div className="col-md-3 col-6 row-eq-height mob-mb-5">
          <div className="trending-product-box bg-white shadow border pd-30-15 rounded position-relative text-center">
            <img src={`${IMAGE_URL}/${item.image}`} width="200" height="200" alt="icon" className="mx-auto d-block"/>
            <h6 className="mt-3 mb-2">{item.name}</h6>
            <p className='mt-3 mb-2'>{item.designation}</p>
          </div>
        </div>
      ))}
        
      </div>
  </div>
 </section>
    </>
}

export default BoardOfDirector;