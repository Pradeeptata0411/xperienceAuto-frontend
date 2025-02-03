// /* eslint-disable no-unused-vars */
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/IMAGES/logo.jpeg";
// import "./css/navbar.css";

// export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//     navigate("/");
//   };

//   return (
//     <nav className="navbar navbar-inverse navbar-fixed-top">
//       <div className="container-fluid">
//         <ul className="nav navbar-nav">
//           <li>
//             <span className="logo-mobile hide-in-mobile">
//               <img src={Logo} alt="Logo" height="55px" width="65px" />
//             </span>
//           </li>
//           <li>
//             <Link to="/" className="navbar-brand">
//               XperienceAuto
//             </Link>
//           </li>
//         </ul>
//         <button
//           type="button"
//           className="navbar-toggle right"
//           data-toggle="collapse"
//           data-target="#myNavbar"
//         >
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="myNavbar">
//           {!isLoggedIn ? (
//             <ul className="nav navbar-nav navbar-right">
//               <li>
//                 <Link to="/">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about">
//                   <i className="far fa-address-card"></i> ABOUT
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services">
//                   <i className="fa fa-cogs"></i> SERVICES
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a
//                   href="#!"
//                   className="dropdown-toggle"
//                   data-toggle="dropdown"
//                 >
//                   <i className="glyphicon glyphicon-log-in"></i> LOGIN
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li style={{ fontSize: "18px" }}>
//                     <Link to="/login">Customer Login</Link>
//                   </li>
//                   <li style={{ fontSize: "18px" }}>
//                     <a href="/sellerpage">Seller Login</a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           ) : (
//             <ul className="nav navbar-nav navbar-right">
//               <li>
//                 <Link to="/customerHome">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/customerSpare">
//                   <i className="fas fa-shopping-cart"></i> PRODUCTS
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/customerServiceReq">
//                   <i className="fas fa-cogs"></i> SERVICES
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/viewmyrequests">
//                   <i className="fa fa-info-circle"></i> MY REQUESTS
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a
//                   href="#!"
//                   className="dropdown-toggle"
//                   data-toggle="dropdown"
//                 >
//                   <i className="fas fa-user-circle"></i> cname
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link to="/customerProfile">Profile</Link>
//                   </li>
//                   <li>
//                   <Link
//                           to="/"
//                           className="logout-link"
//                           onClick={(e) => {
//                             e.preventDefault(); // Prevent default link behavior
//                             handleLogout(); // Call the logout function
//                           }}
//                         >
//                           Logout
//                         </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/IMAGES/logo.jpeg";
// import "./css/navbar.css";

// export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
//   const navigate = useNavigate();

//   // Handle Logout
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//     navigate("/");
//   };

//   // Redirect logic before rendering the navbar
//   React.useEffect(() => {
//     if (!isLoggedIn) {
//       navigate("/");
//     } else {
//       navigate("/customerHome");
//     }
//   }, [isLoggedIn, navigate]); // Dependency array ensures navigation happens on login status change.

//   return (
//     <nav className="navbar navbar-inverse navbar-fixed-top">
//       <div className="container-fluid">
//         <ul className="nav navbar-nav">
//           <li>
//             <span className="logo-mobile hide-in-mobile">
//               <img src={Logo} alt="Logo" height="55px" width="65px" />
//             </span>
//           </li>
//           <li>
//             <Link to="/" className="navbar-brand">
//               XperienceAuto
//             </Link>
//           </li>
//         </ul>
//         <button
//           type="button"
//           className="navbar-toggle right"
//           data-toggle="collapse"
//           data-target="#myNavbar"
//         >
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="myNavbar">
//           {!isLoggedIn ? (
//             <ul className="nav navbar-nav navbar-right">
//               <li>
//                 <Link to="/">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about">
//                   <i className="far fa-address-card"></i> ABOUT
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services">
//                   <i className="fa fa-cogs"></i> SERVICES
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a
//                   href="#!"
//                   className="dropdown-toggle"
//                   data-toggle="dropdown"
//                 >
//                   <i className="glyphicon glyphicon-log-in"></i> LOGIN
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li style={{ fontSize: "18px" }}>
//                     <Link to="/login">Customer Login</Link>
//                   </li>
//                   <li style={{ fontSize: "18px" }}>
//                     <a href="/sellerpage">Seller Login</a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           ) : (
//             <ul className="nav navbar-nav navbar-right">
//               <li>
//                 <Link to="/customerHome">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/customerSpare">
//                   <i className="fas fa-shopping-cart"></i> PRODUCTS
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/customerServiceReq">
//                   <i className="fas fa-cogs"></i> SERVICES
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/viewmyrequests">
//                   <i className="fa fa-info-circle"></i> MY REQUESTS
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a
//                   href="#!"
//                   className="dropdown-toggle"
//                   data-toggle="dropdown"
//                 >
//                   <i className="fas fa-user-circle"></i> cname
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link to="/customerProfile">Profile</Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/"
//                       className="logout-link"
//                       onClick={(e) => {
//                         e.preventDefault(); // Prevent default link behavior
//                         handleLogout(); // Call the logout function
//                       }}
//                     >
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }



