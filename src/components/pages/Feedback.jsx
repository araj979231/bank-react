import { Link } from "react-router-dom";


const Feedback = () => {
    return(
        <>
        <section className="page-banner set-bank-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white">Feedback</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-pd bg-accent">
                <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Feedback</li>
                            </ol>
                        </nav>
                </div>
                <div className="container">
        <h1 className="mb-2 mb-4">Feedback Form</h1>
        <div className="row mt-4 border rounded py-4 px-4 bg-white">
            <div className="col-lg-12">
                <form method="POST" id="feedbackForm">
                    <div className="row">
                        <div className="col-lg-12">
                            <label className="form-label">Name (Optional)</label>
                            <input type="text" className="form-control" id="f_name" placeholder="Your Name"/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-12">
                            <label className="form-label">Subject</label>
                            <input type="text" className="form-control" id="f_subject" placeholder="Feedback Subject" required/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-12">
                            <label className="form-label">Feedback Message</label>
                            <textarea className="form-control" id="f_message" rows="5" placeholder="Your Feedback Message" required/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="f_anonymous"/>
                                <label className="form-check-label" for="f_anonymous">
                                    Provide Feedback Anonymously
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-3  text-center">
                        <button type="submit" className="btn btn-primary mt-4" id="feedbackSubmitBtn">Submit Feedback</button>
                        <button type="button" className="btn btn-secondary mt-4" id="feedbackCancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
                
            </section>
        </>
    );
}

export default Feedback;