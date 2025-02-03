import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../ServiceProvider/serviceCss/sellerLogin.css";

function SellerLoginPage({ setIsLoggedIn }) {
    const [formData, setFormData] = useState({
        sellerEmail: '',
        sellerPassword: '',
      });

    const [message, setMessage] = useState(""); // For displaying error or success messages
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle Seller Login
    const handleSellerLogin = async (e) => {
        e.preventDefault();

        // Client-side validation (basic)
        if (!formData.sellerEmail || !formData.sellerPassword) {
            setMessage("Email and password are required");
            return;
        }

        try {
            // Send a POST request to the backend API
            const response = await axios.post('http://localhost:5000/sellerLogin', formData);

            if (response.status === 200) {
                // On successful login, update localStorage and state
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userRole", "seller");
                setMessage("Login Successful 😊😊 seller");
                localStorage.setItem("userName", response.data.sellerName); // Store the seller's name
                localStorage.setItem("sellerEmail", response.data.sellerEmail);
                localStorage.setItem("sellerContact", response.data.sellerContact_no);
                localStorage.setItem("isLoggedIn", "true");

                setTimeout(() => {
                    navigate('/sellerHome'); // Navigate to admin home
                }, 1000);

                // Force a page reload after navigation
                setTimeout(() => {
                    window.location.reload(); // Reload the page after navigation
                }, 1000);
            }
        } catch (error) {
            // Handle errors (e.g., invalid credentials)
            if (error.response && error.response.data) {
                setMessage(error.response.data.message); // Show backend error message
            } else {
                setMessage("An error occurred. Please try again later.");
                navigate("/sellerHome");
            }
        }
    };

    return (
        <div className="seller-login-container">
            <div className="seller-login-form">
                <form onSubmit={handleSellerLogin}>
                    <h1>Seller Login</h1>
                    <br />
                    <h5 style={{ color: "red", textAlign: "center" }}>{message}</h5> {/* Display error message */}
                    <br />
                    <div className="seller-form-group">
                        <label htmlFor="sellerEmail">
                            <i className="fa fa-user"></i> Email
                        </label>
                        <input
                            type="email"  // Corrected input type
                            id="sellerEmail"
                            name="sellerEmail"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            value={formData.sellerEmail}
                            required
                        />
                    </div>
                    <div className="seller-form-group">
                        <label htmlFor="sellerPassword">
                            <i className="fa fa-lock"></i> Password
                        </label>
                        <input
                            type="password"  // Corrected input type
                            id="sellerPassword"
                            name="sellerPassword"
                            placeholder="Enter your password"
                            value={formData.sellerPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <button className="seller-login-button" type="submit">
                        Login
                    </button>
                    <br />
                    <br />
                    <label htmlFor="username">
                        For First Time <Link to="/sellerRegister"><u>Register Here</u></Link>
                    </label>
                    <br />
                    <br />
                </form>
            </div>
        </div>
    );
}

export default SellerLoginPage;
