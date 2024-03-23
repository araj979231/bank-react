import axiosClient from '../../../axios';
import { useEffect,useState } from "react";
const BalanceDetails = () => {
   const [balanceDetail,setBalanceDetail] = useState([]);
  useEffect(() => {
    fetchBalanceDetails();
  },[balanceDetail]);

  const fetchBalanceDetails = () => {
    axiosClient.get('/get-balance-info/100008').then(res => {
      if(res.data.status == 200){
        setBalanceDetail(res.data.loanDetail);
      }
    });
  }
  console.log(balanceDetail);
    return(
      <div className="content-wrapper">
      <h3 className="mb-2 text-titlecase mb-4 text-primary">Opening Balance Details</h3>
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
              <h4 className="mb-2 mt-3 mb-md-0 font-weight-medium text-primary">Balance Info</h4>
            </div>
              <div className="table-responsive pt-3">

              <table className="table table-bordered2">
                   <tr className="table-primary">
                      <td><h5>Description</h5></td>
                      <td><h5>Opening Balance-01/04/2023</h5></td>
                      <td><h5>Closing Balance </h5></td>
                  </tr>
                  
                  <tr>
                      <td><h5>Regular Loan Balance</h5></td>
                      <td><h5 className="text-grey">  <span id="rinst">503000.00</span>  </h5></td>
                      <td><h5 className="text-grey"> <span id="clrinst">12000.00</span> </h5></td>   
                  </tr>
                  <tr>
                      <td><h5>Emergency balance</h5></td>
                      <td><h5 className="text-grey"> <span id="einst">0.00</span></h5></td>
                      <td><h5 className="text-grey"> <span id="cleinst">0.00</span></h5></td>  
                  </tr>
                  <tr>
                     <td><h5>Special Balance</h5></td>
                     <td><h5 className="text-grey"><span id="sinst">0.00</span>    </h5></td>
                     <td><h5 className="text-grey"><span id="clsinst">0.00</span>    </h5></td>  
                   </tr>
                   <tr>
                     <td><h5>Thrift Fund </h5></td>
                     <td><h5 className="text-grey"> <span id="tinst">0.00</span></h5></td>
                     <td><h5 className="text-grey"> <span id="cltinst">500.00</span></h5></td>  
                   </tr>
                   <tr> 
                     <td><h5>Share Fund </h5></td>
                     <td><h5 className="text-grey"><span id="shinst">0.00</span></h5></td>
                     <td><h5 className="text-grey"><span id="clshinst">0.00</span></h5></td>
                   </tr>
                   <tr>
                     <td><h5>Special Recurring </h5></td>
                     <td><h5 className="text-grey"><span id="spinst">0.00</span></h5></td>
                     <td><h5 className="text-grey"><span id="clspinst">0.00</span></h5></td> 
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
export default BalanceDetails;