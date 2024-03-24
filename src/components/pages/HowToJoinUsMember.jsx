import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axios";
import Swal from 'sweetalert2'
const HowToJoinUsMember = () => {
    return(
        <>
        <section class="sec-pd bg-accent">
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#" class="text-blue">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Member Registration</li>
            </ol>
          </nav>
          <div class="row mt-4 border rounded py-4 px-4 bg-white">
            <div class="col-lg-12">
                <h2 class="mb-3">Lorem Ipsum</h2>
                <p class="mb-2">There is a very big need of Credit Solutions in the current scenario with more and more people wanting various type of loans for various purposes. The Credit Market in India provides customized solutions for Individuals as well as Corporate Customers in forms like Personal Loan, Education Loan, Two Wheeler's & Car Loans, Home Loans as well as Business Loans of various amounts. There are a lot of credit solutions for shopping and purchase of various products with EMI facilities to make the transactions easier and a bit more comfortable.</p>
                <p class="mb-2">There is a very big need of Credit Solutions in the current scenario with more and more people wanting various type of loans for various purposes. The Credit Market in India provides customized solutions for Individuals as well as Corporate Customers in forms like Personal Loan, Education Loan, Two Wheeler's & Car Loans, Home Loans as well as Business Loans of various amounts. There are a lot of credit solutions for shopping and purchase of various products with EMI facilities to make the transactions easier and a bit more comfortable.</p>
            </div>
          </div>
      <div class="row mt-4 bg-white py-4 px-3 border rounded">
        <div class="col-lg-12">
            <h1 class="mb-2 mb-4">Member Registration</h1>

            <form method="POST" id="memberMasterForm">
                <div class="row">
                    <div class="col-lg-3">
                        <label  class="form-label">Title</label>
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
                    <div class="col-lg-3">
                        <label  class="form-label">First Name</label>
                        <input type="text" class="form-control" id="c_first_name" placeholder=" Your First Name" required/>
                    </div>
                    <div class="col-lg-3">
                        <label  class="form-label">Middle Name</label>
                        <input type="text" class="form-control" id="c_middle_name" placeholder=" Your Middle Name" required/>
                    </div>
                    <div class="col-lg-3">
                        <label  class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="c_last_name" placeholder=" Your Last Name" required/>
                    </div>
                </div>
                
                <div class="row mt-3">
                   
                   
                    <div class="col-lg-6">
                        <label  class="form-label">Address Line 1</label>
                        <input type="text" class="form-control" id="c_addline1" placeholder="Enter Your House No.,Flat No., etc.." required/>
                    </div>
                    <div class="col-lg-6">
                        <label  class="form-label">Address Line 2</label>
                        <input type="text" class="form-control" id="c_addline2" placeholder="Your Society Name, Area Name, etc" required/>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-lg-6">
                        <label  class="form-label">City</label>
                        <input type="text" class="form-control" id="c_city" placeholder=" Your City Name" required/>
                    </div>
                    <div class="col-lg-6">
                        <label  class="form-label">Pin-Code</label>
                        <input type="text" class="form-control" id="c_pincode" placeholder=" Your Pin-Code" required/>
                    </div>
                   
                </div>

                <div class="row mt-3">
                    
                    <div class="col-lg-6">
                        <label class="form-label">Department</label>
                        <select class="form-select" id="c_department" required>
                            <option value="">Select Department</option>
                            <option value="1">Finance</option>
                            <option value="2">Human Resources</option>
                            <option value="3">Marketing</option>
                            <option value="4">Operations</option>
                        </select>
                    </div>

                    
                    <div class="col-lg-6">
                        <label class="form-label">Designation</label>
                        <select class="form-select" id="c_designation" required>
                            <option value="">Select Designation</option>
                            <option value="1">Manager</option>
                            <option value="2">Assistant Manager</option>
                            <option value="3">Supervisor</option>
                            <option value="4">Executive</option>
                           
                        </select>
                    </div>

                </div>

                <div class="row mt-3">
                    <div class="col-lg-4">
                        <label  class="form-label">Marital Status</label>
                        <div class="row">
                            <div class="col">
                                <div class="form-check d-inline-block me-3">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                                    <label class="form-check-label" for="exampleRadios1">Married</label>
                                </div>
                                <div class="form-check d-inline-block me-3">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                    <label class="form-check-label" for="exampleRadios2">Unmarried</label>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div class="col-lg-4">
                        <label  class="form-label">Date of Birth</label>
                        <input type="date" class="form-control" id="c_dob" placeholder=" Your Designation" required/>
                    </div>
                    
                    <div class="col-lg-4">
                        <label class="form-label">Date of Retirement</label>
                        <input type="date" class="form-control" id="c_retirment" placeholder=" Your Designation" readonly required/>
                    </div>

                </div>

                <div class="row mt-3">
                    <div class="col-lg-4">
                        <label  class="form-label">Aadhar Card</label>
                        <input type="text" class="form-control" id="c_aadharnumber" placeholder=" Your Aadhar Card Number" required/>
                    </div>
                    <div class="col-lg-4">
                        <label  class="form-label">PAN Card</label>
                        <input type="text" class="form-control" id="c_pannumber" placeholder=" Your PAN Card Number" required/>
                    </div>
                    <div class="col-lg-4">
                        <label  class="form-label">HRMS ID Number</label>
                        <input type="text" class="form-control" id="c_hrmsid" placeholder=" Your HRMS ID Number" required/>
                    </div>
                </div>

                <div class="row mt-3">
                    
                    <div class="col-lg-6">
                        <label  class="form-label">Home Town Address Line 1</label>
                        <input type="text" class="form-control" id="c_addline1" placeholder="Enter Your House No.,Flat No., etc.." required/>
                    </div>
                    <div class="col-lg-6">
                        <label  class="form-label">Home Town Address Line 2</label>
                        <input type="text" class="form-control" id="c_addline2" placeholder="Your Society Name, Area Name, etc" required/>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-lg-3">
                        <label  class="form-label">Home City</label>
                        <input type="text" class="form-control" id="c_homecity" placeholder=" Your Home City Name" required/>
                    </div>
                    <div class="col-lg-3">
                        <label  class="form-label">Qualification</label>
                        <input type="text" class="form-control" id="c_pincode" placeholder=" Your Qualification" required/>
                    </div>
                    <div class="col-lg-3">
                        <label  class="form-label">Whatsapp Number</label>
                        <input type="phone" class="form-control" id="c_whatsapp" placeholder=" Your Wahtsapp Number" required/>
                    </div>
                    <div class="col-lg-3">
                        <label  class="form-label">Mobile Number</label>
                        <input type="Phone" class="form-control" id="c_mobile" placeholder=" Your Mobile Number" required/>
                    </div>
                </div>
                        
                <div class="row mt-3">
                    <div class="col-lg-6">
                        <label  class="form-label">Office Phone</label>
                        <input type="tel" class="form-control" id="c_officephone" placeholder=" Your Office Phone Number" required/>
                    </div>
                    <div class="col-lg-6">
                        <label  class="form-label">Email</label>
                        <input type="email" class="form-control" id="c_email" placeholder=" Your Email Address" required/>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-lg-6">
                        <label class="form-label">Nominee</label>
                        <input type="text" class="form-control" id="c_pincode" placeholder=" Your 1st Nominee's Name" required/>
                    </div>
                    <div class="col-lg-6">
                        <label class="form-label">Relationship with Nominee</label>
                        <select class="form-select" id="c_nominee_relationship" required>
                            <option value="">Select Relationship</option>
                            <option value="Spouse">Spouse</option>
                            <option value="Child">Child</option>
                            <option value="Parent">Parent</option>
                            
                        </select>
                    </div>
                </div>
                
               
                <div class="row mt-3">
                    <div class="col-lg-4">
                        <label  class="form-label">Bank Name</label>
                        <input type="text" class="form-control" id="c_bankname" placeholder=" Your Member Bank Name" required/>
                    </div>
                    <div class="col-lg-4">
                        <label  class="form-label">Bank A/C No.</label>
                        <input type="text" class="form-control" id="c_acno" placeholder=" Your Member Bank A/C Number" required/>
                    </div>
                    <div class="col-lg-4">
                        <label  class="form-label">Bank IFSC Code</label>
                        <input type="text" class="form-control" id="c_ifsccode" placeholder=" Your Member Bank IFSC Code" required/>
                    </div>
                </div>


                <div class="row mt-3">
                    <div class="col-lg-4">
                        <label  class="form-label">Member Photo</label>
                        <input type="file" class="form-control" id="c_memberphoto" required accept=".pdf,.jpg,.jpeg,.png"/>
                        <small class="form-text text-muted">Accepted file types: PDF, IMG. Max file size: 2MB</small>
                    </div>
                    <div class="col-lg-4">
                        <label  class="form-label">Signature 1</label>
                        <input type="file" class="form-control" id="c_sign1"  required accept=".pdf,.jpg,.jpeg,.png"/>
                        <small class="form-text text-muted">Accepted file types: PDF, IMG. Max file size: 2MB</small>
                    </div>
                    <div class="col-lg-4">
                        <label  class="form-label">Signature 2</label>
                        <input type="file" class="form-control" id="c_sign2"  required accept=".pdf,.jpg,.jpeg,.png"/>
                        <small class="form-text text-muted">Accepted file types: PDF, IMG. Max file size: 2MB</small>
                    </div>
                </div>


                <div class=" mt-3  text-center">
                        <button type="submit" class="btn btn-primary mt-4 mr-2" id="memberMasterSubmitBtn">Submit</button>
                        <button type="button" class="btn btn-secondary mt-4" id="memberMastercancel">Cancel</button>
                </div>
                <div class=" mt-3 text-center" id="printButtonContainer" style={{display: "none;"}}>
                    <button type="button" class="btn btn-primary mt-4" id="printButton">Print</button>
                </div>

              </form>
    
        </div>
      </div>
    </div>
  </section>
        </>
    );
}
export default HowToJoinUsMember;