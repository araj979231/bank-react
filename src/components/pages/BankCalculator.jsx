import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {FormatPrice} from "../../Helpers/FormatPrice";
import { useState,useEffect } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import axiosClient from '../../axios';

const BankCalculator = () => {
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
    const LoanTwoGraph = {
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
                name: 'Total Maturity Amount with Interest ',
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

    const [loanAmountTwoData,setloanAmountTwoData] = useState({
        'loanAmountForTwo' : '',
        'periodMonthForTwo' : '',
    });
    const [fdRatesForLoanTwo,setFdRatesForLoanTwo] = useState([]);
    const [intrestRateForLoanTwo,setIntrestRateForLoanTwo] = useState(0);
    const [TotalIntrestValueForLoanTwo,setTotalIntrestValueForLoanTwo] = useState(0);
    const [toatlMaturityAmountForLoanTwo,setToatlMaturityAmountForLoanTwo] = useState(0);

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

    useEffect(()=>{
        
        fetchRatesData();
      },[]);
    const handleChangeForLoanTwo = (e) => {
        setloanAmountTwoData({...loanAmountTwoData,[e.target.name] : e.target.value});   
    }

    const fetchRatesData = () => {
        axiosClient.get('/get-fd-rates').then(res => {
            if(res.data.status == 200){
                setFdRatesForLoanTwo(res.data.fd_rates);
            }
          });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(loanAmountTwoData.periodMonthForTwo == "3"){
            setIntrestRateForLoanTwo('6');
        }else if(loanAmountTwoData.periodMonthForTwo == "6"){
            setIntrestRateForLoanTwo('6.5');
        }else if(loanAmountTwoData.periodMonthForTwo == "12"){
            setIntrestRateForLoanTwo('7');
        }else if(loanAmountTwoData.periodMonthForTwo == "24"){
            setIntrestRateForLoanTwo('7.5');
        }else if(loanAmountTwoData.periodMonthForTwo == "36"){
            setIntrestRateForLoanTwo('8');
        }
        
        const TotalIntrestForLoanTwo = loanAmountTwoData.loanAmountForTwo*loanAmountTwoData.periodMonthForTwo*(intrestRateForLoanTwo/12)/100; 
        const toatlMaturityAmountValueForLoanTwo = parseInt(loanAmountTwoData.loanAmountForTwo) + parseInt(TotalIntrestForLoanTwo);
        console.log(TotalIntrestForLoanTwo);
        setTotalIntrestValueForLoanTwo(TotalIntrestForLoanTwo);
        setToatlMaturityAmountForLoanTwo(toatlMaturityAmountValueForLoanTwo);
    }

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
        <section className="page-banner set-bank-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white">Calculators</h1>
                        </div>
                    </div>
                </div>
            </section>
        <section className="sec-pd bg-accent">
            <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Calculators</li>
                        </ol>
                    </nav>
                </div>
            <div className="container">
                
                <div className="row mt-4 bg-white py-4 px-3 border rounded">
                    <div className="col-lg-6"></div>
                </div>
                <div className="row mb-4 justify-content-center">
                <Tabs>
                    <TabList>
                    <Tab>Loan Intrest Calculator</Tab>
                    <Tab>FD Maturity Calculator</Tab>
                    <Tab>Recurring Maturity Calculator</Tab>
                    </TabList>

                    <TabPanel>
                    <div className="col-lg-10">
                            <div className="row rounded bg-white py-5 px-4 shadow">
                                <div className="col-12 col-lg-4">
                                    <form onSubmit={handleSubmitForLoanOne}>
                                        <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">Amount</label>
                                            <span className="input-group-text" id="basic-addon1"></span>
                                            <input type="number" id="loanAmountForOne" className="form-control" onChange={handleChangeLoanOne} value={loanAmountOneData.loanAmountForOne} name="loanAmountForOne" placeholder="1000" required="required"/>
                                            
                                        </div>
                                        
                                        <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">Interest Rate</label>
                                            <span className="input-group-text" id="basic-addon1">%</span>
                                            <input type="number" id="intrestRateForOne" 
                                            className="form-control" onChange={handleChangeLoanOne} value={loanAmountOneData.intrestRateForOne} name="intrestRateForOne" placeholder="10%" required="required"/>

                                        </div>
                                       
                                        <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">Tenure</label>
                                            <span className="input-group-text" id="basic-addon1"><i className="fas fa-clock"></i></span>
                                            <input type="number" id="tenuresForOne" className="form-control" placeholder="Enter Monthly Tenure" name="tenuresForOne"
                                             onChange={handleChangeLoanOne} value={loanAmountOneData.tenuresForOne} 
											 required="required"
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
                    </TabPanel>
                    <TabPanel>
                    <div className="col-lg-10">
                            <div className="row rounded bg-white py-5 px-4 shadow">
                                <div className="col-12 col-lg-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">FD Amount</label>
                                            <span className="input-group-text" id="basic-addon1"></span>
                                            <input type="number" id="loanAmountForTwo" className="form-control" value={loanAmountTwoData.loanAmountForTwo} onChange={handleChangeForLoanTwo}  name="loanAmountForTwo" placeholder="1000"  required="required"/>
                                            
                                        </div>
                                        
                                        <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">Period in Month</label>
                                            <span className="input-group-text" id="basic-addon1">%</span>
                                            <input type="number" id="periodMonth" 
                                            className="form-control"  value={loanAmountTwoData.periodMonthForTwo} onChange={handleChangeForLoanTwo} name="periodMonthForTwo" placeholder="10 %" required="required"/>

                                        </div>
                                       
                                        <table className="table border">
                                            <thead>
                                                <tr>
                                                    <th>Months</th>
                                                    <th>Intrest</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {fdRatesForLoanTwo.map((service) => ( 
                                                 <tr>
                                                    <td>{service.type.name}</td>
                                                    <td>{service.roi}%</td>
                                                </tr>
                                            ))} 
                                            </tbody>
                                        </table>
                                        <div className="d-flex mt-2 justify-content-end">
                                            <button type="submit" className="btn btn-primary me-3">Calculate</button>
                                            <button type="button" className="btn btn-trans" onclick="clearForm()">Clear</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <div className="calcultor_item">
                                        <h5 className="title">Total Interest (₹) </h5>
                                        <h5><span id="showEMI">{FormatPrice(TotalIntrestValueForLoanTwo)}</span></h5>
                                    </div>
                                    <div className="calcultor_item">
                                        <h5 className="title">Total Maturity Amount with Interest (₹) </h5>
                                        <h5><span id="showInterest">{FormatPrice(toatlMaturityAmountForLoanTwo)}</span></h5>
                                    </div>
                                    
                                </div>
                                <div className="col-12 col-lg-4">
                                    <HighchartsReact
                                    highcharts={Highcharts}
                                    options={ LoanTwoGraph }
                                    />
                                </div>
                               
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="col-lg-10">
                            <div className="row rounded bg-white py-5 px-4 shadow">
                                <div className="col-12 col-lg-4">
                                    <form onSubmit={handleSubmitForLoanThree}>
                                        <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">Recurring Installment Per Month (₹) *</label>
                                            <span className="input-group-text" id="basic-addon1"></span>
                                            <input type="number" id="loanAmountForThree" className="form-control" value={loanAmountThreeData.loanAmountForThree} onChange={handleChangeLoanThree}  name="loanAmountForThree" placeholder="1000"  required="required"/>
                                            
                                        </div>
                                      
                                        <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">Period in Month</label>
                                            <span className="input-group-text" id="basic-addon1">%</span>
                                            <input type="number" id="periodMonthForThree" 
                                            className="form-control"  value={loanAmountThreeData.periodMonthForThree} onChange={handleChangeLoanThree} name="periodMonthForThree" placeholder="10 %" required="required"/>

                                        </div>

                                         <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">Rate of Interest (%) </label>
                                            <span className="input-group-text" id="basic-addon1">%</span>
                                            <input type="number" id="rateOfIntrestForThree" 
                                            className="form-control" value={loanAmountThreeData.rateOfIntrestForThree} onChange={handleChangeLoanThree} name="rateOfIntrestForThree" placeholder="10 %" required="required"/>

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
                    </TabPanel>
                </Tabs>
                </div>
            </div>
        </section>
        </>
    );
}

export default BankCalculator;