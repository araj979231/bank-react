import '../../src/assets/css/style.css';
import '../../src/assets/css/responsive.css'
import Logo from '../assets/images/logo.jpeg';
import FdRates from '../assets/images/fd-rates.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import About from './pages/About';
import Loader from '../assets/images/loader.gif';
import axiosClient from '../axios';
import { IMAGE_URL } from '../Helpers/ImageBaseUrl';

const Header = () => {

    const [settingData, setSettingData] = useState([]);
    const [downloadData, setDownloadData] = useState([]);
    const [lastUpdated, setLastUpdated] = useState([]);
    const [contactData, setContactData] = useState({});
    const [loading, setLoading] = useState(true);
    const [fdRatesForLoanTwo, setFdRatesForLoanTwo] = useState([]);
    useEffect(() => {
        fetchRatesData();
        fetchAllSettingData();
        fetchAllContactData();
        fetchLastUpdatedData();
        fetchAllDownloadData();
    }, []);
    const fetchRatesData = () => {
        axiosClient.get('/get-fd-rates').then(res => {
            if (res.data.status == 200) {
                setFdRatesForLoanTwo(res.data.fd_rates);
            }
        });
    }
    const fetchAllSettingData = () => {
        axiosClient.get('/setting').then(res => {
            if (res.data.status == 200) {
                setSettingData(res.data.setting);
                setLoading(false);
            }
        });
    }

    const fetchLastUpdatedData = () => {
        axiosClient.get('/get-last-update').then(res => {
            if (res.data.status == 200) {
                setLastUpdated(res.data.lastUpdate);
                setLoading(false);
            }
        });
    }


    const fetchAllDownloadData = () => {
        axiosClient.get('/downloads').then(res => {
            if (res.data.status == 200) {
                setDownloadData(res.data.download);
                setLoading(false);
            }
        });
    }

    const fetchAllContactData = () => {
        axiosClient.get('/contact').then(res => {
            if (res.data.status == 200) {
                setContactData(res.data.contact);
                setLoading(false);
            }
        });
    }


    return (
        <>
            <div id="slideout" style={{ backgroundColor: "#303f9f;" }}>
                <h2 class="widget-title">Bank Details</h2>
                <div id="slideout_inner">
                    <div class="slide-out-div">
                        <div class="widget-footer">
                            <ul class="listnone">
                                <li>
                                    Registration Number : {settingData.registration_number}
                                </li>
                                <li>
                                    Reg. Date : {settingData.reg_date}
                                </li>
                                <li>
                                    R.B.I Licence number : {settingData.rbi_licence}
                                </li>
                                <li>
                                    GST No : {settingData.gst_number}
                                </li>
                                <li>IFS CODE : {settingData.ifsc_code}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slidetabindexout">

                <h2 class="widget-title">FD Rates</h2>
                <div id="slidetabindexout_inner">
                    <div class="slideindextab-out-div">
                        {fdRatesForLoanTwo.map((fdRates) => (
                            <div class="lender-listing">
                                <div class="lender-rate-box">
                                    <div class="lender-ads-rate">
                                        <small>Fixed Deposit</small>
                                        <h3 class="lender-rate-value">{fdRates.roi} %</h3>
                                        <small>{fdRates.type.name}</small>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <header>
                <div className="header-top bg-heading bg-blue">
                    <div className="container">
                        <marquee>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s , Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</marquee>
                    </div>
                </div>
                <div className="header-top mob-hidden">
                    <div className="container">
                        <div className="d-flex justify-content-between">

                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white mobile-hide">
                    <div className="container">
                        <a className="navbar-brand" href="http://thinkdream.in/bank">
                            <div><img src="https://thinkdream.in/bank/public/logo.jpeg" width={100} className="img-fluid" /></div>
                            <div><span>THE GUJARAT SACHIVALAY EMPLOYEES CO-OP NEW CREDIT SOCIETY </span></div>
                        </a>
                        <div className="header-content">
                            <div className="sociallg" style={{ display: "flex;", justifyContent: "center;" }}>
                                <ul>
                                    <li>
                                        <p>
                                            <img src="https://sncsgujarat.org/images/since.png" alt="Since 1982" className='logo_image_div' />
                                        </p>
                                    </li>
                                </ul></div>

                        </div>

                        <ul className="nav align-items-center ms-4">
                            <li>
                                <Link to="/member/login" className="btn bg-blue text-white"><i className="fas fa-user"></i> Member Login</Link>
                            </li>
                        </ul>




                    </div>
                </nav>

                <nav className="navbar navbar-expand-lg navbar-light bg-white p-0 desktop-hide">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><img src={`${IMAGE_URL}/${settingData.logo}`} className="img-fluid" /></Link>
                        <div className='mobile-header'>

                            <Link to="/member/login" className="btn bg-blue text-white"><i className="fas fa-user"></i> Member Login</Link>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </nav>

                <nav className="navbar navbar-expand-lg bg-blue mobile-menu  p-0">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link fw-600" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link fw-600 dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        About Us
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item fw-500" to="/society-history">Society History</Link>
                                        <Link className="dropdown-item fw-500" to="/chairmen-message">Chairman Message</Link>
                                        <Link className="dropdown-item fw-500" to="/board-of-director">Board of Directors</Link>
                                        <Link className="dropdown-item fw-500" to="/staff">Staff</Link>

                                        <Link className="dropdown-item fw-500" to="/financial-data">Financial Data</Link>

                                        <Link className="dropdown-item fw-500" to="/award-and-recognation">Award & Recognation</Link>


                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link fw-600 dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Annual Report
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                        <li><a className="dropdown-item fw-500" href="http://thinkdream.in/bank/public/kyc_form.pdf">2023-2022</a></li>
                                        <li><a className="dropdown-item fw-500" href="http://thinkdream.in/bank/public/kyc_form.pdf">2022-2021</a></li>
                                        <li><a className="dropdown-item fw-500" href="http://thinkdream.in/bank/public/kyc_form.pdf">2021-2020</a></li>

                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link fw-600 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Scheme
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item fw-500" to="/loan">Loan</Link>
                                        <Link className="dropdown-item fw-500" to="/fix-deposite">Fix Deposite</Link>
                                        <Link className="dropdown-item fw-500" to="/recurring-deposite">Recurring Deposite</Link>
                                        <Link className="dropdown-item fw-500" to="/saving">Saving</Link>

                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link fw-600" to="/calculator">Calculator</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link fw-600" to="/news-and-event">News & Event</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link fw-600 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Download
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {downloadData.map((downloadItem) => (
                                            <li key={downloadItem.id}><a className="dropdown-item fw-500" href="https://thinkdream.in/bank/public/kyc_form.pdf" target='_blank' download>{downloadItem.title}</a></li>
                                        ))}

                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link fw-600 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Life at SNSC
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                        <Link className="dropdown-item fw-500" to="/how-to-join-us-member">How To Join As Member</Link>
                                        <Link className="dropdown-item fw-500" to="/current-opening">Current Openings</Link>
                                        <Link className="dropdown-item fw-500" to="/tender">Tender</Link>

                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link fw-600" to="/contact-us">Contact</Link>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
            </header>


        </>
    );
}

export default Header;