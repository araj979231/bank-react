import { Outlet } from 'react-router-dom';
import Header from '../Header';
import About from './About';
import Home from './Home';
import Footer from '../Footer';

const Layout = () => {
    return <>
        <Header />
        <Outlet /> 
        <Footer />
    </>
}

export default Layout;