import { faRupee } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {FormatPrice} from "../../Helpers/FormatPrice";

const Calculators = () => {
    const options = {
        chart:{
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
          text: 'Break-up of Total Payment'
        },
        tooltip: {
            pointFormat: '<b>{series.data.title}{point.percentage:.1f}%</b>'
        },accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                cursor: 'pointer',
                
                showInLegend: true
            }
        },
        series: [{
            data: [{
        		title : '74.77',
            name: 'Total Interest',
            y: 74.77,
            },  {
                    title : '74.77',
                name: 'Principal Loan Amount',
                y: 12.82
            }]
        }],
        exporting: { enabled: false }
      }
      const [loanAmountOneData,setLoanAmountOneData] = useState({
          'loanAmountForOne' : '',
          'intrestRateForOne' : '',
          'tenuresForOne' : ''
      });
  

       const [showEmi,setShowEmi] = useState(0);
       const [showIntrest,setShowIntrest] = useState(0);
       const [showTotalAmountPayble,setShowTotalAmountPayble] = useState(0);

    const handleChangeLoanOne = (e) => {
        e.preventDefault();
        setLoanAmountOneData({...loanAmountOneData,[e.target.name] : e.target.value});
       
    }
    
    const handleSubmitForLoanOne = (e) => {
        e.preventDefault();
        
        const LoanAmountValue = loanAmountOneData.loanAmountForOne;
        const intrestRateValue = loanAmountOneData.intrestRateForOne;
        const tenuresValue = loanAmountOneData.tenuresForOne;
        const intrest = intrestRateValue / 12 / 100;
        const calculateEmi = 
        LoanAmountValue * 
        intrest * 
        (Math.pow(1+intrest,tenuresValue) / 
        (Math.pow(1+intrest,tenuresValue)-1));

        const getTotalAmount = Math.round(tenuresValue * calculateEmi);
        const totalIntrestPayable = Math.round(getTotalAmount - LoanAmountValue);

        setShowEmi(calculateEmi);
        setShowIntrest(getTotalAmount);
        setShowTotalAmountPayble(totalIntrestPayable);   
    }
    return (
        <>
            <section className="sec-pd bg-accent">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#" className="text-blue">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Calculator</li>
                        </ol>
                    </nav>
                    <div className="row mt-4 bg-white py-4 px-3 border rounded">
                        <div className="col-lg-6"></div>
                    </div>
                    <div className="row mb-4 justify-content-center">
                        <div className="col-lg-10">
                            <div className="row rounded bg-white py-5 px-4 shadow">
                                <div className="col-12 col-lg-4">
                                    <form onSubmit={handleSubmitForLoanOne}>
                                        <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">Amount</label>
                                            <span className="input-group-text" id="basic-addon1"></span>
                                            <input type="number" id="loanAmountForOne" className="form-control" onChange={handleChangeLoanOne} value={loanAmountOneData.loanAmountForOne} name="loanAmountForOne" placeholder="1000"/>
                                            
                                        </div>
                                        
                                        <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">Interest Rate</label>
                                            <span className="input-group-text" id="basic-addon1">%</span>
                                            <input type="number" id="intrestRateForOne" 
                                            className="form-control" onChange={handleChangeLoanOne} value={loanAmountOneData.intrestRateForOne} name="intrestRateForOne" placeholder="10 %"/>

                                        </div>
                                       
                                        <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">Tenure</label>
                                            <span className="input-group-text" id="basic-addon1"><i className="fas fa-clock"></i></span>
                                            <input type="number" id="tenuresForOne" className="form-control" placeholder="Enter Monthly Tenure" name="tenuresForOne"
                                             onChange={handleChangeLoanOne} value={loanAmountOneData.tenuresForOne} 
                                            />
                                        </div>
                                        
                                        <div className="d-flex mt-2 justify-content-end">
                                            <button type="submit" className="btn btn-primary me-3">Calculate</button>
                                            <button type="button" className="btn btn-trans" onclick="clearForm()">Clear</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <div className="calcultor_item">
                                        <h5 className="title">Loan EMI</h5>
                                        <h5><span id="showEMI">{FormatPrice(showEmi)}</span></h5>
                                    </div>
                                    <div className="calcultor_item">
                                        <h5 className="title">Interest Payable</h5>
                                        <h5> <span id="showInterest">{FormatPrice(showIntrest)}</span></h5>
                                    </div>
                                    <div className="calcultor_item">
                                        <h5 className="title">Total Amount Payable</h5>
                                        <h5> <span id="showTotalAmountPayble">{FormatPrice(showTotalAmountPayble)}</span></h5>
                                    </div>

                                </div>
                                <div className="col-12 col-lg-4">
                                    <HighchartsReact
                                    highcharts={Highcharts}
                                    options={options}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-10 mt-3">
                            <div style={{display:'flex;',justifyContent:'center',alignItems:'center'}}>
                            <button type="submit" className="btn btn-primary me-3">Print</button>
                            <button type="submit" className="btn btn-primary me-3">Share</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Calculators;