import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './customercss/customercss.css';

export default function CustomerLogin({setIsLoggedIn}) { // Add setIsLoggedIn prop
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const customerLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('https://xperienceauto-backend.onrender.com/login', formData);
            
            if (response.status === 200) {
                const userName = response.data.name; 
                const userEmail = response.data.email;
                const userNumber = response.data.contact_no;
                const userGender = response.data.gender;
                setMessage("Login Successful 😊😊");
                setIsLoggedIn(true); // Set login state to true
                localStorage.setItem("isLoggedIn", "true"); // Persist login state
                localStorage.setItem("userName", userName);
                localStorage.setItem("userEmail", userEmail);
                localStorage.setItem("userNumber" , userNumber);
                localStorage.setItem("userGender" , userGender);
                setTimeout(() => {
                    navigate('/customerHome'); // Navigate to admin home
                }, 1000);

                // Force a page reload after navigation
                setTimeout(() => {
                    window.location.reload(); // Reload the page after navigation
                }, 1000);
            } else {
                setMessage(response.data.message || 'Login Failed');
            }
        } catch (error) {
            console.error('error', error);
            if (error.response) {
                setMessage(error.response.data.message || "Invalid credentials");
            } else {
                setMessage("An error occurred, please try again");
            }
        }
    };
    

    return (
        <div>
            {/* <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div> */}
            
            <form style={{ marginTop: '50px' }} onSubmit={customerLogin}>
                <span className="blink">
                    <h5 style={{ color: 'red' }}>{message}</h5>
                </span>
                <h3>Login Here</h3>

                <label htmlFor="email"><i className="fa fa-user-alt"></i> Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                <div style={{ position: 'relative' }}>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{ paddingRight: '30px' }}
                    />
                    <i
                        className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                            color: '#000'
                        }}
                        onClick={() => setShowPassword(!showPassword)}
                    ></i>
                </div>

                <button type="submit" className="button-blue">Log In</button>
                <label>For First Time? <Link to="/customerRegister"><u>Register Here</u></Link></label><br /><br />
            </form>
        </div>
    );
}