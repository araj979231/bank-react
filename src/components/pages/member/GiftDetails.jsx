const GiftDetails = () => {
    return(
        <div classname="content-wrapper">
        <h3 classname="mb-2 text-titlecase mb-4 text-primary font-weight-medium">Gift Details</h3>

        <div classname="row mt-4">
          <div classname="col-xl-12 grid-margin stretch-card">
            <div classname="card">
              <div classname="card-body">
                <h4 classname="card-title mb-4 font-weight-medium text-primary">Upcoming Gifts</h4>
                <div classname="row">
                  <div classname="col-md-4 mb-3">
                    <div classname="card">
                      <img src="public/images/Gift_Card_900x.jpg" classname="card-img-top" alt="Upcoming Gift 1"/>
                      <div classname="card-body">
                        <h5 classname="card-title">Upcoming Gifts 1</h5>
                      </div>
                    </div>
                  </div>
                  <div classname="col-md-4 mb-3">
                    <div classname="card">
                      <img src="public/images/Gift_Card_900x.jpg" classname="card-img-top" alt="Upcoming Gift 2"/>
                      <div classname="card-body">
                        <h5 classname="card-title">Upcoming Gift 2</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div classname="row mt-4">
          <div classname="col-xl-12 grid-margin stretch-card">
            <div classname="card">
              <div classname="card-body">
                <h4 classname="card-title mb-4 font-weight-medium text-primary">Received Gifts</h4>
                <div classname="row">
                  <div classname="col-md-4 mb-3">
                    <div classname="card">
                      <img src="public/images/Gift_Card_900x.jpg" classname="card-img-top" alt=" Received Gift 1"/>
                      <div classname="card-body">
                        <h5 classname="card-title">Received Gift 1</h5>
                      </div>
                    </div>
                  </div>
                  <div classname="col-md-4 mb-3">
                    <div classname="card">
                      <img src="public/images/Gift_Card_900x.jpg" classname="card-img-top" alt="Received Gift 2"/>
                      <div classname="card-body">
                        <h5 classname="card-title">Received Gift 2</h5>
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

export default GiftDetails;