/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/IMAGES/logo.jpeg";
import {useState , useEffect} from 'react';
import "./css/navbar.css";

// export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [userName, setUserName] = useState("");

//   // Handle Logout
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//     navigate("/");
//   };



//   useEffect(() => {
//     const storedName = localStorage.getItem("userName"); // Assuming userName is saved in localStorage
//     if (storedName) {
//       setUserName(storedName);
//     }
//   }, []);


//   // Redirect logic based on login status, but only for certain paths
//   useEffect(() => {
//     if (location.pathname === "/" || location.pathname === "/customerHome") {
//       if (!isLoggedIn) {
//         navigate("/");
//       } else {
//         navigate("/customerHome");
//       }
//     }
//   }, [isLoggedIn, location.pathname, navigate]); // Add pathname to dependencies to react to location changes.

//   return (
//     <nav className="navbar navbar-inverse navbar-fixed-top">
//       <div className="container-fluid">
//         <ul className="nav navbar-nav">
//           <li>
//             <span className="logo-mobile hide-in-mobile">
//               <img src={Logo} alt="Logo" height="55px" width="65px" />
//             </span>
//           </li>
//           <li>
//             <Link to="/" className="navbar-brand">
//               XperienceAuto
//             </Link>
//           </li>
//         </ul>
//         <button
//           type="button"
//           className="navbar-toggle right"
//           data-toggle="collapse"
//           data-target="#myNavbar"
//         >
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="myNavbar">
//           {!isLoggedIn ? (
//             <ul className="nav navbar-nav navbar-right">
//               <li>
//                 <Link to="/">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about">
//                   <i className="far fa-address-card"></i> ABOUT
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services">
//                   <i className="fa fa-cogs"></i> SERVICES
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a
//                   href="#!"
//                   className="dropdown-toggle"
//                   data-toggle="dropdown"
//                 >
//                   <i className="glyphicon glyphicon-log-in"></i> LOGIN
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li style={{ fontSize: "18px" }}>
//                     <Link to="/login">Customer Login</Link>
//                   </li>
//                   <li style={{ fontSize: "18px" }}>
//                     <a href="/sellerpage">Seller Login</a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           ) : (
//             <ul className="nav navbar-nav navbar-right">
//               <li>
//                 <Link to="/customerHome">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/customerSpare">
//                   <i className="fas fa-shopping-cart"></i> PRODUCTS
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/customerServiceReq">
//                   <i className="fas fa-cogs"></i> SERVICES
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/viewmyrequests">
//                   <i className="fa fa-info-circle"></i> MY REQUESTS
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a
//                   href="#!"
//                   className="dropdown-toggle"
//                   data-toggle="dropdown"
//                 >
//                   <i className="fas fa-user-circle"></i> {userName || "User"}
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link to="/customerProfile">Profile</Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/"
//                       className="logout-link"
//                       onClick={(e) => {
//                         e.preventDefault(); // Prevent default link behavior
//                         handleLogout(); // Call the logout function
//                       }}
//                     >
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }






// export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [userName, setUserName] = useState("");
//   const [userRole, setUserRole] = useState(""); // Add state for userRole

//   // Handle Logout
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("userRole"); // Clear userRole on logout
//     navigate("/");
//   };

//   useEffect(() => {
//     const storedName = localStorage.getItem("userName");
//     const storedRole = localStorage.getItem("userRole"); // Retrieve userRole
//     if (storedName) setUserName(storedName);
//     if (storedRole) setUserRole(storedRole); // Set userRole state
//   }, []);

