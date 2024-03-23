import axiosClient from '../../../axios';
import { useEffect,useState } from "react";
const SavingDetails = () => {
const [savingDetail,setSavingDetail] = useState([]);
  useEffect(() => {
    fetchSavingDetails();
  },[savingDetail]);

  const fetchSavingDetails = () => {
    axiosClient.get('/saving-account-detail/100008').then(res => {
      if(res.data.status == 200){
        setSavingDetail(res.data.savingDetail);
      }
    });
  } 

  return (
    <div className="content-wrapper">


      <h3 className="mb-2 text-titlecase mb-4 text-primary">Saving A/C Information</h3>

      <div className="row">
        <div className="col-xl-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body border-bottom">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <h4 className="mb-2 mb-md-0 font-weight-medium text-primary ">Saving A/C Details</h4>
              </div>
            </div>
            <div className="card-body">
              <div className="row pb-3 mb-1 mt-2">
                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">A/C Name (1)</h5>
                    <h5 className="text-center">{savingDetail.ac_name}</h5>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">A/C Name (2)</h5>
                    <h5 className="text-center">{savingDetail.ac_name2}</h5>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">Saving A/C no.</h5>
                    <h5 className="text-center">{savingDetail.ac_no}</h5>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">Saving A/C Date</h5>
                    <h5 className="text-center">{savingDetail.ac_dt}</h5>
                  </div>
                </div>

              </div>



              <div className="row pb-3 mb-1 mt-2">
                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">Nominee 1</h5>
                    <h5 className="text-center">{savingDetail.nomi1}</h5>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">Relation</h5>
                    <h5 className="text-center">{savingDetail.rela1}</h5>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">Nominee 2</h5>
                    <h5 className="text-center">{savingDetail.nomi2}</h5>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">Address</h5>
                    <h5 className="text-center">{savingDetail.emp_add1}{savingDetail.emp_add2}{savingDetail.emp_city}</h5>
                  </div>
                </div>
              </div>


              <div className="row pb-3 mb-1 mt-2">
                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">A/C Type</h5>
                    <h5 className="text-center">{savingDetail.ac_type}</h5>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">Operated By:</h5>
                    <h5 className="text-center">{savingDetail.acop_by}</h5>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">Termin. Date</h5>
                    <h5 className="text-center">{savingDetail.termi_dt}</h5>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">Termi. Check</h5>
                    <h5 className="text-center">{savingDetail.termi_chk}</h5>
                  </div>
                </div>

              </div>



              <div className="border-bottom row pb-3 mb-1 mt-2">


                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">Account Status</h5>
                    <h5 className="text-center">{savingDetail.ac_stat}</h5>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">(Stop/Terminated/Defaulter)</h5>
                    <h5 className="text-center">-</h5>
                  </div>
                </div>
              </div>


              <div className="d-flex justify-content-between align-items-center flex-wrap">

                <div className="row pb-3 mb-1 mt-2">
                  <div className="col-md-6 col-sm-6 mb-3">
                    <label for="fromDate" className="form-label">From Date</label>
                    <input type="date" className="form-control" id="fromDate" placeholder="Select From Date"/>
                  </div>
                  <div className="col-md-6 col-sm-6 mb-3">
                    <label for="toDate" className="form-label">To Date</label>
                    <input type="date" className="form-control" id="toDate" placeholder="Select To Date"/>
                  </div>
                </div>
                <a href="http://thinkdream.in/bank/previous-data" className="btn btn-primary">Previous Year Data</a>
              </div>
              <div className="table-responsive pt-3">
                <table className="table table-bordered2">
                  <tr className="table-primary">
                    <th>SrNo</th>
                    <th>A/c No</th>
                    <th>Date</th>
                    <th>Dep. Period (Month)</th>
                    <th>Amount (₹)</th>
                    <th>Mat. Amount (₹)</th>
                    <th>Int. Amount (₹)</th>
                    <th>Mat. Date</th>
                    <th>Nominee</th>
                    <th>Relation</th>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>000851</td>
                    <td>07-06-2022</td>
                    <td>12</td>
                    <td>6500.00</td>
                    <td>6955.00</td>
                    <td>455.00</td>
                    <td>07-06-2023</td>
                    <td>RAHI V PRAJAPATI</td>
                    <td><span>Son/Daughter</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>000561</td>
                    <td>16-11-2021</td>
                    <td>3</td>
                    <td>100000.00</td>
                    <td>101500.00</td>
                    <td>1500.00</td>
                    <td>16-02-2022</td>
                    <td>MEENA V PRAJAPATI</td>
                    <td><span>Wife</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>000430</td>
                    <td>03-06-2021</td>
                    <td>12</td>
                    <td>25000.00</td>
                    <td>26750.00</td>
                    <td>1750.00</td>
                    <td>03-06-2022</td>
                    <td>MEENA V PRAJAPATI -</td>
                    <td><span>Wife</span></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>000431</td>
                    <td>03-06-2021</td>
                    <td>12</td>
                    <td>35000.00</td>
                    <td>37450.00</td>
                    <td>2450.00</td>
                    <td>03-06-2022</td>
                    <td>MEENA V PRAJAPATI -</td>
                    <td><span>Wife</span></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>000428</td>
                    <td>03-06-2021</td>
                    <td>6</td>
                    <td>35000.00</td>
                    <td>36138.00</td>
                    <td>1138.00</td>
                    <td>03-12-2021</td>
                    <td>MEENA V PRAJAPATI -</td>
                    <td><span>Wife</span></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>000429</td>
                    <td>03-06-2021</td>
                    <td>12</td>
                    <td>25000.00</td>
                    <td>26750.00</td>
                    <td>1750.00</td>
                    <td>03-06-2022</td>
                    <td>MEENA V PRAJAPATI -</td>
                    <td><span>Wife</span></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>000042</td>
                    <td>06-11-2019</td>
                    <td>6</td>
                    <td>5500.00</td>
                    <td>5679.00</td>
                    <td>179.00</td>
                    <td>06-05-2020</td>
                    <td>RAHI V PRAJAPATI -</td>
                    <td><span>Son/Daughter</span></td>
                  </tr>
                </table>
              </div>


            </div>
          </div>
        </div>

      </div>
      <div className="mt-4 mb-2 text-center">
        <button onclick="window.print()" className="btn btn-primary mr-2">Print</button>
        <button onclick="shareContent()" className="btn btn-secondary">Share</button>
      </div>

    </div>
  );
}

export default SavingDetails;