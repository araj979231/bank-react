import axiosClient from "../axios";
import MemberSidebar from "./MemberSidebar";
import { useEffect,useState } from "react";

const MemberHeader = () => {
    const [memberData,setMemberData] = useState({});
  useEffect(() => {
    fetchMemberInformation();
  },[memberData]);

  const fetchMemberInformation = () => {
    axiosClient.get('/get-member-info').then(res => {
      if(res.data.status == 200){
        setMemberData(res.data.member);
        
      }
    });
  }
 
    return(
        <>
            
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex justify-content-center">
                <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                <a className="navbar-brand brand-logo" href=""><img src="http://thinkdream.in/bank/public/logo.jpeg" alt="logo" style={{borderRadius: "50%;",height: "50px;", width: "50px;" }} /></a>
                <a className="navbar-brand brand-logo-mini" href=""><img src="http://thinkdream.in/bank/public/logo.jpeg" alt="logo" style={{borderRadius: "50%;",height: "50px;", width: "50px;" }} /></a>
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                <i class="fa-solid fa-bars"></i>
                </button>
                </div>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <ul className="navbar-nav mr-lg-2">
                <li className="nav-item nav-profile dropdown">
                    <a className="nav-link" href="#" data-toggle="dropdown" id="profileDropdown">
                    
                    <span className="nav-profile-name">{memberData.emp_name}</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                    <a className="dropdown-item">
                        <i className="typcn typcn-cog-outline text-primary"></i>
                        Settings
                    </a>
                    <a className="dropdown-item">
                        <i className="typcn typcn-eject text-primary"></i>
                        Logout
                    </a>
                    </div>
                </li>
                <li className="nav-item nav-user-status dropdown">
                    <p className="mb-0">Last login was 23 hours ago.</p>
                </li>
                </ul>
                <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item nav-date dropdown">
                    <a className="nav-link d-flex justify-content-center align-items-center" href="javascript:;">
                    <h6 className="date mb-0">Today : Mar 23</h6>
                    <i className="typcn typcn-calendar"></i>
                    </a>
                </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span className="typcn typcn-th-menu"></span>
                </button>
            </div>
            </nav>
            
        </>
    );
}

export default MemberHeader;