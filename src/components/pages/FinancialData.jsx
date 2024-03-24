import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import http from '../../http';
import { Button, Card, CardBody, CardText, Col, Container, Input, Row } from "reactstrap"
import axiosClient from '../../axios';
const FinancialData = () => {
    const [financialData, setFinancialData] = useState([]);
    useEffect(() => {
        fetchFinancialData();
    }, []);

    const fetchFinancialData = () => {
        axiosClient.get('/page/Financial Data').then(res => {
            if (res.data.status == 200) {
                setFinancialData(res.data.page);
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
                            <h1 className="text-white">Financial Data</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-pd bg-accent">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/' className="text-blue">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Financial Data</li>
                        </ol>
                    </nav>
                    <div class="row mt-3 bg-white py-3 px-3 border has-table">
                        <p dangerouslySetInnerHTML={{ __html: financialData.heading }}></p>
                        <p dangerouslySetInnerHTML={{ __html: financialData.content }}></p>
                    </div>
                </div>
            </section>

        </>
    );
}

export default FinancialData;