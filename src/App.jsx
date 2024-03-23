import React from "react"
import Layout from "./components/pages/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import BankHistory from "./components/pages/BankHistory"
import ChairmenMessage from "./components/pages/ChairmenMessage"
import BoardOfDirector from "./components/pages/BoardOfDirector"
import Staff from "./components/pages/Staff"
import FinancialData from "./components/pages/FinancialData"
import Award from "./components/pages/Award"
import LoanScheme from "./components/pages/LoanScheme"
import FixDeposite from "./components/pages/FixDeposite"
import RecurringDeposite from "./components/pages/RecurringDeposite"
import Saving from "./components/pages/Saving"
import LoanCalculator from "./components/pages/LoanCalculator"
import FixDepositeCalculator from "./components/pages/FixDepositeCalculator"
import RecurringCalculator from "./components/pages/RecurringCalculator"
import Contact from "./components/pages/Contact"
import NewsEvent from "./components/pages/NewsEvent"
import Tender from "./components/pages/Tender"
import CurrentOpening from "./components/pages/CurrentOpening"
import SingleNewsEvent from "./components/pages/SingleNewsEvent"
import HowToJoinUsMember from "./components/pages/HowToJoinUsMember"
import Calculators from "./components/pages/Calculators"
import FdCalculator from "./components/pages/FdCalculator"
import BankCalculator from "./components/pages/BankCalculator"
import MemberLogin from "./components/pages/MemberLogin"
import Otp from "./components/pages/member/Otp"
import MemberLayout from "./components/pages/MemberLayout"
import Dashboard from "./components/pages/member/Dashboard"
import GeneralInformation from "./components/pages/member/GeneralInformation"
import GuaratorDetail from "./components/pages/member/GuaratorDetail"
import ChequeDetails from "./components/pages/member/ChequeDetails"
import InstallmentDetails from "./components/pages/member/InstallmentDetails"
import LoanInstallment from "./components/pages/member/LoanInstallment"
import BalanceDetails from "./components/pages/member/BalanceDetails"
import LoanLedger from "./components/pages/member/LoanLedger"
import SavingDetails from "./components/pages/member/SavingDetails"
import SavingLedger from "./components/pages/member/SavingLedger"
import FixDepositeDetails from "./components/pages/member/FixDepositeDetails"
import FixDepositeLedger from "./components/pages/member/FixDepositeLedger"
import RecurringDetails from "./components/pages/member/RecurringDetails"
import RecurringLedger from "./components/pages/member/RecurringLedger"
import RequestGift from "./components/pages/member/RequestGift"
import GiftDetails from "./components/pages/member/GiftDetails"
import ResetPassword from "./components/pages/member/ResetPassword"
import MemberFeedback from "./components/pages/member/MemberFeedback"
import IntrestCertificate from "./components/pages/member/IntrestCertificate"
import Disclaimer from "./components/pages/Disclaimer"
import Feedback from "./components/pages/Feedback"


function App() {
  
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Home />} />
                  <Route path="about-us" element={<About />}/>
                  <Route path="society-history" element={<BankHistory />}/>
                  <Route path="chairmen-message" element={<ChairmenMessage/>}/>
                  <Route path="board-of-director" element={<BoardOfDirector/>}/>
                  <Route path="staff" element={<Staff />} />
                  <Route path="financial-data" element={<FinancialData />} />
                  <Route path="award-and-recognation" element={<Award />} />
                  <Route path="loan" element={<LoanScheme />} />
                  <Route path="fix-deposite" element={<FixDeposite />} />
                  <Route path="recurring-deposite" element={<RecurringDeposite />} />
                  <Route path="saving" element={<Saving />} />
                  <Route path="loan-calculator" element={<LoanCalculator />} />
                  <Route path="fixed-deposite-calculator" element={<FixDepositeCalculator />} />
                  <Route path="contact-us" element={<Contact />} />
                  <Route path="news-and-event" exact element={<NewsEvent/>} />
                  <Route path="news-and-event/:_id" exact element={<SingleNewsEvent/>}/>
                  <Route path="current-opening" element={<CurrentOpening/>} />
                  <Route path="tender" element={<Tender/>} />
                  <Route path="how-to-join-us-member" element={<HowToJoinUsMember/>} />
                  <Route path="/calculator" element={<BankCalculator />} />
                  <Route path='/disclaimer' element={<Disclaimer/>} />
                  <Route path="/feedback" element={<Feedback/>} />
                  
              </Route>

              <Route path="/member/login" element={<MemberLogin/>} />
              <Route path="/member/otp" element={<Otp/>} />

              <Route path="/member" element={<MemberLayout/>}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="general-information" element={<GeneralInformation/>} />
                <Route path="guarator-details" element={<GuaratorDetail/>} />
                <Route path="cheque-details" element={<ChequeDetails/>} />
                <Route path="installment-details" element={<InstallmentDetails/>} />
                <Route path="loan-installment" element={<LoanInstallment/>} />
                <Route path="balance-details" element={<BalanceDetails/>} />
                <Route path="loan-ledger" element={<LoanLedger/>} />
                <Route path="saving-details" element={<SavingDetails/>} /> 
                <Route path="saving-ledger" element={<SavingLedger/>} />
                <Route path="fix-deposite-details" element={<FixDepositeDetails/>} />
                <Route path="fix-deposite-legder" element={<FixDepositeLedger/>} />
                <Route path="recurring-details" element={<RecurringDetails/>} /> 
                <Route path="recurring-ledger" element={<RecurringLedger/>} />
                <Route path="request-gift" element={<RequestGift/>} />
                <Route path="gift-details" element={<GiftDetails/>} />
                <Route path="reset-password" element={<ResetPassword/>} />
                <Route path="member-feedback" element={<MemberFeedback/>} />
                <Route path="interest-certificate" element={<IntrestCertificate/>} />  
              </Route>

             
            

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
