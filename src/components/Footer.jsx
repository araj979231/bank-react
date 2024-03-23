import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="copyright">
    <div className="container d-flex justify-content-between align-items-center">
        <p className="m-0">© THE GUJARAT SACHIVALAY EMPLOYEES CO-OP NEW CREDIT SOCIETY.</p>
        <p className="m-0">
            
            <Link to="disclaimer" title="Disclaimer" className="mr-3" style={{textDecoration: "underline;"}}>Disclaimer</Link>
            <Link to="feedback" title="Feedback" style={{textDecoration: "underline;"}}>Feedback</Link>
            | Last Update Date: <span id="lblupdt">13 Feb 2024</span>
        </p>
    </div>
</div>
        </>
    );
}

export default Footer;