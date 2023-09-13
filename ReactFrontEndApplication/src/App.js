import logo from './logo.svg';
import './App.css';
//import demo from './components/NavBarComp';
//import NavBarComp from './components/NavBarComp';
import { Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoginComp from './components/LoginComp';
import ForgotPwdComp from './components/ForgotPwdComp';
import AboutUsComp from './components/AboutUs';
import ArtistComp from './components/ArtistComp';
import GalleryServicesComp from './components/GalleryServicesComp';
import ContactUsComp from './components/ContactUsComp';
import RegisterComp from './components/RegisterComp';
import AdminComp from './components/AdminComp';
import HomeComp from './components/StartingHomeComp';
import CorporateCustomerComp from './components/CorporateCustHome';
import LogoutComp from './components/LogoutComp';
import{useSelector} from "react-redux";
import ApprovalPage from './components/ApprovalPage';
import AdminAllArtists from './components/AdminAllArtists';
import CustomerRegister1 from './components/CustomerRegister1';
import Co_CustRegister1 from './components/Co_CustRegister1';
import Artistregister1 from './components/Artistregister1';
import Artistreg from './components/ArtistReg';
import CustomerRegComp from './components/CustomerRegComp';
import Corporatecust from './components/Corporatecust';
import CustomerHome from './components/CustomerHome';
import AdminApprove from './components/AdminApprove';
import AdminAllCustomers from './components/AdminAllCustomers';
import AddArtworkComp from './components/AddArtworkComp';
import ArtistHomeComp from './components/ArtistHomeComp';
import pic1 from './images/logo-color-modified.png';
import AdminAllCoCustomers from './components/AdminAllCoCustomers';
import CustomerHomeComp from './components/CustomerHomeComp';
import AllArtists from './components/AllArtists';

import AddToCart from './components/AddToCart';
import Cart1 from './components/Cart1';
import AllArtistCorpComp from './components/AllArtistCorpComp';
import AllProductCorpComp from './components/AllProductCorpComp';

import CorporateCustHomeComp from './components/CorporateCustHomeComp';
import CorporateCustNavBar from './components/CorporateCustNavBar';

import CorporateCustHome from './components/CorporateCustHome';
import ApprovalCorporateCust from './components/ApprovalCorporateCust';

import FooterComp from './components/FooterComp';

import ArtistNavBar from './components/ArtistNavBar';

import OrderBill from './components/OrderBill';



function App() {

  const mystate= useSelector((state)=>state.logged);
  console.log(mystate);
  return (
    <div className="App" style={{backgroundColor:'#EFFFFE'}}>
      <div style={{display:mystate.loggedIn ? "none":"block"}}>
      <nav className="navbar navbar-expand-sm mb-3"style={{backgroundColor:'#B7F1FD',fontFamily:"cursive"}}>
        <div className="container-fluid">
        
        <ul className="navbar-nav">
        
        <li className="nav-item">
        <img src={pic1} class="img-thumbnail" width='100cm' height='100cm'></img><br/>
       
        </li>
          <li className="nav-item">
            <Link to="/" className="nav-link px-3">Home</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="register" className="nav-link px-3">Registration</Link>
          </li> */}
          <li className="nav-item">
            <Link to="registerartist" className="nav-link px-3">Artist registeration</Link>
          </li> 
          <li className="nav-item">
            <Link to="registercustomer" className="nav-link px-3">Customer registeration</Link>
          </li>
          <li className="nav-item">
            <Link to="registercorperate" className="nav-link px-3">Corporate Customer registeration</Link>
          </li>
          <li className="nav-item">
            <Link to="login" className="nav-link px-3">login</Link>
          </li>
         
           {/* <li className="nav-item">
            <Link to="carporate_customer" className="nav-link px-3">Corporate HomePage</Link>
          </li>  */}
           
          {/* <li className="nav-item">
            <Link to="artists" className="nav-link px-3">Artist</Link>
          </li> 
          <li className="nav-item">
            <Link to="services" className="nav-link px-3">Gallery Services</Link>
          </li>  */}
          <li className="nav-item">
            <Link to="about-us" className="nav-link px-3">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="contact-us" className="nav-link px-3">Contact Us</Link>
          </li>
          </ul>


        </div>
        
      </nav>
      </div>

      
      <h1 className='text-uppercase' style={{fontFamily:'cursive',color:'#461303'}}>Urban Gallery</h1>
      
      <Routes>
        <Route path="login" element={<LoginComp/>}/>
        
         <Route path="register" element={<RegisterComp/>}/> 
        <Route path="registerartist" element={<Artistregister1/>}/>  
        {/* <Route path="registerartist" element={<Artistreg/>}/>  */}

        <Route path="registercustomer" element={<CustomerRegister1/>}/> 
        {/* <Route path="registercustomer" element={<CustomerRegComp/>}/>  */}
      
        <Route path="registercorperate" element={<Co_CustRegister1/>}/> 
        {/* <Route path="registercorperate" element={<Corporatecust/>}/>  */}
      
      
      
        <Route path="artists" element={<ArtistComp/>}/> 
     
        <Route path="services" element={<GalleryServicesComp/>}/> 
      
        <Route path="about-us" element={<AboutUsComp/>}/> 
      
        <Route path="contact-us" element={<ContactUsComp/>}/> 
      
        <Route path="reset-pwd" element={<ForgotPwdComp/>}/> 

        <Route path="admin" element={<AdminComp/>}/>

        <Route path="/" element={<HomeComp/>}/>

        <Route path="carporate_customer" element={<CorporateCustomerComp/>}/>

        <Route path='logout' element={<LogoutComp/>}/>
        <Route path='approval' element={<ApprovalPage/>}/>
        
        

        <Route path='customerHome' element={<CustomerHome/>}/>

        
          <Route path='approve' element={<AdminApprove/>}/>

          <Route path='allArtists' element={<AdminAllArtists/>}/>

          <Route path='allCustomers' element={<AdminAllCustomers/>}/>

          <Route path='allCoCustomers' element={<AdminAllCoCustomers/>}/>

          <Route path='AddArtwork' element={<AddArtworkComp/>}/>

          
          <Route path='ArtistHome' element={<ArtistHomeComp/>}/>

          <Route path='allProducts' element={<CustomerHomeComp/>}/>
          <Route path="allArtist" element={<AllArtists/>}/>

          
        <Route path="addtocart" element={<AddToCart/>}/>
        <Route path="cart" element={<Cart1/>}/>

        <Route path="CorporateCustHome" element={<CorporateCustHome/>}/>
        <Route path="CorporateCustHomeComp" element={<CorporateCustHomeComp/>}/>
        <Route path="CorporateCustNavBar" element={<CorporateCustNavBar/>}/>
        <Route path="AllArtistCorpComp" element={<AllArtistCorpComp/>}/>
        <Route path="AllProductCorpComp" element={<AllProductCorpComp/>}/>
        <Route path="ApprovalCorporateCust" element={<ApprovalCorporateCust/>}/>
        <Route path='ArtistNavBar' element={<ArtistNavBar/>}/>
        <Route path='OrderBill' element={<OrderBill/>}/>
        
        

      </Routes> 

      {/*
      <NavBarComp></NavBarComp>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
  <FooterComp></FooterComp>
    </div>
  );
}

export default App;
