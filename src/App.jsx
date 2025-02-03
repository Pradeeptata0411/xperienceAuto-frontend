//import { useState } from 'react'
 import {BrowserRouter , Routes ,Route} from 'react-router-dom'
 import './App.css'
 import {useState , useEffect} from 'react';
 import Navbar from './navbar/navbar'
import CustomerNavbar from './components/customer/customerNavbar'
import CustomerLogin from './components/customer/CustomerLogin';
import CustomerHome from './components/customer/Customer-Home';

import SellerAddProductPage from './components/ServiceProvider/SellerAddProduct';




import Home from './navbar/home';
import About from './navbar/about';
import Contact from './navbar/contact';
import CustomerRegistration from './components/customer/CustomerRegister';
import Services from './navbar/Services';
import PageNotFound from './navbar/Pagenotfound';
import CustomerServiceRequestPage from './components/customer/Customer-service-requests';
import CustomerProfile from './components/customer/CustomerProfile';
import CustomerMyRequests from './components/customer/CustomerMyRequestsPage';
import SellerPage from './components/ServiceProvider/sellerPage';
import SellerLoginPage from './components/ServiceProvider/serviceLogin';
import SellerRegistrationPage from './components/ServiceProvider/serviceRegister'
import SellerHome from './components/ServiceProvider/SellerHome';
import AdminLogin from './components/admin/adminLogin';
import AdminHome from './components/admin/adminHome';
import AdminViewAllRequests from './components/admin/admin-viewAllRequests';
import AdminViewAllCustomersData from './components/admin/admin-viewAllCustomers';
import AdminViewAllSellersData from './components/admin/admin-viewAllSellers';
import AdminAddAdmin from './components/admin/admin-addadmin';

import SellerViewProduct from './components/ServiceProvider/SellerViewProducts';
import AdminViewAllProducts from './components/admin/admin-viewAllProducts';


import CustomerViewProducts from './components/customer/CustomerViewProducts';



function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // return (
  //   <BrowserRouter>
  //     {isLoggedIn ? <CustomerNavbar /> : <Navbar />}
  //     <Routes>
  //       {/* Other routes */}
  //       <Route path="/login" element={<CustomerLogin setIsLoggedIn={setIsLoggedIn} />} />
  //       {/* Other routes */}
  //     </Routes>
  //   </BrowserRouter>
  // );
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check localStorage for login state
    return localStorage.getItem("isLoggedIn") === "true"; 
  });

    


  
  useEffect(() => {
    // Save login state to localStorage whenever it changes
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<CustomerLogin setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="register" element={<Register />} /> */}
          <Route path="customerRegister" element={<CustomerRegistration />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/customerHome" element={<CustomerHome />} />
          <Route path="/customerServiceReq" element={<CustomerServiceRequestPage/>} />
          <Route path="/customerProfile" element={<CustomerProfile/>} />
          <Route path="/viewmyrequests" element={<CustomerMyRequests/>} />
          <Route path="/customer/viewProducts" element={<CustomerViewProducts/>} />
          <Route path="/sellerpage" element={<SellerLoginPage/>} />
          <Route path="/sellerRegister" element={<SellerRegistrationPage/>} />
          <Route path="/sellerHome" element={<SellerHome/>} />
          <Route path="/adminLogin" element={<AdminLogin setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/admin/adminHome" element={<AdminHome/>} />
          <Route path="/admin/admin-viewAllRequests" element={<AdminViewAllRequests/>} />
          <Route path="/admin/admin-viewAll-customers" element={<AdminViewAllCustomersData/> }/>
          <Route  path="/admin/admin-viewAll-sellers" element={<AdminViewAllSellersData/>} />
          <Route path="/admin/add-admin" element={<AdminAddAdmin/>} />
          <Route path="/seller/addProduct" element={<SellerAddProductPage/>} />
          <Route path="/seller/view-product" element={<SellerViewProduct/>} />
          <Route path="/admin/view-all-products" element={<AdminViewAllProducts/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App