//   // Redirect logic
//   useEffect(() => {
//     if (location.pathname === "/" || location.pathname === "/customerHome") {
//       if (!isLoggedIn) {
//         navigate("/");
//       } else {
//         navigate(userRole === "seller" ? "/sellerHome" : "/customerHome");
//       }
//     }
//   }, [isLoggedIn, userRole, location.pathname, navigate]);

//   return (
//     <nav className="navbar navbar-inverse navbar-fixed-top">
//       <div className="container-fluid">
//         <ul className="nav navbar-nav">
//           <li>
//             <span className="logo-mobile hide-in-mobile">
//               <img src={Logo} alt="Logo" height="55px" width="65px" />
//             </span>
//           </li>
//           <li>
//             <Link to="/" className="navbar-brand">
//               XperienceAuto
//             </Link>
//           </li>
//         </ul>
//         <button
//           type="button"
//           className="navbar-toggle right"
//           data-toggle="collapse"
//           data-target="#myNavbar"
//         >
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="myNavbar">
//           {!isLoggedIn ? (
//             <ul className="nav navbar-nav navbar-right">
//               {/* Unauthenticated Navbar */}
//               <li>
//                 <Link to="/">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about">
//                   <i className="far fa-address-card"></i> ABOUT
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services">
//                   <i className="fa fa-cogs"></i> SERVICES
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
//                   <i className="glyphicon glyphicon-log-in"></i> LOGIN
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li style={{ fontSize: "18px" }}>
//                     <Link to="/login">Customer Login</Link>
//                   </li>
//                   <li style={{ fontSize: "18px" }}>
//                     <a href="/sellerpage">Seller Login</a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           ) : userRole === "seller" ? (
//             <ul className="nav navbar-nav navbar-right">
//               {/* Seller Navbar */}
//               <li>
//                 <Link to="/sellerHome">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/sellerAddProduct">
//                   <i className="fas fa-shopping-cart"></i> ADD PRODUCT
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/sellerProbyName">
//                   <i className="fas fa-cogs"></i> VIEW PRODUCT
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
//                   <i className="fas fa-user-circle"></i> {userName || "Seller"}
//                 </a>
//                 <ul className="dropdown-menu">
//                 <li>
//                     <Link
//                       to="/"
//                       className="logout-link"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handleLogout();
//                       }}
//                     >
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           ) : (
//             <ul className="nav navbar-nav navbar-right">
//               {/* Customer Navbar */}
//               <li>
//                 <Link to="/customerHome">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/customerSpare">
//                   <i className="fas fa-shopping-cart"></i> PRODUCTS
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/customerServiceReq">
//                   <i className="fas fa-cogs"></i> SERVICES
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/viewmyrequests">
//                   <i className="fa fa-info-circle"></i> MY REQUESTS
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
//                   <i className="fas fa-user-circle"></i> {userName || "User"}
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link to="/customerProfile">Profile</Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/"
//                       className="logout-link"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handleLogout();
//                       }}
//                     >
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


// export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [userName, setUserName] = useState("");
//   const [userRole, setUserRole] = useState("");

//   // Handle Logout
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("userRole");
//     navigate("/");
//   };

//   useEffect(() => {
//     const storedName = localStorage.getItem("userName");
//     const storedRole = localStorage.getItem("userRole");
//     if (storedName) setUserName(storedName);
//     if (storedRole) setUserRole(storedRole);
//   }, []);


//   useEffect(() => {
//     if (isLoggedIn && !localStorage.getItem("isRefreshed")) {
//       setTimeout(() => {
//         window.location.reload(); // Reload the page after 2 seconds
//         localStorage.setItem("isRefreshed", "true"); // Mark that the page has been refreshed
//       }, 2000);
//     }
//   }, [isLoggedIn]);
  

//   // Redirect logic
//   useEffect(() => {
//     if (location.pathname === "/" || location.pathname === "/customerHome") {
//       if (!isLoggedIn) {
//         navigate("/");
//       } else if (userRole === "seller") {
//         navigate("/sellerHome");
//       } else if (userRole === "admin") {
//         navigate("/adminhome");
//       } else {
//         navigate("/customerHome");
//       }
//     }
//   }, [isLoggedIn, userRole, location.pathname, navigate]);

//   return (
//     <nav className="navbar navbar-inverse navbar-fixed-top">
//       <div className="container-fluid">
//         <ul className="nav navbar-nav">
//           <li>
//             <span className="logo-mobile hide-in-mobile">
//               <img src={Logo} alt="Logo" height="55px" width="65px" />
//             </span>
//           </li>
//           <li>
//             <Link to="/" className="navbar-brand">
//               XperienceAuto
//             </Link>
//           </li>
//         </ul>
//         <button
//           type="button"
//           className="navbar-toggle right"
//           data-toggle="collapse"
//           data-target="#myNavbar"
//         >
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="myNavbar">
//           {!isLoggedIn ? (
//             <ul className="nav navbar-nav navbar-right">
//               {/* Unauthenticated Navbar */}
//               <li>
//                 <Link to="/">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about">
//                   <i className="far fa-address-card"></i> ABOUT
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services">
//                   <i className="fa fa-cogs"></i> SERVICES
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
//                   <i className="glyphicon glyphicon-log-in"></i> LOGIN
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li style={{ fontSize: "18px" }}>
//                     <Link to="/login">Customer Login</Link>
//                   </li>
//                   <li style={{ fontSize: "18px" }}>
//                     <a href="/sellerpage">Seller Login</a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           ) : userRole === "seller" ? (
//             <ul className="nav navbar-nav navbar-right">
//               {/* Seller Navbar */}
//               <li>
//                 <Link to="/sellerHome">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/sellerAddProduct">
//                   <i className="fas fa-shopping-cart"></i> ADD PRODUCT
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/sellerProbyName">
//                   <i className="fas fa-cogs"></i> VIEW PRODUCT
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
//                   <i className="fas fa-user-circle"></i> {userName || "Seller"}
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link
//                       to="/"
//                       className="logout-link"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handleLogout();
//                       }}
//                     >
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           ) : userRole === "admin" ? (
//             <ul className="nav navbar-nav navbar-right">
//               {/* Admin Navbar */}
//               <li>
//                 <Link to="/adminhome">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/viewallrequests">
//                   <i className="fa fa-cloud"></i> REQUEST DATA
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
//                   <i className="fa fa-database"></i> VIEW
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link to="/adminViewAllCus">Customer Data</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Seller Data</Link>
//                   </li>
//                   <li>
//                     <Link to="/adminViewAllPro">Product Data</Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="user-dropdown">
//                 <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
//                   <i className="fas fa-user-circle"></i> {userName || "Admin"}
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link
//                       to="/"
//                       className="logout-link"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handleLogout();
//                       }}
//                     >
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           ) : (
//             <ul className="nav navbar-nav navbar-right">
//               {/* Customer Navbar */}
//               <li>
//                 <Link to="/customerHome">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/customerSpare">
//                   <i className="fas fa-shopping-cart"></i> PRODUCTS
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/customerServiceReq">
//                   <i className="fas fa-cogs"></i> SERVICES
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/viewmyrequests">
//                   <i className="fa fa-info-circle"></i> MY REQUESTS
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
//                   <i className="fas fa-user-circle"></i> {userName || "User"}
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link to="/customerProfile">Profile</Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/"
//                       className="logout-link"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handleLogout();
//                       }}
//                     >
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }



