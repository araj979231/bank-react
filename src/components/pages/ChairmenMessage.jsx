import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosClient from '../../axios';
import { IMAGE_URL } from '../../Helpers/ImageBaseUrl';
const ChairmenMessage = () => {
    const regex = /(<([^>]+)>)/gi;
    const [chairmanMessage, setChairmanMessage] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchChairmanMessageData();


    }, []);

    const fetchChairmanMessageData = () => {
        axiosClient.get('/page/Chairman message').then(res => {
            if (res.data.status == 200) {
                setChairmanMessage(res.data.page);
                setLoading(false);

            }
        });
    }
    // <p dangerouslySetInnerHTML={{ __html: chairmanMessage.heading}}></p> 


    return (
        <>
            <section className="page-banner set-bank-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white">Chairman Message</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-pd bg-accent text-justify">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/' className="text-blue">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Chairman message</li>
                        </ol>
                    </nav>
                </div>
                <div className='container'>
                    <div className="row mt-4 border rounded py-4 px-4 bg-white">
                        <div className="col-lg-4 text-center">
                            <img src="https://thinkdream.in/bank/public/logo.jpeg" className="img-fluid" alt="img" width="200" height="200" />
                        </div>
                        <div className="col-lg-8">
                            <p dangerouslySetInnerHTML={{ __html: chairmanMessage.heading }}></p>
                            <p dangerouslySetInnerHTML={{ __html: chairmanMessage.content }}></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChairmenMessage;