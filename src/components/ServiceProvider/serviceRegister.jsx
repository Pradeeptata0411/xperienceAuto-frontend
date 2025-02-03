import React, { useState } from 'react';
import './serviceCss/sellerRegister.css';
import axios from 'axios';

function SellerRegistrationPage() {
    const [message, setMessage] = useState("");

    const [sellerRegisterData, setSellerRegisterData] = useState({
        sellerName: '',
        sellerEmail: '',
        sellerPassword: '',
        sellerGender: '',
        sellerContact_no: '',
        sellerStatus:'false',
    });

    const Changedata = (e) => {
        const { name, value } = e.target;
        setSellerRegisterData({ ...sellerRegisterData, [name]: value });
    };

    const SubmitSellerData = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/sellerRegisterData", sellerRegisterData);

            if (response.status === 201) { // Check for status 201 (Created)
                setMessage("Registration Successful");
                setSellerRegisterData({
                    sellerName: '',
                    sellerEmail: '',
                    sellerPassword: '',
                    sellerGender: '',
                    sellerContact_no: '',
                    sellerStatus:'false',
                });
            } else {
                setMessage(response.data.message || 'Registration Failed');
            }
        } catch (error) {
            console.error("Error", error);

            if (error.response) {
                setMessage(error.response.data.message || 'Registration Failed');
            } else {
                setMessage('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="registration-container">
            <div className="registration-form">
                <form onSubmit={SubmitSellerData}>
                    <h1>Seller Registration</h1>
                    <br />
                    <span className="seller_register_blink">
                        <h5 style={{ color: 'green', textAlign: 'center' }}>{message}</h5>
                    </span>
                    <br />
                    <div className="Seller-register-form-group">
                        <label htmlFor="sellerName">
                            <i className="fa fa-user"></i> Full Name
                        </label>
                        <input
                            type="text"
                            id="sellerName"
                            name="sellerName"
                            value={sellerRegisterData.sellerName}
                            onChange={Changedata}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="Seller-register-form-group">
                        <label htmlFor="sellerEmail">
                            <i className="fa fa-envelope"></i> Email
                        </label>
                        <input
                            type="email"
                            id="sellerEmail"
                            name="sellerEmail"
                            pattern=".+@gmail\.com"
                            placeholder="Enter your email"
                            value={sellerRegisterData.sellerEmail}
                            onChange={Changedata}
                            title="Email format must be xxx@gmail.com"
                            required
                        />
                    </div>
                    <div className="Seller-register-form-group">
                        <label htmlFor="sellerGender">
                            <i className="fa fa-venus-mars"></i> Gender
                        </label>
                        <select
                            id="sellerGender"
                            name="sellerGender"
                            value={sellerRegisterData.sellerGender}
                            onChange={Changedata}
                            required
                        >
                            <option value="" disabled>
                                Select your gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="Seller-register-form-group">
                        <label htmlFor="sellerPassword">
                            <i className="fa fa-lock"></i> Password
                        </label>
                        <input
                            type="password"
                            id="sellerPassword"
                            name="sellerPassword"
                            value={sellerRegisterData.sellerPassword}
                            onChange={Changedata}
                            
                            placeholder="Enter your password"
                            title="Password must contain at least one number [0-9], uppercase [A-Z], special character [!@#$%^&*], length > 8!! Try again!!"
                            required
                        />
                    </div>
                    <div className="Seller-register-form-group">
                        <label htmlFor="sellerContact_no">
                            <i className="fa fa-phone"></i> Contact Number
                        </label>
                        <input
                            type="text"
                            id="sellerContact_no"
                            name="sellerContact_no"
                            value={sellerRegisterData.sellerContact_no}
                            onChange={Changedata}
                            placeholder="Enter your contact number"
                            required
                        />
                    </div>
                    <button className="registration-button" type="submit">
                        Register
                    </button>
                    <br />
                    <br />
                </form>
            </div>
        </div>
    );
}

export default SellerRegistrationPage;
