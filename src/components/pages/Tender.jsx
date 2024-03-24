import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../../axios';
import Loader from '../../assets/images/loader.gif'
import { IMAGE_URL } from '../../Helpers/ImageBaseUrl';


const Tender = () => {
  const [tenderData, setTenderData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchAllTenderData();
  }, []);

  const fetchAllTenderData = () => {
    axiosClient.get('/tenders').then(res => {
      if (res.data.status == 200) {
        setTenderData(res.data.tender);
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
              <h1 className="text-white">Tender</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-pd bg-accent">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Tender</li>
            </ol>
          </nav>

          <div className='text-justify'>
            <h2 className="text-center">Tenders</h2>
          </div>
          <div className="row mt-3 bg-white py-3 px-3 border">

            <table className="table table-responsive white-space-wrap">
              <thead>
                <th>Sr No.</th>
                <th>Tender Details</th>
                <th>Department</th>
                <th>Last Date Of Physical Submission of Tender</th>
                <th>Download Tender</th>
              </thead>
              <tbody>
                {tenderData.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.department}</td>
                    <td>{item.date}</td>
                    <td><a href={`${IMAGE_URL}/${item.attachment}`} className="btn bg-blue text-white" download><i className="fa fa-file-pdf">Download</i></a></td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

        </div>
      </section>
    </>
  );
}

export default Tender;