// export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [userName, setUserName] = useState("");
//   const [userRole, setUserRole] = useState("");

//   // Handle Logout
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("userRole");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("isRefreshed"); // Reset refresh flag on logout
//     navigate("/");
//   };

//   // Check if user details are available and set state
//   useEffect(() => {
//     const storedName = localStorage.getItem("userName");
//     const storedRole = localStorage.getItem("userRole");
//     if (storedName) setUserName(storedName);
//     if (storedRole) setUserRole(storedRole);
//   }, [isLoggedIn]);

//   // Refresh the page after login (only once for all roles)
//   useEffect(() => {
//     if (isLoggedIn && !localStorage.getItem("isRefreshed")) {
//       setTimeout(() => {
//         window.location.reload(); // Reload the page after 2 seconds
//         localStorage.setItem("isRefreshed", "true"); // Mark that the page has been refreshed
//       }, 2000);
//     }
//   }, [isLoggedIn]);

//   // Redirect logic based on user role and login status
//   useEffect(() => {
//     if (location.pathname === "/" || location.pathname === "/customerHome") {
//       if (!isLoggedIn) {
//         navigate("/");
//       } else if (userRole === "seller") {
//         navigate("/sellerHome");
//       } else if (userRole === "admin") {
//         navigate("/adminhome");
//       } else {
//         navigate("/customerHome");
//       }
//     }
//   }, [isLoggedIn, userRole, location.pathname, navigate]);

