const LoanInstallment = () => {
    return(
        <div className="content-wrapper">
            <h3 className="mb-2 text-titlecase mb-4 text-primary">Loan Installment Details</h3>
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
                            <td><h5>Installment (STA)</h5></td>
                            <td><h5>-</h5></td>
                            <td><h5>-</h5></td>
                            <td><h5>-</h5></td>
                            <td><h5>Installment Recd. (RTA)</h5></td>
                            <td><h5>-</h5></td>
                            <td><h5>-</h5></td>
                            <td><h5>-</h5></td>
                        </tr>
                        <tr>
                            <td><h5>Rec. Inst</h5></td>
                            <td><h5>-<span></span></h5></td>
                            <td><h5>Intr.</h5></td>
                            <td><h5>-<span></span></h5></td>
                            <td><h5>Reg. Inst</h5></td>
                            <td><h5>-<span></span></h5></td>
                            <td><h5>Intr.</h5></td>
                            <td><h5>-<span></span></h5></td>
                        </tr>
                        <tr>
                            <td><h5>Eme. Inst.</h5></td>
                            <td><h5><span>-</span></h5></td>
                            <td><h5>Intr.</h5></td>
                            <td><h5><span>-</span></h5></td>
                            <td><h5>Eme. Inst.</h5></td>
                            <td><h5><span>-</span></h5></td>
                            <td><h5>Intr.</h5></td>
                            <td><h5><span>-</span></h5></td>
                        </tr>
                        <tr>
                            <td><h5>Spl. Inst.</h5></td>
                            <td><h5> <span>-</span></h5></td>
                            <td><h5> Intr.</h5></td>
                            <td><h5> <span>-</span></h5></td>
                            <td><h5> Spl. Inst.</h5></td>
                            <td><h5> <span>-</span></h5></td>
                            <td><h5> Intr.</h5></td>
                            <td><h5> <span>-</span></h5></td>
                        </tr>
                        <tr>
                            <td><h5>Thrift Fund</h5></td>
                            <td><h5> <span>-</span></h5></td>
                            <td><h5> Ret. Fund</h5></td>
                            <td><h5> <span>-</span></h5></td>
                            <td><h5> Thrift Fund</h5></td>
                            <td><h5> <span>-</span></h5></td>
                            <td><h5> Ret. Fund</h5></td>
                            <td><h5> <span>-</span></h5></td>
                        </tr>
                        <tr>
                            <td><h5>Death Fd.</h5></td>
                            <td><h5> <span>-</span></h5></td>
                            <td><h5> Penalty</h5></td>
                            <td><h5> <span>-</span></h5></td>
                            <td><h5> Death Fund</h5></td>
                            <td><h5> <span>-</span></h5></td>
                            <td><h5> Penalty</h5></td>
                            <td><h5> <span>-</span></h5></td>
                        </tr>
                        <tr>
                            <td><h5>Sp. Rec. Inst</h5></td>
                            <td><h5> <span>-</span></h5></td>
                            <td><h5><strong>Total</strong></h5></td>
                            <td><h5><strong>-<span></span></strong></h5></td>
                            <td><h5>Sp. Rec. Inst</h5></td>
                            <td><h5> <span>-</span></h5></td>
                            <td><h5><strong>Total</strong></h5></td>
                            <td><h5><strong> <span>-</span></strong></h5></td>
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
export default LoanInstallment;