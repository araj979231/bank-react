import '../../assets/member/css/typicons.css';
import '../../assets/member/css/vendor.bundle.base.css';
import '../../assets/member/css/font-awesome.min.css';
import '../../assets/member/css/materialdesignicons.min.css';
import '../../assets/member/css/style.css';
import { useNavigate } from 'react-router-dom';
import Otp from './member/Otp';

const LoginMember = () => {
    const navigate = useNavigate();
    const handleDashboardPage = () => {  
        navigate('/otp');
    }

    return(
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                    <div className="col-lg-4 mx-auto">
                        <div className="auth-form-light text-center py-5 px-4 px-sm-5">
                        <div className="brand-logo">
                            <img src="http://thinkdream.in/bank/public/logo.jpeg" alt="logo"/>
                        </div>
                        <h4>Welcome To 'SNCS'</h4>
                        <h6 className="font-weight-light">Please Sign in to continue.</h6>
                        <form className="pt-3">
                            <div className="form-group text-center">
                            <input type="text" className="form-control form-control-lg text-center" id="" placeholder="Member ID"/>
                            </div>
                            <div className="form-group">
                            <input type="password" className="form-control form-control-lg text-center" id="" placeholder="Password"/>
                            </div>
                            <div className="mt-3">
                            <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" style={{ backgroundColor:'#844fc1 !important',borderColor:'#844fc1 !important' }} onClick={handleDashboardPage} >SIGN IN</a>
                            </div>
                            <div className="my-2 d-flex justify-content-between align-items-center">
                            <div className="form-check">
                                <label className="form-check-label text-muted">
                                <input type="checkbox" className="form-check-input"/>
                                Keep me signed in
                                </label>
                            </div>
                            <a href="#" className="auth-link text-black">Forgot password?</a>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default LoginMember;