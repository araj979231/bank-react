import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import http from '../../http';
import axiosClient from '../../axios';
import { Button, Card, CardBody, CardText, Col, Container, Input, Row } from "reactstrap"


const FixDeposite = () => {
  const [fixDeposite, setFixDeposite] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchFixDepositeData();
  }, []);
  const fetchFixDepositeData = () => {

    axiosClient.get('/page/Fixed Deposite').then(res => {
      if (res.data.status == 200) {
        setFixDeposite(res.data.page);
        setLoading(false);
      }
    });
  }

  return <>
    <section className="page-banner set-bank-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-white">Fix Deposite</h1>
          </div>
        </div>
      </div>
    </section>
    <section className='sec-pd bg-accent pb-3'>
      <div className='container'>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to='/' className="text-blue">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Fix Deposite</li>
          </ol>
        </nav>
      </div>
    </section>
    <section className="sec-pd bg-accent pt-0 text-justify">
      <div class="container">
        <div class="row p-4 bg-white">
          <div class="col-lg-12">
            <p dangerouslySetInnerHTML={{ __html: fixDeposite.heading }}></p>
            <p dangerouslySetInnerHTML={{ __html: fixDeposite.content }}></p>

          </div>
        </div>
      </div>
    </section>
  </>
}

export default FixDeposite;