import axiosClient from '../../../axios';
import { useEffect,useState } from "react";

const LoanLedger = () => {
 const [savingledger,setSavingledger] = useState([]);
  useEffect(() => {
    fetchSavingLedgerData();
  },[savingledger]);

  const fetchSavingLedgerData = () => {
    axiosClient.get('/get-recurring-info/100008').then(res => {
      if(res.data.status == 200){
        setSavingledger(res.data.recurring);
      }
    });
  }
    return(
        <div className="content-wrapper">
        <h3 className="mb-2 text-titlecase mb-4 text-primary">Loan ledger</h3>
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
                        <th>Voucher Date</th>
                        <th>Voucher Number</th>
                        <th>Thrift Fund Credit</th>
                        <th>Thrift Fund Balance</th>
                        <th>Loan-1 Debit</th>
                        <th>Loan-1 Credit</th>
                        <th>Loan-1 Balance</th>
                        <th>Emergency Loan Debit</th>
                        <th>Emergency Loan Credit</th>
                        <th>Emergency Loan Balance</th>
                        <th>Special Loan Debit</th>
                        <th>Special Loan Credit</th>
                        <th>Special Loan Balance</th>
                        <th>Special Reccuring</th>
                        <th>Share</th>
                        <th>Death Fund</th>
                        <th>Retirement Fund</th>
                        <th>Penalty Amount</th>
                        <th>Grand Total</th>
                    </tr>
                    <tr>
                        <td>01/04/2023</td>
                        <td>OP</td>
                        <td></td>
                        <td></td>
                        <td>191500</td>
                        <td></td>
                        <td>191500 DB</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>100</td>
                        <td></td>
                        <td></td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>01/05/2023</td>
                        <td>DR00041</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>8500</td>
                        <td>183000 DB</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>10080</td>
                    </tr>
                    <tr>
                        <td>01/06/2023</td>
                        <td>DR00082</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>8500</td>
                        <td>174500 DB</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>10010</td>
                    </tr>
                    <tr>
                        <td>01/07/2023</td>
                        <td>DR00123</td>
                        <td>500</td>
                        <td>500</td>
                        <td></td>
                        <td>8500</td>
                        <td>166000 DB</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>10440</td>
                    </tr>
                    <tr>
                        <td>01/08/2023</td>
                        <td>DR00165</td>
                        <td>500</td>
                        <td>1000</td>
                        <td></td>
                        <td>8500</td>
                        <td>157500 DB</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>10370</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
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

export default LoanLedger;