//   return (
//     <nav className="navbar navbar-inverse navbar-fixed-top">
//       <div className="container-fluid">
//         <ul className="nav navbar-nav">
//           <li>
//             <span className="logo-mobile hide-in-mobile">
//               <img src={Logo} alt="Logo" height="55px" width="65px" />
//             </span>
//           </li>
//           <li>
//             <Link to="/" className="navbar-brand">
//               XperienceAuto
//             </Link>
//           </li>
//         </ul>
//         <button
//           type="button"
//           className="navbar-toggle right"
//           data-toggle="collapse"
//           data-target="#myNavbar"
//         >
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="myNavbar">
//           {!isLoggedIn ? (
//             <ul className="nav navbar-nav navbar-right">
//               {/* Unauthenticated Navbar */}
//               <li>
//                 <Link to="/">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about">
//                   <i className="far fa-address-card"></i> ABOUT
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services">
//                   <i className="fa fa-cogs"></i> SERVICES
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
//                   <i className="glyphicon glyphicon-log-in"></i> LOGIN
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li style={{ fontSize: "18px" }}>
//                     <Link to="/login">Customer Login</Link>
//                   </li>
//                   <li style={{ fontSize: "18px" }}>
//                     <a href="/sellerpage">Seller Login</a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           ) : userRole === "seller" ? (
//             <ul className="nav navbar-nav navbar-right">
//               {/* Seller Navbar */}
//               <li>
//                 <Link to="/sellerHome">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/sellerAddProduct">
//                   <i className="fas fa-shopping-cart"></i> ADD PRODUCT
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/sellerProbyName">
//                   <i className="fas fa-cogs"></i> VIEW PRODUCT
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
//                   <i className="fas fa-user-circle"></i> {userName || "Seller"}
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link
//                       to="/"
//                       className="logout-link"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handleLogout();
//                       }}
//                     >
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           ) : userRole === "admin" ? (
//             <ul className="nav navbar-nav navbar-right">
//               {/* Admin Navbar */}
//               <li>
//                 <Link to="/adminhome">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/viewallrequests">
//                   <i className="fa fa-cloud"></i> REQUEST DATA
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
//                   <i className="fa fa-database"></i> VIEW
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link to="/adminViewAllCus">Customer Data</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Seller Data</Link>
//                   </li>
//                   <li>
//                     <Link to="/adminViewAllPro">Product Data</Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="user-dropdown">
//                 <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
//                   <i className="fas fa-user-circle"></i> {userName || "Admin"}
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link
//                       to="/"
//                       className="logout-link"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handleLogout();
//                       }}
//                     >
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           ) : (
//             <ul className="nav navbar-nav navbar-right">
//               {/* Customer Navbar */}
//               <li>
//                 <Link to="/customerHome">
//                   <i className="fas fa-home"></i> HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/customerSpare">
//                   <i className="fas fa-shopping-cart"></i> PRODUCTS
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/customerServiceReq">
//                   <i className="fas fa-cogs"></i> SERVICES
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/viewmyrequests">
//                   <i className="fa fa-info-circle"></i> MY REQUESTS
//                 </Link>
//               </li>
//               <li className="user-dropdown">
//                 <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
//                   <i className="fas fa-user-circle"></i> {userName || "User"}
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link to="/customerProfile">Profile</Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/"
//                       className="logout-link"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handleLogout();
//                       }}
//                     >
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    localStorage.removeItem("isRefreshed"); // Reset refresh flag on logout
    localStorage.clear();
    navigate("/");
  };

  // Check if user details are available and set state
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedRole = localStorage.getItem("userRole");
    if (storedName) setUserName(storedName);
    if (storedRole) setUserRole(storedRole);
  }, [isLoggedIn]);

  // Refresh the page after login (only once for all roles)
  useEffect(() => {
    if (isLoggedIn && localStorage.getItem("isRefreshed") === "false") {
      setTimeout(() => {
        window.location.reload(); // Reload the page after 2 seconds
        localStorage.setItem("isRefreshed", "true"); // Mark that the page has been refreshed
      }, 2000);
    }
  }, [isLoggedIn]);

  // Redirect logic based on user role and login status
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/customerHome") {
      if (!isLoggedIn) {
        navigate("/");
      } else if (userRole === "seller") {
        navigate("/sellerHome");
      } else if (userRole === "admin") {
        navigate("/admin/adminhome");
      } else {
        navigate("/customerHome");
      }
    }
  }, [isLoggedIn, userRole, location.pathname, navigate]);

  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li>
            <span className="logo-mobile hide-in-mobile">
              <img src={Logo} alt="Logo" height="55px" width="65px" />
            </span>
          </li>
          <li>
            <Link to="/" className="navbar-brand">
              XperienceAuto
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="navbar-toggle right"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
          {!isLoggedIn ? (
            <ul className="nav navbar-nav navbar-right">
              {/* Unauthenticated Navbar */}
              <li>
                <Link to="/">
                  <i className="fas fa-home"></i> HOME
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="far fa-address-card"></i> ABOUT
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <i className="fa fa-cogs"></i> SERVICES
                </Link>
              </li>
              <li className="user-dropdown">
                <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="glyphicon glyphicon-log-in"></i> LOGIN
                </a>
                <ul className="dropdown-menu">
                  <li style={{ fontSize: "18px" }}>
                    <Link to="/login">Customer Login</Link>
                  </li>
                  <li style={{ fontSize: "18px" }}>
                    <a href="/sellerpage">Seller Login</a>
                  </li>
                </ul>
              </li>
            </ul>
          ) : userRole === "seller" ? (
            <ul className="nav navbar-nav navbar-right">
              {/* Seller Navbar */}
              <li>
                <Link to="/sellerHome">
                  <i className="fas fa-home"></i> HOME
                </Link> 
              </li>
              <li>
                <Link to="/seller/addProduct">
                  <i className="fas fa-shopping-cart"></i> ADD PRODUCT
                </Link>
              </li>
              <li>
                <Link to="/seller/view-product">
                  <i className="fas fa-cogs"></i> VIEW PRODUCT
                </Link>
              </li>
              <li className="user-dropdown">
                <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fas fa-user-circle"></i> {userName || "Seller"}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/"
                      className="logout-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogout();
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          ) : userRole === "admin" ? (
            <ul className="nav navbar-nav navbar-right">
              {/* Admin Navbar */}
              <li>
                <Link to="/admin/adminhome">
                  <i className="fas fa-home"></i> HOME
                </Link>
              </li>
              <li>
                <Link to="/admin/admin-viewAllRequests">
                  <i className="fa fa-cloud"></i> REQUEST DATA
                </Link>
              </li>
              <li className="user-dropdown">
                <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-database"></i> VIEW
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/admin/admin-viewAll-customers">Customer Data</Link>
                  </li>
                  <li>
                    <Link to="/admin/admin-viewAll-sellers">Seller Data</Link>
                  </li>
                  <li>
                    <Link to="/admin/view-all-products">Product Data</Link>
                  </li>
                </ul>
              </li>
              <li className="user-dropdown">
                <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fas fa-user-circle"></i> {userName || "Admin"}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/"
                      className="logout-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogout();
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <ul className="nav navbar-nav navbar-right">
              {/* Customer Navbar */}
              <li>
                <Link to="/customerHome">
                  <i className="fas fa-home"></i> HOME
                </Link>
              </li>
              <li>
                <Link to="/customer/viewProducts">
                  <i className="fas fa-shopping-cart"></i> PRODUCTS
                </Link>
              </li>
              <li>
                <Link to="/customerServiceReq">
                  <i className="fas fa-cogs"></i> SERVICES
                </Link>
              </li>
              <li>
                <Link to="/viewmyrequests">
                  <i className="fa fa-info-circle"></i> MY REQUESTS
                </Link>
              </li>
              <li className="user-dropdown">
                <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fas fa-user-circle"></i> {userName || "User"}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/customerProfile">Profile</Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="logout-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogout();
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
