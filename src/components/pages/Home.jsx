import { useEffect, useState } from 'react';
import FinancialStrength from "./FinancialStrength";
import HomeAbout from "./HomeAbout";
import Loan from "./Loan";
import Profite from "./Profite";
import Milestone from "./Milestone";
import OurPartner from "./OurPartner";
import Product from "./Product";
import Service from "./Service";
import HomeSlider from "./HomeSlider";
import axiosClient from '../../axios';
import Loader from '../../assets/images/loader.gif'
import { IMAGE_URL } from '../../Helpers/ImageBaseUrl';

const Home = () => {
    const [sliderData,setSliderData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [announcementData, setAnnouncementData] = useState([]);
    const [faqData, setFaqData] = useState([]);
    const [announcementLoading, setAnnouncementLoading] = useState(true);
    const [faqLoading, setFaqLoading] = useState(true);
    const [servicesData,setServicesData] = useState([]);
    const [profits,setProfits] = useState([]);
    const [milestoneData,setMilestoneData] = useState([]);
    const [partners,setPartners] = useState([]);

    useEffect(()=>{
      fetchAllSliders();
      fetchAnnoucementData();
      fetchfaqData();
      fetchAllServices();
      fetchAllProfitData();
      fetchAllMilestoneData();
      fetchAllPartner();
    },[]);
    const fetchAllSliders = () => {
        axiosClient.get('/sliders').then(res => {
          if(res.data.status == 200){
            setSliderData(res.data.slider);
            setLoading(false);
          }
        });
    }
    const fetchAnnoucementData = () => {
        axiosClient.get('/announcements').then(res => {
          if (res.data.status == 200) {
            setAnnouncementData(res.data.announcement);
            setAnnouncementLoading(false);
          }
        });
    }
    const fetchfaqData = () => {
        axiosClient.get('/faq').then(res => {
          if (res.data.status == 200) {
            setFaqData(res.data.faq);
            setFaqLoading(false);
          }
        });
    }
    const fetchAllServices = () => {
        axiosClient.get('/services').then(res => {
          if(res.data.status == 200){
            setServicesData(res.data.services);
            setLoading(false);
          }
        });
    }
    const fetchAllProfitData = () => {
		axiosClient.get('/profits').then(res => {
			if(res.data.status == 200){
			  setProfits(res.data.profite);
			  setLoading(false);
			}
		  });
	}
    const fetchAllMilestoneData = () => {
        axiosClient.get('/awards').then(res => {
          if(res.data.status == 200){
            setMilestoneData(res.data.awards);
            setLoading(false);
          }
        });
    }
    const fetchAllPartner = () => {
        axiosClient.get('/our-banking-partner').then(res => {
          if(res.data.status == 200){
            setPartners(res.data.partner);
              setLoading(false);
          }
          });
      }
    return(
        <>
        <HomeSlider sliderData={sliderData} loading={loading} baseUrl={IMAGE_URL} />
         <HomeAbout announcementData={announcementData} faqData={faqData} announcementLoading={announcementLoading} faqLoading={faqLoading} />
        <FinancialStrength />
        <Service servicesData={servicesData} loading={loading} baseUrl={IMAGE_URL} />
        <Profite profits={profits} />
        <Milestone milestoneData={milestoneData}  baseUrl={IMAGE_URL} />
        <OurPartner partners={partners} baseUrl={IMAGE_URL} /> 
        </>
    );
}

export default Home;