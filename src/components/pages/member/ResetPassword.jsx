const ResetPassword = () => {
    return(
        <div className="content-wrapper">
        <h3 className="mb-2 text-titlecase mb-4 text-primary">Reset Password</h3>

          <div className="row">
            <div className="col-xl-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body border-bottom">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h4 className="mb-2 mb-md-0 font-weight-medium text-primary">Reset Password</h4>
                  </div>
                </div>
                 <div className="card-body">
                  <div className="border-bottom pb-3 mb-1 mt-2">
                      <div className="row">
                        
                        <form action="" method="POST">
                          
                          <div className="form-group">
                            <label for="old_password">Old Password:</label>
                            <input type="password" className="form-control" id="old_password" name="old_password" placeholder="Enter old password" style={{width: "500px;"}}/>
                          </div>
                          <div className="form-group">
                            <label for="new_password">New Password:</label>
                            <input type="password" className="form-control" id="new_password" name="new_password" placeholder="Enter new password" style={{width: "100%;"}}/>
                          </div>
                          <div className="form-group">
                            <label for="confirm_password">Confirm New Password:</label>
                            <input type="password" className="form-control" id="confirm_password" name="confirm_password" placeholder="Confirm new password" style={{width: "100%;"}}/>
                          </div>
                          <button type="submit" className="btn btn-primary">Reset Password</button>
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

export default ResetPassword;