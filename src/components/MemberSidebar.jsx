import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiMonitor } from '@mdi/js';
import { mdiAccount } from '@mdi/js';
import { mdiAccountSupervisor } from '@mdi/js';
import { mdiInformation } from '@mdi/js';
import { mdiBank } from '@mdi/js';
import { mdiFileChart } from '@mdi/js';
import { mdiScaleBalance } from '@mdi/js';
import { mdiCashMultiple } from '@mdi/js';
import { mdiChartAreaspline } from '@mdi/js';
import { mdiCommentTextOutline } from '@mdi/js';
import { mdiSecurity } from '@mdi/js';
import { mdiGiftOutline } from '@mdi/js';
import { mdiWalletGiftcard } from '@mdi/js';
import { mdiChartLine } from '@mdi/js';


const MemberSidebar = () => {
    return(
        <>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="dashboard">
        <Icon path={mdiMonitor} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Dashboard</span>
          <div className="badge badge-danger">new</div> 
        </Link>
    </li>
      
      <li className="nav-item">
      <Link className="nav-link" to="general-information">
      <Icon path={mdiAccount} size={1} />&nbsp;&nbsp;
          <span className="menu-title">General Information</span>
      </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="balance-details">
        <Icon path={mdiScaleBalance} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Balance Details</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="guarator-details">
        <Icon path={mdiAccountSupervisor} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Guarantor Details</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="cheque-details">
        <Icon path={mdiInformation} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Cheque Details</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="installment-details">
        <Icon path={mdiBank} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Installment Details</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="loan-installment">
        <Icon path={mdiFileChart} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Loan Installment</span>
        </Link>
      </li>
      
      
      <li className="nav-item">
        <Link className="nav-link" to="saving-ledger">
        <Icon path={mdiScaleBalance} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Saving Ledgers</span>
        </Link>
      </li>

     

      <li className="nav-item">
        <Link className="nav-link" to="saving-details">
        <Icon path={mdiCashMultiple} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Saving A/C Details</span>
        </Link>
      </li>

     
      <li className="nav-item">
        <Link className="nav-link" to="fix-deposite-details">
        <Icon path={mdiChartAreaspline} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Fixed Deposit Details</span>
        </Link>
      </li>

       <li className="nav-item">
        <Link className="nav-link" to="fix-deposite-legder">
        <Icon path={mdiChartAreaspline} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Fixed Deposit Ledger</span>
        </Link>
      </li>

     

      <li className="nav-item">
        <Link className="nav-link" to="recurring-details">
        <Icon path={mdiChartLine} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Recurring Details</span>
        </Link>
      </li>

     
      <li className="nav-item">
        <Link className="nav-link" to="request-gift">
        <Icon path={mdiGiftOutline} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Request Gift</span>
        </Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="gift-details">
        <Icon path={mdiWalletGiftcard} size={1} />&nbsp;&nbsp;
          <span className="menu-title">View Gift Details</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="reset-password">
        <Icon path={mdiSecurity} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Reset Password</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="member-feedback">
        <Icon path={mdiCommentTextOutline} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Feedback</span>
        </Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="interest-certificate">
        <Icon path={mdiCommentTextOutline} size={1} />&nbsp;&nbsp;
          <span className="menu-title">Interest Certificate</span>
        </Link>
      </li>

    </ul>
  </nav>
        </>
    );
}
export default MemberSidebar;