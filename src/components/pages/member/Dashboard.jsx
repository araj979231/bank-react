import axiosClient from '../../../axios';
import { useEffect,useState } from "react";
const Dashboard = () => {
   const [memberData,setMemberData] = useState({});
  useEffect(() => {
    fetchMemberInformation();
  },[memberData]);

  const fetchMemberInformation = () => {
    axiosClient.get('/get-member-info').then(res => {
      if(res.data.status == 200){
        setMemberData(res.data.member);
        
      }
    });
  }
  return (
    <>
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Member Information</h4>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Member Code</h5>
                        <p className="card-text">100008</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Name</h5>
                        <p className="card-text">{memberData.emp_name}</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Department</h5>
                        <p className="card-text">{memberData.emp_dept}</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Accounts</h4>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h4 className="card-title">Saving Account</h4>
                        <p className="card-text">A/C No. : 1234567889789</p>
                        <p className="card-text">Balance : 12800</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Fix Deposite Account</h5>
                        <p className="card-text">A/C No. : 1234567889789</p>
                        <p className="card-text">Balance : 100000</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Recurring Account</h5>
                        <p className="card-text">A/C No. : 1234567889789</p>
                        <p className="card-text">Balance : 100000</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Loans</h4>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h4 className="card-title">Emergency Loan</h4>
                        <p className="card-text">Balance : 5000</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Special Loan</h5>
                        <p className="card-text">Balance : 100000</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Vehicle Loan</h5>
                        <p className="card-text">Balance : 550000</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="row">
          <div className="col-xl-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body border-bottom">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <h4 className="mb-2 mb-md-0 font-weight-medium text-primary ">Saving A/C Details</h4>
                </div>
              </div>
              <div className="card-body">

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
                  <a href="" className="btn btn-primary">Previous Year Data</a>
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




      </div>
    </>
  );
}

export default Dashboard;