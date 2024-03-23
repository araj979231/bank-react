import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axios";
import Swal from 'sweetalert2'

const Contact = () => {
    const [contactInput,setContactInput] = useState({
        first_name:'',
        last_name: '',
        mobile: '',
        email: '',
        message: '',
        error_list:[]
    });
    
    const handleInput = (e) => {
        e.preventDefault();
        setContactInput({...contactInput, [e.target.name] : e.target.value});
    }
   

    const submitContactForm = (e) => {
        e.preventDefault();

        const data = {
            first_name:contactInput.first_name,
            last_name:contactInput.last_name,
            mobile:contactInput.mobile,
            email:contactInput.email,
            message:contactInput.message,
        }

        axiosClient.post("/save-contact", {
            first_name: contactInput.first_name,
            last_name: contactInput.last_name,
            mobile: contactInput.mobile,
            email: contactInput.email,
            message: contactInput.message,
        })
        .then(({ data }) => {
         
          if(data.status == 200){
            Swal.fire('Contact Save Successfully!', '', 'success');
            setContactInput({...contactInput, error_list:[]});
            
          }else if(data.status === 400){
            setContactInput({...contactInput, error_list:data.errors});
          }
        })
        .catch((error) => {
          console.error(error)
        });
    }

    return (
        <>
        <section className="page-banner set-bank-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white">Contact</h1>
                        </div>
                    </div>
                </div>
            </section>
        <section className="sec-pd bg-accent">
    <div className="container">
    <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Contact</li>
                            </ol>
                        </nav>
      <div className="row mt-4 bg-white py-4 px-3 border rounded">
        <div className="col-lg-6">
            <h1 className="mb-2 mb-4" style={{fontSize: "1.65rem;"}}>Let's Contact With Us</h1>

            <form onSubmit={submitContactForm}>
                <div className="row">
                    <div className="col-lg-6">
                        <label  className="form-label">First Name</label>
                        <input type="text" name="first_name" onChange={handleInput} className="form-control" value={contactInput.first_name} />
                        <span className="text-danger">{contactInput.error_list.first_name}</span>
                    </div>
                    <div className="col-lg-6">
                        <label  className="form-label">Last Name</label>
                        <input type="text" name="last_name" onChange={handleInput} className="form-control" value={contactInput.last_name} />
                        <span className="text-danger">{contactInput.error_list.last_name}</span>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <label  className="form-label">Mobile</label>
                        <input type="number" name="mobile" onChange={handleInput} className="form-control" value={contactInput.mobile} />
                        <span className="text-danger">{contactInput.error_list.mobile}</span>
                    </div>
                    <div className="col-lg-6">
                        <label  className="form-label">Email</label>
                        <input type="email" name="email" onChange={handleInput} className="form-control" value={contactInput.email} />
                        <span className="text-danger">{contactInput.error_list.email}</span>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-12">
                        <label  className="form-label">Message</label>
                        <textarea name="message" className="form-control" onChange={handleInput} value={contactInput.message} />
                        <span className="text-danger">{contactInput.error_list.message}</span>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-4" id="contactUsSubmitBtn">Send Enquiry</button>
              </form>
    
        </div>
        
        
      </div>

    </div>
  </section>
        </>
    );
}

export default Contact;