import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosClient from '../../axios';
import { Button, Card, CardBody, CardText, Col, Container, Input, Row } from "reactstrap"
const RecurringDeposite = () => {
  const [recurringDeposite, setRecurringDeposite] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    recurringDepositeData();
  }, []);
  const recurringDepositeData = () => {
    axiosClient.get('/page/Recurring Deposite').then(res => {
      if (res.data.status == 200) {
        setRecurringDeposite(res.data.page);
        setLoading(false);
      }
    });
  }
  console.log(recurringDeposite);
  return <>
    <section className="page-banner set-bank-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-white">Recurring Deposite</h1>
          </div>
        </div>
      </div>
    </section>
    <section className="sec-pd bg-accent pb-3">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to='/' className="text-blue">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Recurring Deposite</li>
          </ol>
        </nav>
      </div>
    </section>
    <section className='sec-pd bg-accent pt-0 text-justify'>
      <div class="container">
        <div class="row p-4 bg-white">
          <div class="col-lg-12">
            <p dangerouslySetInnerHTML={{ __html: recurringDeposite.heading }}></p>
            <p dangerouslySetInnerHTML={{ __html: recurringDeposite.content }} className='table-responsive'></p>

          </div>
        </div>
      </div>
    </section>
  </>
}

export default RecurringDeposite;

