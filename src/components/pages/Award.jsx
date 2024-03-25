import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../axios";
import { IMAGE_URL } from "../../Helpers/ImageBaseUrl";

const Award = () => {
    const [awards, setAwards] = useState([]);

    useEffect(() => {
        fetchAwardsData();
    }, []);

    const fetchAwardsData = () => {
        axiosClient.get('/awards').then(res => {
            if (res.data.status == 200) {
                setAwards(res.data.awards);
                setLoading(false);
            }
        });
    }

    console.log(awards);
    return (
        <>
            <section className="page-banner set-bank-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white">Award and Recognation</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-pd bg-accent">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/' className="text-blue">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Award and Recognation</li>
                        </ol>
                    </nav>
                </div>
                <div className="container">
                    <div className="row mt-4">
                        {awards.map((item) => (
                            <div className="col-md-3 col-6">
                                <div className="trending-product-box mb-3 bg-white shadow border pd-30-15 rounded position-relative text-center">
                                    <img src={`${IMAGE_URL}/${item.image}`} width="200" height="250" alt="icon" className="mx-auto d-block responsive_image" />
                                    <h6 className="mt-3 mb-2">{item.name}</h6>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );

}

export default Award;