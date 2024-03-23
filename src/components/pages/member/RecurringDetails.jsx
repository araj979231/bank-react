import axiosClient from '../../../axios';
import { useEffect,useState } from "react";

const RecurringDetails = () => {
      const [recurringData,setRecurringData] = useState([]);
  useEffect(() => {
    fetchMemberRecurringDetails();
  },[recurringData]);

  const fetchMemberRecurringDetails = () => {
    axiosClient.get('/get-recurring-info/100008').then(res => {
      if(res.data.status == 200){
        setRecurringData(res.data.recurring);
      }
    });
  }
  console.log(recurringData);
    return(
        <div className="content-wrapper">
            <h3 className="mb-2 text-titlecase mb-4 text-primary">Recurring Details</h3>
      <div className="row">
        <div className="col-xl-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body border-bottom">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <h4 className="mb-2 mb-md-0 font-weight-medium text-primary">100008 - VISHNUBHAI HIRABHAI PRAJAPATI</h4>
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
                        <a href="http://thinkdream.in/bank/previous-data" className="btn btn-primary">Previous Year Data</a>
                  </div>
                   
                    
                    <div className="table-responsive pt-3">
                        <table className="table table-bordered2">
                            <tr className="table-primary">
                                <th>Sr No</th>
                                <th>Account Number</th>
                                <th>Date</th>
                                <th>Mat.Date</th>
                                <th>Nominee</th>
                                <th>Relation</th>
                                <th>Inst.Amt()</th>
                                <th>Int.Rt(%)</th>
                                <th>Maturity Amt()</th>
                                <th>Status</th>
                            </tr>
                            {recurringData.map((index) => (
                            <tr>
                                <td></td>
                                <td>{index.ac_no}</td>
                                <td>{index.ac_dt}</td>
                                <td>{index.due_date}</td>
                                <td>{index.nomi1}</td>
                                <td>Wife</td>
                                <td>{index.inst_amt}</td>
                                <td>{index.int_rate}</td>
                                <td>{index.mat_amt}</td>
                                <td>{index.ac_stat == 'T' ? 'Y' : ''}</td>
                            </tr>
                            ))}
                           
                        </table>
                        <div className="table-responsive">
                            <table className="table table-bordered2">
                            <tr>
                                <td><b>Member Total:</b></td>
                                <td>120000.00</td>
                                <td>120000.00 CR</td>
                            </tr>
                            </table>
                            </div>
                            
                            <div className="table-responsive pt-3">
                                <table className="table table-bordered2">
                                    <tr>
                                        <td><b>Grand Total:</b></td>
                                        <td>120000.00</td>
                                        <td>120000.00 CR</td>
                                    </tr>
                                </table>
                            </div>
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

export default RecurringDetails;