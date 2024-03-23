const RequestGift = () => {
    return(
        <div className="content-wrapper">
        <h3 className="mb-2 text-titlecase mb-4 text-primary">Request Gifts</h3>

          <div className="row">
            <div className="col-xl-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body border-bottom">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h4 className="mb-2 mb-md-0 font-weight-medium text-primary">Please Select Any One Gift </h4>
                  </div>
                </div>
                 <div className="card-body">
                  <div className="border-bottom pb-3 mb-1 mt-2">
                      <div className="row">
                          
                       
                        
                        <div className="col-md-4">
                            <div className="card gift-card" id="gift1">
                                <img src="public/images/Gift_Card_900x.jpg" className="card-img-top" alt="Gift Image"/>
                                <div className="card-body">
                                    <h5 className="card-title">Gift Name 1</h5>
                                    <p className="card-text">Description of the gift goes here.</p>
                                    <a href="#" className="btn btn-primary select-btn">Select</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card gift-card" id="gift2">
                                <img src="public/images/Gift_Card_900x.jpg" className="card-img-top" alt="Gift Image"/>
                                <div className="card-body">
                                    <h5 className="card-title">Gift Name 2</h5>
                                    <p className="card-text">Description of the gift goes here.</p>
                                    <a href="#" className="btn btn-primary select-btn">Select</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card gift-card" id="gift3">
                                <img src="public/images/Gift_Card_900x.jpg" className="card-img-top" alt="Gift Image"/>
                                <div className="card-body">
                                    <h5 className="card-title">Gift Name 3</h5>
                                    <p className="card-text">Description of the gift goes here.</p>
                                    <a href="#" className="btn btn-primary select-btn">Select</a>
                                </div>
                            </div>
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

export default RequestGift;