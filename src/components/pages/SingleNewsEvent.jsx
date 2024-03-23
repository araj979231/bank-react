import { useEffect, useState } from 'react';
import axiosClient from '../../axios';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { IMAGE_URL } from '../../Helpers/ImageBaseUrl';

const SingleNewsEvent = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    const [newsData,setNewsData] = useState([]);
    useEffect(()=>{
        fetchAllNewsData();
      },[]);
    const fetchAllNewsData = () => {
        axiosClient.get('/single-news/1').then(res => {
            if(res.data.status == 200){
              setNewsData(res.data.news);
            }
          });
    }
   
    
    return(
        <>
            <section className="sec-pd bg-accent">
    <div className="container">
    <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
               {newsData.map((singleNews) => (
                <a href={`${IMAGE_URL}/${singleNews}`}>
                    <img alt="img1" src={`${IMAGE_URL}/${singleNews}`} width="200" height="200" />
                </a>
                ))} 
              ...
            </LightGallery>
        </div>
        
    </div>
</section>
        </>
    );
}

export default SingleNewsEvent;