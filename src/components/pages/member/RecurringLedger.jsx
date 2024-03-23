const RecurringLedger = () => {
    return(
        <div className="content-wrapper">
            <h3 className="mb-2 text-titlecase mb-4 text-primary">Recurring ledger</h3>
      <div className="row">
        <div className="col-xl-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body border-bottom">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <h4 className="mb-2 mb-md-0 font-weight-medium text-primary">Member Details</h4>
                </div>
              </div>
              <div className="card-body">
                <div className="row pb-3 mb-1 mt-2">
                    <div className="col-md-6 col-sm-6 mb-3">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h5 className="text-grey">Member Code</h5>
                            <h5 className="text-center">100008</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 mb-3">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h5 className="text-grey">Name</h5>
                            <h5 className="text-center">VISHNUBHAI HIRABHAI PRAJAPATI</h5>
                        </div>
                    </div>
                   
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h4 className="mb-2 mt-3 mb-md-0 font-weight-medium text-primary">Recurring Deposite Ledger Info</h4>
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
                  </div>
                    <div className="table-responsive pt-3">
                        <table className="table table-bordered2">
                            <tr className="table-primary">
                                <th>Voucher Date</th>
                                <th>Voucher Number</th>
                                <th>Credit Amount</th>
                                <th>Debit Amount</th>
                                <th>Closing Balance</th>
                            </tr>

                            <tr>
                                <td>04/12/2018</td>
                                <td>RR01424</td>
                                <td>10000.00</td>
                                <td></td>
                                <td>10000.00 CR</td>
                            </tr>
                            <tr>
                                <td>01/01/2019</td>
                                <td>TR/01/01</td>
                                <td>10000.00</td>
                                <td></td>
                                <td>20000.00 CR</td>
                            </tr>
                            <tr>
                                <td>01/02/2019</td>
                                <td>TR/01/02</td>
                                <td>10000.00</td>
                                <td></td>
                                <td>30000.00 CR</td>
                            </tr>
                            <tr>
                                <td>01/03/2019</td>
                                <td>TR/01/03</td>
                                <td>10000.00</td>
                                <td></td>
                                <td>40000.00 CR</td>
                            </tr>
                            <tr>
                                <td>01/04/2019</td>
                                <td>TR/01/04</td>
                                <td>10000.00</td>
                                <td></td>
                                <td>50000.00 CR</td>
                            </tr>
                            <tr>
                                <td>01/05/2019</td>
                                <td>TR/01/05</td>
                                <td>10000.00</td>
                                <td></td>
                                <td>60000.00 CR</td>
                            </tr>
                            <tr>
                                <td>01/06/2019</td>
                                <td>TR/01/06</td>
                                <td>10000.00</td>
                                <td></td>
                                <td>70000.00 CR</td>
                            </tr>
                            <tr>
                                <td>01/07/2019</td>
                                <td>TR/01/07</td>
                                <td>10000.00</td>
                                <td></td>
                                <td>80000.00 CR</td>
                            </tr>
                            <tr>
                                <td>01/08/2019</td>
                                <td>TR/01/08</td>
                                <td>10000.00</td>
                                <td></td>
                                <td>90000.00 CR</td>
                            </tr>
                            <tr>
                                <td>03/09/2019</td>
                                <td>TR/01/09</td>
                                <td>10000.00</td>
                                <td></td>
                                <td>100000.00 CR</td>
                            </tr>
                            <tr>
                                <td>01/10/2019</td>
                                <td>TR/01/10</td>
                                <td>10000.00</td>
                                <td></td>
                                <td>110000.00 CR</td>
                            </tr>
                            <tr>
                                <td>01/11/2019</td>
                                <td>TR/01/11</td>
                                <td>10000.00</td>
                                <td></td>
                                <td>120000.00 CR</td>
                            </tr>
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

export default RecurringLedger;