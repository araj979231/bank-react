import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../../axios';
import { IMAGE_URL } from '../../Helpers/ImageBaseUrl';
const BankHistory = () => {
    const [bankhistory, setBankHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchBankHistory();
    }, []);

    const fetchBankHistory = () => {
        axiosClient.get('/page/Society History').then(res => {
            if (res.data.status == 200) {
                setBankHistory(res.data.page);
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
                            <h1 className="text-white">Society History</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-pd bg-accent">
                <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Society history</li>
                            </ol>
                        </nav>
                </div>
            </section>
            <div className="container">
                <div class="row mt-4 py-4 px-4 bg-white">
                    <div class="col-lg-4 text-center">
                        <img src={`${IMAGE_URL}/${bankhistory.image}`} class="img-fluid w-100" alt="img" width="200" height="200" />
                    </div>
                    <div class="col-lg-8">
                        <p dangerouslySetInnerHTML={{ __html: bankhistory.heading }}></p>
                    </div>
                </div>
                <div className="row pt-0  p-4 bg-white">
                    <div className="col-12"></div>
                    <p dangerouslySetInnerHTML={{ __html: bankhistory.content }}></p>
                </div>
            </div>

        </>
    )
}

export default BankHistory;