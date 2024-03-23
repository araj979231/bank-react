import { useState } from 'react';
const RecurringCalculator = () => {
    const [loanAmountThreeData,setLoanAmountThreeData] = useState({
        'loanAmountForThree' : '',
        'periodMonthForThree' : '',
        'rateOfIntrestForThree' : ''
    });
    const [totalBasicAmountForLoanThree,setTotalBasicAmountForLoanThree] = useState(0);
    const [TotalIntrestValueForLoanThree,setTotalIntrestValueForLoanThree] = useState(0);
    const [toatlMaturityAmountForLoanThree,setToatlMaturityAmountForLoanThree] = useState(0);
    const [plueOne,setPlusOne] = useState(0);
    const handleChangeLoanThree = (e) => {
        setLoanAmountThreeData({...loanAmountThreeData,[e.target.name] : e.target.value});  
    }

    const handleSubmitForLoanThree = (e) => {
        e.preventDefault();


        setPlusOne(parseInt(loanAmountThreeData.periodMonthForThree) + 1);

       
        const TotalIntrestForLoanThree = parseInt(loanAmountThreeData.loanAmountForThree) * parseInt(loanAmountThreeData.periodMonthForThree) * plueOne * loanAmountThreeData.rateOfIntrestForThree / 2400;

        console.log(TotalIntrestForLoanThree);

        const getTotalBasicAmoutValueForLoanThree = parseInt(loanAmountThreeData.loanAmountForThree) * parseInt(loanAmountThreeData.periodMonthForThree);

        const getTotalMaturityAmountValueForLoanThree = TotalIntrestForLoanThree + getTotalBasicAmoutValueForLoanThree;

        setTotalBasicAmountForLoanThree(getTotalBasicAmoutValueForLoanThree);
        setTotalIntrestValueForLoanThree(TotalIntrestForLoanThree);
        setToatlMaturityAmountForLoanThree(getTotalMaturityAmountValueForLoanThree);
    }
    

    return(
        <>
             <section className="sec-pd bg-accent">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#" className="text-blue">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">FD Calculator</li>
                        </ol>
                    </nav>
                    <div className="row mt-4 bg-white py-4 px-3 border rounded">
                        <div className="col-lg-6"></div>
                    </div>
                    <div className="row mb-4 justify-content-center">
                        <div className="col-lg-10">
                            <div className="row rounded bg-white py-5 px-4 shadow">
                                <div className="col-12 col-lg-4">
                                    <form onSubmit={handleSubmitForLoanThree}>
                                        <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">Recurring Installment Per Month (₹) *</label>
                                            <span className="input-group-text" id="basic-addon1"></span>
                                            <input type="number" id="loanAmountForThree" className="form-control" value={loanAmountThreeData.loanAmountForThree} onChange={handleChangeLoanThree}  name="loanAmountForThree" placeholder="1000"/>
                                            
                                        </div>
                                      
                                        <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">Period in Month</label>
                                            <span className="input-group-text" id="basic-addon1">%</span>
                                            <input type="number" id="periodMonthForThree" 
                                            className="form-control"  value={loanAmountThreeData.periodMonthForThree} onChange={handleChangeLoanThree} name="periodMonthForThree" placeholder="10 %"/>

                                        </div>

                                         <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">Rate of Interest (%) </label>
                                            <span className="input-group-text" id="basic-addon1">%</span>
                                            <input type="number" id="rateOfIntrestForThree" 
                                            className="form-control" value={loanAmountThreeData.rateOfIntrestForThree} onChange={handleChangeLoanThree} name="rateOfIntrestForThree" placeholder="10 %"/>

                                        </div>
                                       
                                        
                                        <div className="d-flex mt-2 justify-content-end">
                                            <button type="submit" className="btn btn-primary me-3">Calculate</button>
                                            <button type="button" className="btn btn-trans" onclick="clearForm()">Clear</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <div className="calcultor_item">
                                        <h5 className="title">Total Basic Amount (₹) </h5>
                                        <h5><span id="showEMI">{totalBasicAmountForLoanThree}</span></h5>
                                    </div>
                                    <div className="calcultor_item">
                                        <h5 className="title">Total Interest (₹) </h5>
                                        <h5>₹ <span id="showInterest">{TotalIntrestValueForLoanThree}</span></h5>
                                    </div>
                                    <div className="calcultor_item">
                                        <h5 className="title">Total Maturity Amount with Interest (₹) </h5>
                                        <h5>₹ <span id="showInterest">{toatlMaturityAmountForLoanThree}</span></h5>
                                    </div>
                                    
                                </div>
                               
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default RecurringCalculator;