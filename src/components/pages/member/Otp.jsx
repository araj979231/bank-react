import { useNavigate } from "react-router-dom";


const Otp = () => {
  const navigate = useNavigate();
  const verifyOtp= () => {
    navigate('/member/dashboard');
  }
    
    return(
      <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth px-0">
          <div class="row w-100 mx-0">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-center py-5 px-4 px-sm-5">
                <div class="brand-logo">
                <img src="http://thinkdream.in/bank/public/logo.jpeg" alt="logo"/>
                </div>
                <h4>Welcome To 'SNCS'</h4>
                <h6 class="font-weight-light">Please Enter Your OTP Here</h6>
                <form class="pt-3">
                  <div class="form-group">
                      <input class="otp" type="text" maxlength="1" />&nbsp;
                      <input class="otp" type="text" maxlength="1" />&nbsp;
                      <input class="otp" type="text" maxlength="1" />&nbsp;
                      <input class="otp" type="text" maxlength="1" />&nbsp;
                      <input class="otp" type="text" maxlength="1" />&nbsp;
                      <input class="otp" type="text" maxlength="1" />&nbsp;
                  </div>
                </form>
                <div class="form-group">
                  <a onClick={verifyOtp} class='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'>Verify</a>
                </div>
                <a href="" style={{color: "#844fc1;"}}><h6 class="font-weight-light">RESEND OTP</h6></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Otp;