import { useEffect } from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TabPane } from 'reactstrap';
import axiosClient from '../../axios';
import { FormatPrice } from '../../Helpers/FormatPrice';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const FdCalculator = () => {

    
    
    const [loanAmountTwoData,setloanAmountTwoData] = useState({
        'loanAmountForTwo' : '',
        'periodMonthForTwo' : '',
    });
    const [fdRatesForLoanTwo,setFdRatesForLoanTwo] = useState([]);
    const [intrestRateForLoanTwo,setIntrestRateForLoanTwo] = useState(0);
    const [TotalIntrestValueForLoanTwo,setTotalIntrestValueForLoanTwo] = useState(0);
    const [toatlMaturityAmountForLoanTwo,setToatlMaturityAmountForLoanTwo] = useState(0);
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
    console.log(fdRatesForLoanTwo);
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

        setTotalIntrestValueForLoanTwo(TotalIntrestForLoanTwo);
        setToatlMaturityAmountForLoanTwo(toatlMaturityAmountValueForLoanTwo);
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
    

    return(
        <>
         <section className="sec-pd bg-accent">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#" className="text-blue">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Calculators</li>
                        </ol>
                    </nav>
                    <div className="row mt-4 bg-white py-4 px-3 border rounded">
                        <div className="col-lg-6"></div>
                    </div>
                    <div className="row mb-4 justify-content-center">
                        
                      
                       
                        <div className="col-lg-10">
                            <div className="row rounded bg-white py-5 px-4 shadow">
                                <div className="col-12 col-lg-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">FD Amount</label>
                                            <span className="input-group-text" id="basic-addon1"></span>
                                            <input type="number" id="loanAmountForTwo" className="form-control" value={loanAmountTwoData.loanAmountForTwo} onChange={handleChangeForLoanTwo}  name="loanAmountForTwo" placeholder="1000"/>
                                            
                                        </div>
                                        
                                        <div className="input-group mb-1">
                                            <label className="text-dark d-block mb-1 w-100">Period in Month</label>
                                            <span className="input-group-text" id="basic-addon1">%</span>
                                            <input type="number" id="periodMonth" 
                                            className="form-control"  value={loanAmountTwoData.periodMonthForTwo} onChange={handleChangeForLoanTwo} name="periodMonthForTwo" placeholder="10 %"/>

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
                        
                       
                    </div>
                </div>
            </section>
        </>
    );
}

export default FdCalculator;