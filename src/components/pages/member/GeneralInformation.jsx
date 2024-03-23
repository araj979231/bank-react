import axiosClient from '../../../axios';
import { useEffect,useState } from "react";
const GeneralInformation = () => {
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
  return (
    <div className="content-wrapper">
      <h3 className="mb-2 text-titlecase mb-4 text-primary">General Information</h3>
      <div className="row">
        <div className="col-xl-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body border-bottom">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <h4 className="mb-2 mb-md-0 font-weight-medium text-primary">Member Information</h4>
              </div>
            </div>
            <div className="card-body">
              <div className="border-bottom pb-3 mb-1 mt-2">
                <div className="row">
                  <div className="col-md-3 col-12 mb-3">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <h5 className="text-grey">Member Code</h5>
                      <h5 className="text-center">100008</h5>
                    </div>
                  </div>
                  <div className="col-md-3 col-12 mb-3">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <h5 className="text-grey">Name</h5>
                      <h5 className="text-center">{memberData.emp_name}</h5>
                    </div>
                  </div>
                  <div className="col-md-3 col-12 mb-3">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <h5 className="text-grey">Nominee</h5>
                      <h5 className="text-center">{memberData.nominee1}</h5>
                    </div>
                  </div>
                  <div className="col-md-3 col-12 mb-3">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <h5 className="text-grey">PAN No.</h5>
                      <h5 className="text-center">{memberData.pan_no}</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-bottom pb-3 mb-1 mt-2">
                <div className="row">
                  <div className="col-md-3 col-12 mb-3">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <h5 className="text-grey">Designation</h5>
                      <h5 className="text-center">{memberData.emp_desig}</h5>
                    </div>
                  </div>
                  <div className="col-md-3 col-12 mb-3">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <h5 className="text-grey">Department</h5>
                      <h5 className="text-center">{memberData.emp_dept}</h5>
                    </div>
                  </div>
                  <div className="col-md-3 col-12 mb-3">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <h5 className="text-grey">Joining Date</h5>
                      <h5 className="text-center">{memberData.emp_joindt}</h5>
                    </div>
                  </div>
                  <div className="col-md-3 col-12 mb-3">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <h5 className="text-grey">Retirement Date</h5>
                      <h5 className="text-center">{memberData.emp_retird}</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-bottom pb-3 mb-1 mt-2">
                <div className="row">
                  <div className="col-md-3 col-12 mb-3">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <h5 className="text-grey">Birthdate</h5>
                      <h5 className="text-center">{memberData.emp_birthd}</h5>
                    </div>
                  </div>
                  <div className="col-md-3 col-12 mb-3">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <h5 className="text-grey">Bank Account</h5>
                      <h5 className="text-center">Bank Account Bank Account </h5>
                    </div>
                  </div>
                  <div className="col-md-3 col-12 mb-3">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <h5 className="text-grey">Mobile No.</h5>
                      <h5 className="text-center">9879965058</h5>
                    </div>
                  </div>
                  <div className="col-md-3 col-12 mb-3">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <h5 className="text-grey">Bank</h5>
                      <h5 className="text-center">Bank</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body border-bottom">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <h4 className="mb-2 mb-md-0 font-weight-medium text-primary">Address</h4>
              </div>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-md-4 col-sm-12 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">Home</h5>
                    <h5 className="text-center">{memberData.emp_home1}{memberData.emp_home2}</h5>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">Address</h5>
                    <h5 className="text-center">{memberData.emp_add1}{memberData.emp_add2}</h5>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-grey">Pin-code</h5>
                    <h5 className="text-center">{memberData.emp_pin}</h5>
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

export default GeneralInformation;