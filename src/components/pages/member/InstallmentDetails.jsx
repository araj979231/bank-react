import axiosClient from '../../../axios';
import { useEffect,useState } from "react";
const InstallmentDetails = () => {
     const [installmentDetail,setInstallmentDetail] = useState([]);
  useEffect(() => {
    fetchInstallmentDetails();
  },[installmentDetail]);

  const fetchInstallmentDetails = () => {
    axiosClient.get('/get-installment-detail/100008').then(res => {
      if(res.data.status == 200){
        setInstallmentDetail(res.data.loan);
      }
    });
  }
  console.log('installmentDetail Data',installmentDetail);
    return(
        <div className="content-wrapper">
            <h3 className="mb-2 text-titlecase mb-4 text-primary">Installment Details</h3>
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
                            <td><h5>Installment Details</h5></td>
                            <td><h5>Installment amount</h5></td>
                            <td><h5>Loan Given</h5></td>
                            <td><h5>Date</h5></td>
                            <td><h5>Number</h5></td>
                            <td><h5>Loan Amount</h5></td>
                            <td><h5>Reason</h5></td>
                        </tr>
                        {installmentDetail.map((index) => (
                        <tr>
                            <td><h5>Reg. Loan Inst.</h5></td>
                            <td><h5 className="text-grey">{index.inst_amt}</h5></td>
                            <td><h5>Reg. Loan Date</h5></td>
                            <td><h5 className="text-grey">{index.vou_date}</h5></td>
                            <td><h5 className="text-grey">{index.appli_no}</h5></td>
                            <td><h5 className="text-grey">{index.loan_amt}</h5></td>
                            <td><h5 className="text-grey">{index.remark}</h5></td>
                        </tr>
                        ))}
                       
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

export default InstallmentDetails;