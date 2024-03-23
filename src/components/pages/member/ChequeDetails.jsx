import axiosClient from '../../../axios';
import { useEffect,useState } from "react";

const ChequeDetails = () => {
    const [chequeDetail,setChequeDetails] = useState([]);
  useEffect(() => {
    fetchChequeDetailsData();
  },[chequeDetail]);

  const fetchChequeDetailsData = () => {
    axiosClient.get('/get-cheque-details/100008').then(res => {
      if(res.data.status == 200){
        setChequeDetails(res.data.chequeDetail);
      }
    });
  }
  console.log(chequeDetail);
    return (
        <div className="content-wrapper">
            <h3 className="mb-2 text-titlecase mb-4 text-primary">Cheque Details</h3>
            <div className="row">

                <div className="col-xl-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body border-bottom">
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <h4 className="mb-2 mb-md-0 font-weight-medium text-primary">{chequeDetail.emp_no} - VISHNUBHAI HIRABHAI PRAJAPATI</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row pb-3 mb-1 mt-2">
                                <div className="col-md-3 col-sm-6 mb-3">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="text-grey">Voucher No.</h5>
                                        <h5 className="text-center">{chequeDetail.vou_num}</h5>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-3">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="text-grey">Bank Name</h5>
                                        <h5 className="text-center">{chequeDetail.membnk_nm}</h5>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-3">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="text-grey">Branch Name</h5>
                                        <h5 className="text-center">{chequeDetail.membr_nm}</h5>
                                    </div>
                                </div>




                                <div className="col-md-3">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="text-grey">Cheque No. 1</h5>
                                        <h5 className="text-center">{chequeDetail.memchq_no1}</h5>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="text-grey">Cheque No. 2</h5>
                                        <h5 className="text-center">{chequeDetail.memchq_no2}</h5>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="text-grey">Cheque No. 3</h5>
                                        <h5 className="text-center">{chequeDetail.memchq_no3}</h5>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="text-grey">Cheque No. 4</h5>
                                        <h5 className="text-center">{chequeDetail.memchq_no4}</h5>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="text-grey">Cheque No. 5</h5>
                                        <h5 className="text-center">{chequeDetail.memchq_no5}</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ChequeDetails;