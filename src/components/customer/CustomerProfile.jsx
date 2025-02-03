/* eslint-disable no-unused-vars */
import { BrowserRouter } from 'react-router-dom'
import CustomerNavbar from './customerNavbar';
import React, { useEffect, useState } from 'react';
import './customercss/customerprofile.css'
import { Navigate } from 'react-router-dom';


function CustomerProfile() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userNumber, setContactNumber] = useState("");
    const [userGender, setGender] = useState("");


    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; 


    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
      }

    useEffect(() => {
        const storedName = localStorage.getItem("userName");
        const storedEmail = localStorage.getItem("userEmail");
        const storedNumber = localStorage.getItem("userNumber");
        const storedGender = localStorage.getItem("userGender");

        console.log("Fetched userName:", storedName); // Debugging line
        if (storedName) {
            setUserName(storedName);
            setUserEmail(storedEmail);
            setContactNumber(storedNumber);
            setGender(storedGender);
        }
    }, []);

    return (
        <>
            <div className="container-profile">
                <div className="row">
                    <div className="col-md-6">
                        <div className="profile-info">
                            <div className="profile-name">fullname:{userName}</div>
                            <div className="profile-email">email:{userEmail}</div>
                            <div className="profile-email">gender:{userGender}</div>
                            <div className="profile-email">contactno:{userNumber}</div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="change-password-form">
                            <h2>Update User Details</h2>
                            <div className="form-profile">
                            <form action="updateCusProfile" method="post" >
                                <span className="blink">
                                    <h5 style={{ textAlign: 'center', color: 'red' }} >message</h5>
                                </span>
                                <div className="form-group">
                                    <label htmlFor="name"><i className="fas fa-user"></i> Full Name:</label>
                                    <input type="text" id="name" name="name" value={userName} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="fas fa-envelope"></i> Email:</label>
                                    <input type="text" id="email" name="email" value={userEmail} readOnly />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone"><i className="fas fa-phone"></i> Phone Number:</label>
                                    <input type="text" id="phone" name="phone" pattern="[789][0-9]{9}" value={userNumber} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone"><i className="fas fa-lock"></i> Password:</label>
                                    <input type="password" id="password" name="password" pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,30})" placeholder="Enter password" title="Password must contain atleast one number [0-9],uppercase [A-Z],special character [!@#$%^&*], length > 8!! try again!!" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gender"><i className="fas fa-venus-mars"></i> Gender: <h2>{userGender}</h2></label>
                                </div>
                                <button className="btn-primary" type="submit"><i className="fas fa-check"></i> Update Details</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}



export default CustomerProfile