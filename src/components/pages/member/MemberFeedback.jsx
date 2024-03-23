const MemberFeedback = () => {
    return(
        <div class="content-wrapper">
        <h3 class="mb-2 text-titlecase mb-4 text-primary">Feedback</h3>

          <div class="row">
            <div class="col-xl-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body border-bottom">
                  <div class="d-flex justify-content-between align-items-center flex-wrap">
                    <h4 class="mb-2 mb-md-0 font-weight-medium text-primary">We'd Love to Hear From You!</h4>
                  </div>
                </div>
                 <div class="card-body">
                  <div class="border-bottom pb-3 mb-1 mt-2">
                      <div class="row">
                        
                        <form action="" method="POST">
                         
                          <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" style={{width: "600px;"}}/>
                          </div>
                          <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" style={{width: "600px;"}}/>
                          </div>
                          <div class="form-group">
                            <label for="name">Subject:</label>
                            <input type="text" class="form-control" id="subject" name="subject" placeholder="Enter your subject" style={{width: "600px;"}}/>
                          </div>
                          <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea class="form-control" id="message" name="message" rows="5" placeholder="Enter your message" style={{width: "600px;"}}/>
                          </div>
                          <button type="submit" class="btn btn-primary">Submit Feedback</button>
                        </form>
                        
                      </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>

    );
}

export default MemberFeedback;