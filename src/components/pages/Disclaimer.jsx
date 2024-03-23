const Disclaimer = () => {
    return(
        <>
        
    <section className="page-banner set-bank-banner">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-white">Disclaimer</h1>
                </div>
            </div>
        </div>
    </section>
    <section className="sec-pd bg-accent">
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="http://thinkdream.in/bank" className="text-blue">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Disclaimer</li>
                </ol>
            </nav>
        </div>
        <div className="container">
            <div className="row mt-4 py-4 px-4 bg-white">
                <div className="col-lg-12">
                    <p className="text-justify mb-2">This is a dummy disclaimer. This website does not provide any real services or products. Any resemblance to actual persons, living or dead, or actual events is purely coincidental. The content provided on this website is for informational purposes only.</p>
                </div>   
            </div>
        </div>
    </section>
        </>
    );
}

export default Disclaimer;