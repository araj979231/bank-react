import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axios";
import Swal from 'sweetalert2'
const HowToJoinNew = () => {

    
    const [memberInput,setMemberInput] = useState({
        first_name : '',
        middle_name : '',
        last_name : '',
        address : '',
        city: '',
        pin_code : '',
        email : '',
        department: '',
        designation: '',
        date_of_birth : '',
        date_of_retirement : '',
        aadhar_card : '',
        pan_card : '',
        hrms_id_number: '',
        hometown_address : '',
        home_city: '',
        qualification : '',
        whatsapp_number : '',
        mobile_number : '',
        office_phone : '',
        nominee_one : '',
        nominee_two : '',
        member_bank_name : '',
        member_account_number : '',
        ifsc_code : '',
        photo : '',
        member_photo : '',
        signature_one : '',
        signature_two : '',
        error_list:[]
    });

    const handleInput = (e) => {
        e.preventDefault();
        setMemberInput({...memberInput,[e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            first_name : memberInput.first_name,
            middle_name : memberInput.middle_name,
            last_name : memberInput.last_name,
            address : memberInput.address,
            city: memberInput.city,
            pin_code : memberInput.pin_code,
            email : memberInput.email,
            department: memberInput.department,
            designation: memberInput.designation,
            date_of_birth : memberInput.date_of_birth,
            date_of_retirement : memberInput.date_of_retirement,
            aadhar_card : memberInput.aadhar_card,
            pan_card : memberInput.pan_card,
            hrms_id_number: memberInput.hrms_id_number,
            hometown_address : memberInput.hometown_address,
            home_city: memberInput.home_city,
            qualification : memberInput.qualification,
            whatsapp_number : memberInput.whatsapp_number,
            mobile_number : memberInput.mobile_number,
            office_phone : memberInput.office_phone,
            nominee_one : memberInput.nominee_one,
            nominee_two : memberInput.nominee_two,
            member_bank_name : memberInput.member_bank_name,
            member_account_number : memberInput.member_account_number,
            ifsc_code : memberInput.ifsc_code,
            photo : memberInput.photo,
            member_photo : memberInput.member_photo,
            signature_one : memberInput.signature_one,
            signature_two : memberInput.signature_two,
        }

        axiosClient.post("/save-how-to-join-us-member",data).then(res => {
            if(res.data.status === 200){
                Swal.fire('Member Save Successfully!', '', 'success');
            }else if(res.data.status === 400){
                setMemberInput({...memberInput, error_list:res.data.errors});
            }
        });
    }
    return(
        <>
        <section className="page-banner set-bank-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white">How to join as member</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-pd bg-accent">
                <div className="container">
                <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">How to join as member</li>
                        </ol>
                    </nav>
                    <div className="row mt-4 border rounded py-4 px-4 bg-white">
                        <div className="col-lg-12">
                            <h2 className="mb-3">Lorem Ipsum</h2>
                            <p className="mb-2">There is a very big need of Credit Solutions in the current scenario with more and more people wanting various type of loans for various purposes. The Credit Market in India provides customized solutions for Individuals as well as Corporate Customers in forms like Personal Loan, Education Loan, Two Wheeler's & Car Loans, Home Loans as well as Business Loans of various amounts. There are a lot of credit solutions for shopping and purchase of various products with EMI facilities to make the transactions easier and a bit more comfortable.</p>
                            <p className="mb-2">There is a very big need of Credit Solutions in the current scenario with more and more people wanting various type of loans for various purposes. The Credit Market in India provides customized solutions for Individuals as well as Corporate Customers in forms like Personal Loan, Education Loan, Two Wheeler's & Car Loans, Home Loans as well as Business Loans of various amounts. There are a lot of credit solutions for shopping and purchase of various products with EMI facilities to make the transactions easier and a bit more comfortable.</p>
                        </div>
                    </div>
                <div className="row mt-4 bg-white py-4 px-3 border rounded">
                    <div className="col-lg-12">
                        <h1 className="mb-2 mb-4" style={{fontSize: "1.65rem;"}}>Member Registration</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label  className="form-label">Title</label>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-check d-inline-block me-3">
                                                <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios11" value="option1"/>
                                                    <label class="form-check-label" for="exampleRadios11">Shri</label>
                                            </div>
                                            <div class="form-check d-inline-block me-3">
                                                <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios22" value="option2"/>
                                                <label class="form-check-label" for="exampleRadios22">Shrimati</label>
                                            </div>
                                            <div class="form-check d-inline-block me-3">
                                                <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios33" value="option3"/>
                                                <label class="form-check-label" for="exampleRadios33">Miss</label>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-lg-3">
                                    <label  className="form-label">First Name</label>
                                    <input type="text" className="form-control" name="first_name" onChange={handleInput} value={memberInput.first_name}  placeholder=" Your First Name"/>
                                    <span className="text-danger">{memberInput.error_list.first_name}</span>
                                </div>
                                <div className="col-lg-3">
                                    <label  className="form-label">Middle Name</label>
                                    <input type="text" className="form-control" name="middle_name" onChange={handleInput} value={memberInput.middle_name} placeholder=" Your Middle Name"/>
                                    <span className="text-danger">{memberInput.error_list.middle_name}</span>
                                </div>
                                <div className="col-lg-3">
                                    <label  className="form-label">Last Name</label>
                                    <input type="text" className="form-control" name="last_name" onChange={handleInput} value={memberInput.last_name} placeholder=" Your Last Name"/>
                                    <span className="text-danger">{memberInput.error_list.last_name}</span>
                                </div>
                            </div>
                            
                            <div className="row mt-3">
                                <div className="col-lg-12">
                                    <label  className="form-label">Address</label>
                                    <textarea cols="30" rows="5" className="form-control" name="address" onChange={handleInput} value={memberInput.address} placeholder=" Your Full Address Here" style={{minHeight: "100px;"}}/>
                                    <span className="text-danger">{memberInput.error_list.address}</span>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-lg-4">
                                    <label  className="form-label">City</label>
                                    <input type="text" className="form-control" name="city" onChange={handleInput} value={memberInput.city} placeholder=" Your City Name" />
                                    <span className="text-danger">{memberInput.error_list.city}</span>
                                </div>
                                <div className="col-lg-4">
                                    <label  className="form-label">Pin-Code</label>
                                    <input type="text" className="form-control" name="pin_code" onChange={handleInput} value={memberInput.pin_code} placeholder=" Your Pin-Code" />
                                    <span className="text-danger">{memberInput.error_list.pin_code}</span>
                                </div>
                                <div className="col-lg-4">
                                    <label  className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" onChange={handleInput} value={memberInput.email} placeholder=" Your Email Address" />
                                    <span className="text-danger">{memberInput.error_list.email}</span>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-lg-6">
                                    <label  className="form-label">Department</label>
                                    <input type="text" className="form-control" name="department" onChange={handleInput} value={memberInput.department} placeholder=" Your Department" />
                                    <span className="text-danger">{memberInput.error_list.department}</span>
                                </div>
                                <div className="col-lg-6">
                                    <label  className="form-label">Designation</label>
                                    <input type="text" className="form-control" name="designation" onChange={handleInput} value={memberInput.designation} placeholder=" Your Designation" />
                                    <span className="text-danger">{memberInput.error_list.designation}</span>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-lg-4">
                                    <label  className="form-label">Marital Status</label>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check d-inline-block me-3">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                                <label className="form-check-label" for="exampleRadios1">Married</label>
                                            </div>
                                            <div className="form-check d-inline-block me-3">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                                <label className="form-check-label" for="exampleRadios2">Unmarried</label>
                                            </div>
                                        </div>

                                    </div>                        
                                </div>
                                <div className="col-lg-4">
                                    <label  className="form-label">Date of Birth</label>
                                    <input type="date" className="form-control" name="date_of_birth" onChange={handleInput} value={memberInput.date_of_birth} placeholder=" Your Designation" />
                                    <span className="text-danger">{memberInput.error_list.date_of_birth}</span>
                                </div>
                                <div className="col-lg-4">
                                    <label  className="form-label">Date of Retirement</label>
                                    <input type="date" className="form-control" name="date_of_retirement" onChange={handleInput} value={memberInput.date_of_retirement} placeholder=" Your Designation" />
                                    <span className="text-danger">{memberInput.error_list.date_of_retirement}</span>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-lg-4">
                                    <label  className="form-label">Aadhar Card</label>
                                    <input type="file" className="form-control" name="aadhar_card" onChange={handleInput} value={memberInput.aadhar_card} accept=".pdf,.jpg,.jpeg,.png"/>
                                    <small className="form-text text-muted">Accepted file types: PDF, IMG. Max file size: 2MB</small>
                                    <span className="text-danger">{memberInput.error_list.aadhar_card}</span>
                                </div>
                                <div className="col-lg-4">
                                    <label  className="form-label">PAN Card</label>
                                    <input type="file" className="form-control" name="pan_card" onChange={handleInput} value={memberInput.pan_card} accept=".pdf,.jpg,.jpeg,.png"/>
                                    <small className="form-text text-muted">Accepted file types: PDF, IMG. Max file size: 2MB</small>
                                    <span className="text-danger">{memberInput.error_list.pan_card}</span>
                                </div>
                                <div className="col-lg-4">
                                    <label  className="form-label">HRMS ID Number</label>
                                    <input type="text" className="form-control" name="hrms_id_number" onChange={handleInput} value={memberInput.hrms_id_number} placeholder=" Your HRMS ID Number" />
                                    <span className="text-danger">{memberInput.error_list.hrms_id_number}</span>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-lg-12">
                                    <label  className="form-label">Home Town Address</label>
                                    <textarea cols="30" rows="5" className="form-control" name="hometown_address" onChange={handleInput} value={memberInput.hometown_address} placeholder=" Your Home Town Address Here" style={{minHeight: "100px;"}}/>
                                    <span className="text-danger">{memberInput.error_list.hometown_address}</span>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-lg-3">
                                    <label  className="form-label">Home City</label>
                                    <input type="text" className="form-control" name="home_city" onChange={handleInput} value={memberInput.home_city} placeholder=" Your Home City Name" />
                                    <span className="text-danger">{memberInput.error_list.home_city}</span>
                                </div>
                                <div className="col-lg-3">
                                    <label  className="form-label">Qualification</label>
                                    <input type="text" className="form-control" name="qualification" onChange={handleInput} value={memberInput.qualification} placeholder=" Your Qualification" />
                                    <span className="text-danger">{memberInput.error_list.qualification}</span>
                                </div>
                                <div className="col-lg-3">
                                    <label  className="form-label">Whatsapp Number</label>
                                    <input type="phone" className="form-control" name="whatsapp_number" onChange={handleInput} value={memberInput.whatsapp_number} placeholder=" Your Wahtsapp Number" />
                                    <span className="text-danger">{memberInput.error_list.whatsapp_number}</span>
                                </div>
                                <div className="col-lg-3">
                                    <label  className="form-label">Mobile Number</label>
                                    <input type="Phone" className="form-control" name="mobile_number" onChange={handleInput} value={memberInput.mobile_number} placeholder=" Your Mobile Number" />
                                    <span className="text-danger">{memberInput.error_list.mobile_number}</span>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-lg-4">
                                    <label  className="form-label">Office Phone</label>
                                    <input type="tel" className="form-control" name="office_phone" onChange={handleInput} value={memberInput.office_phone} placeholder=" Your Office Phone Number" />
                                    <span className="text-danger">{memberInput.error_list.office_phone}</span>
                                </div>
                                <div className="col-lg-4">
                                    <label  className="form-label">Nominee 1</label>
                                    <input type="text" className="form-control" name="nominee_one" onChange={handleInput} value={memberInput.nominee_one} placeholder=" Your 1st Nominee's Name" />
                                    <span className="text-danger">{memberInput.error_list.nominee_one}</span>
                                </div>
                                <div className="col-lg-4">
                                    <label  className="form-label">Nominee 2</label>
                                    <input type="text" className="form-control" name="nominee_two" onChange={handleInput} value={memberInput.nominee_two} placeholder=" Your 2nd Nominee's Name" />
                                    <span className="text-danger">{memberInput.error_list.nominee_two}</span>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-lg-4">
                                    <label  className="form-label">Member Bank Name</label>
                                    <input type="text" className="form-control" name="member_bank_name" onChange={handleInput} value={memberInput.member_bank_name} placeholder=" Your Member Bank Name" />
                                    <span className="text-danger">{memberInput.error_list.member_bank_name}</span>
                                </div>
                                <div className="col-lg-4">
                                    <label  className="form-label">Member Bank A/C No.</label>
                                    <input type="text" className="form-control" name="member_account_number" onChange={handleInput} value={memberInput.member_account_number} placeholder=" Your Member Bank A/C Number" />
                                    <span className="text-danger">{memberInput.error_list.member_account_number}</span>
                                </div>
                                <div className="col-lg-4">
                                    <label  className="form-label">Member Bank IFSC Code</label>
                                    <input type="text" className="form-control" name="ifsc_code" onChange={handleInput} value={memberInput.ifsc_code} placeholder=" Your Member Bank IFSC Code" />
                                    <span className="text-danger">{memberInput.error_list.ifsc_code}</span>
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col-lg-4">
                                    <label  className="form-label">Member Photo</label>
                                    <input type="file" className="form-control" name="member_photo" onChange={handleInput} value={memberInput.member_photo} accept=".pdf,.jpg,.jpeg,.png"/>
                                    <small className="form-text text-muted">Accepted file types: PDF, IMG. Max file size: 2MB</small>
                                    <span className="text-danger">{memberInput.error_list.member_photo}</span>
                                </div>
                                <div className="col-lg-4">
                                    <label  className="form-label">Signature 1</label>
                                    <input type="file" className="form-control" name="signature_one" onChange={handleInput} value={memberInput.signature_one} accept=".pdf,.jpg,.jpeg,.png"/>
                                    <small className="form-text text-muted">Accepted file types: PDF, IMG. Max file size: 2MB</small>
                                    <span className="text-danger">{memberInput.error_list.signature_one}</span>
                                </div>
                                <div className="col-lg-4">
                                    <label  className="form-label">Signature 2</label>
                                    <input type="file" className="form-control" name="signature_two" onChange={handleInput} value={memberInput.signature_two} accept=".pdf,.jpg,.jpeg,.png"/>
                                    <small className="form-text text-muted">Accepted file types: PDF, IMG. Max file size: 2MB</small>
                                    <span className="text-danger">{memberInput.error_list.signature_two}</span>
                                </div>
                            </div>


                            <div className=" mt-3  text-center">
                                    <button type="submit" className="btn btn-primary mt-4" id="memberMasterSubmitBtn">Submit</button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button type="button" className="btn btn-danger mt-4" id="memberMastercancel">Cancel</button>
                            </div>
                        </form>
                
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}
export default HowToJoinNew;