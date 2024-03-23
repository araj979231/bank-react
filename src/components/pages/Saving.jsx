import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosClient from '../../axios';
import { Button, Card, CardBody, CardText, Col, Container, Input, Row } from "reactstrap"

const Saving = () => {
    const [saving,setSavingData] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
      recurringDepositeData();
    },[]);
    const recurringDepositeData = () => {
      axiosClient.get('/page/Saving').then(res => {
        if(res.data.status == 200){
            setSavingData(res.data.page);
            setLoading(false);
        }
      });
    }
    console.log(saving);
    return <>
    <section className="page-banner set-bank-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white">Saving</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-pd bg-accent">
          <div class="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to='/' className="text-blue">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Saving</li>
            </ol>
          </nav>
        <div class="row p-4 bg-white">
            <div class="col-lg-12">
            <p dangerouslySetInnerHTML={{ __html: saving.heading}}></p> 
            <p dangerouslySetInnerHTML={{ __html: saving.content}}></p> 
                
            </div>
        </div>
    </div>
    </section>
    </>
}

export default Saving;

