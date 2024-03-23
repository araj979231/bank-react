const IntrestCertificate = () => {
    return(
        <div className="content-wrapper">
        <h3 className="mb-2 text-titlecase mb-4 text-primary">Interest Certificate</h3>

          <div className="row">
            <div className="col-xl-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body border-bottom">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h4 className="mb-2 mb-md-0 font-weight-medium text-primary">Request Interest Certificate</h4>
                  </div>
                </div>
                 <div className="card-body">
                  <div className="border-bottom pb-3 mb-1 mt-2">
                      <div className="row">
                        
                        <button type="button" className="btn btn-primary" id="request-certificate-btn">Request Certificate</button>
                        
                      </div>
                  </div>
              </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xl-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4 font-weight-medium text-primary">Download Available Certificates</h4>
                  <ul className="list-group">
                    <li className="list-group-item">
                      Certificate 1
                      <a href="http://thinkdream.in/bank/download-certificate1" className="btn btn-success btn-sm float-right">Download</a>
                    </li>
                    <li className="list-group-item">
                      Certificate 2
                      <a href="http://thinkdream.in/bank/download-certificate2" className="btn btn-success btn-sm float-right">Download</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
}

export default IntrestCertificate;