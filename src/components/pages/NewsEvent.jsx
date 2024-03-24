import { useEffect, useState } from 'react';
import axiosClient from '../../axios';
import Loader from '../../assets/images/loader.gif'
import SingleNewsEvent from './SingleNewsEvent';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../Helpers/ImageBaseUrl';

const NewsEvent = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchAllServices();
  }, []);

  const fetchAllServices = () => {
    axiosClient.get('/get-news').then(res => {
      if (res.data.status == 200) {
        setNewsData(res.data.news);
        setLoading(false);
      }
    });
  }


  return <>

    <section className="page-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-white">News & Events</h1>
          </div>
        </div>
      </div>
    </section>
    <section className="sec-pd bg-accent">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="{{ url('/') }}" className="text-blue">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">News & Event</li>
          </ol>
        </nav>
        <div className="row" id="customize-thumbnails-gallery">
          {newsData.map((news) => (
            <div className="col-12 col-md-4">
              <Link to="1">
                <a className="normal-card">
                  <div className="event-item">
                    <img src={`${IMAGE_URL}/${news.single_image}`} alt="icon" className="w-100 img-fluid d-block" />
                    <h5>{news.title}</h5>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

  </>
}

export default NewsEvent;