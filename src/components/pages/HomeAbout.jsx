import { useState } from 'react';
import Loader from '../../assets/images/loader.gif'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

const HomeAbout = ({ announcementData,faqData,announcementLoading,faqLoading }) => {
  
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <>
      <section className="sec-pd bg-accent about-us">
        <div className="container">
          <div className="row align-itmes-center">
            <div className="col-12 col-md-7">

              <h1 className="display-5 mb-4 section-title">
                <span className="fw-800 home_title_color">FAQs</span>
              </h1>
              {faqLoading ?  <div className='loader_div'><img className='loader_image' src={Loader} widt="50" height={50}/></div> : 
              <Accordion open={open} toggle={toggle}>
              {faqData.map((faqValue) => (
                <AccordionItem>
                  <AccordionHeader targetId={faqValue.id}>{faqValue.question}</AccordionHeader>
                  <AccordionBody accordionId={faqValue.id}>
                    {faqValue.answer}
                  </AccordionBody>
                </AccordionItem>
               ))}
            </Accordion>
              }

            </div>
            <div className="col-12 col-md-5">
              <h1 className="display-5 mb-4">
                <span className="fw-800 home_title_color section-title">Notice Board</span>
              </h1>
              <div className="news-box" style={{minHeight:'371px !important;'}}>
                {announcementLoading ? <div className='loader_div'><img className='loader_image' src={Loader} widt="50" height={50}/></div> :
                <marquee scrollamount="2" direction="up" height="250px" onmouseover="this.stop()" onmouseout="this.start()">
                  
                  {announcementData.map((data) => (
                    <p><span>&#11047;</span>{data.title}</p>
                  ))}
                </marquee>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeAbout;