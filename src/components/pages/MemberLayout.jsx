import '../../../src/assets/member/css/font-awesome.min.css'
import '../../../src/assets/member/css/materialdesignicons.min.css'
import '../../../src/assets/member/css/style.css'
import '../../../src/assets/member/css/typicons.css'
import '../../../src/assets/member/css/vendor.bundle.base.css'
import '../../../src/assets/member/js/settings.js'
import '../../../src/assets/member/js/template.js'
import '../../../src/assets/member/js/dashboard.js'
import { Outlet } from 'react-router-dom';
import MemberHeader from '../MemberHeader';
import MemberFooter from '../MemberFooter';
import MemberSidebar from '../MemberSidebar.jsx';

const MemberLayout = () => {
    return <>
        <div className="container-scroller">
        <MemberHeader />
        <div className="container-fluid page-body-wrapper">
            <MemberSidebar />
            <Outlet /> 
        </div>
        </div>
        <MemberFooter />
        
    </>
}

export default MemberLayout;    