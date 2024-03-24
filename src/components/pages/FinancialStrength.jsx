import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import axiosClient from "../../axios";
import Loader from '../../assets/images/loader.gif'
import Chart from 'chart.js/auto'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const FinancialStrength = () =>{
    var imageUrl = 'http://localhost/bank/laravel-backend/public/images';
    const [financialData,setFinancialData] = useState([]);
    const [years,setYears] = useState('');
    const [ratio,setRatio] = useState('');
    const [profileData,setProfileData] = useState([]);
    const [LoanData,setLoanData] = useState({});
    const [DepositeData,setDepositeData] = useState({});
    const [MemberData,setMemberData] = useState({});
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetchAllFinancialData();
    },[]);

    const fetchAllFinancialData = () => {
        axiosClient.get('financial-strength/Profite').then(res => {
            if(res.data.status == 200){
                setProfileData(res.data.financial);   
            }
        });
        axiosClient.get('financial-strength/Loan').then(res => {
            if(res.data.status == 200){
                setLoanData(res.data.financial);   
            }
        });
        axiosClient.get('financial-strength/Deposite').then(res => {
            if(res.data.status == 200){
                setDepositeData(res.data.financial);   
            }
        });
        axiosClient.get('financial-strength/Deposite').then(res => {
            if(res.data.status == 200){
                setDepositeData(res.data.financial);   
            }
        });
    }

    
    
    const Profiteoptions = {
        chart:{
            height:200,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor:'rgba(255, 255, 255, 0.0)',
        },
        title: {
            text: false,
            align: 'left'
        },
        tooltip: {
            pointFormat: false
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                borderRadius: 5,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                    distance: -50,
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            }
        },
        series: [{
            name: 'Share',
            data: [
                { name: '2021', y: 74.03 },
                { name: '2022', y: 12.66 },
                { name: '2023', y: 4.96 }
            ]
        }],
        exporting: { enabled: false }
    }
    
    const loanOptions = {
        chart:{
            height:200,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor:'rgba(255, 255, 255, 0.0)',
        },
        title: {
            text: false,
            align: 'left'
        },
        tooltip: {
            pointFormat: false
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                borderRadius: 5,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                    distance: -50,
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            }
        },
        series: [{
            name: 'Share',
            data: [
                { name: '2021', y: 74.03 },
                { name: '2022', y: 12.66 },
                { name: '2023', y: 4.96 }
            ]
        }],
        exporting: { enabled: false }
    }
    
    const depositeOptions = {
        chart:{
            height:200,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor:'rgba(255, 255, 255, 0.0)',
        },
        title: {
            text: false,
            align: 'left'
        },
        tooltip: {
            pointFormat: false
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                borderRadius: 5,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                    distance: -50,
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            }
        },
        series: [{
            name: 'Share',
            data: [
                { name: '2021', y: 74.03 },
                { name: '2022', y: 12.66 },
                { name: '2023', y: 4.96 }
            ]
        }],
        exporting: { enabled: false }
    }
    
    const membersOptions = {
        chart:{
            height:200,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor:'rgba(255, 255, 255, 0.0)',
        },
        title: {
            text: false,
            align: 'left'
        },
        tooltip: {
            pointFormat: false
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                borderRadius: 5,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                    distance: -50,
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            }
        },
        series: [{
            name: 'Share',
            data: [
                { name: '2021', y: 74.03 },
                { name: '2022', y: 12.66 },
                { name: '2023', y: 4.96 }
            ]
        }],
        exporting: { enabled: false }
    }
    
    return(
        <>
          <section className="sec-pd bg-accent statastic">
      <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-5 text-center">
                        <span className="fw-800 text-white section-title">Financial Strength</span>
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 col-xs-6">
                    <div className="wow fadeInUp counter-wrapper">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={Profiteoptions}
                        />
                        <strong className="text-light">Profit</strong>
                    </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                    <div className="wow fadeInUp counter-wrapper">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={loanOptions}
                            />
                        <strong className="text-light">Loan</strong>
                    </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                    <div className="wow fadeInUp counter-wrapper">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={depositeOptions}
                            />
                        <strong className="text-light">Deposit</strong>
                    </div> 
                </div>
                <div className="col-sm-3 col-xs-6">
                    <div className="wow fadeInUp counter-wrapper">
                        
                        <HighchartsReact
                        highcharts={Highcharts}
                        options={membersOptions}
                        />
                        <strong className="text-light">Members</strong>
                    </div>
                </div>
            </div> 
      </div>
  </section>
        </>
    );
}

export default FinancialStrength;